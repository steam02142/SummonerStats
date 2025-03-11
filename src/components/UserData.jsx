import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MatchPreviewCard from './MatchPreview';
import MatchesList from './MatchesList';

function UserData() {
    const {id} = useParams()
    const [PUUID, setPUUID] = useState(null)
    const [profileIcon, setProfileIcon] = useState(null)
    const [matchData, setMatchData] = useState(null)

    const args = id.split("-")
    let riot_id = args[0]
    let tagline = args[1]
    let region = args[2]

    useEffect(() => {
        const getPUUID = async () => {
        let response = await fetch(`http://64.23.226.14:8000/puuid?riot_id=${riot_id}&tagline=${tagline}&region=${region}`);
        let data = await response.json();
        setPUUID(data["puuid"]);
        };

        getPUUID();
        
    }, [riot_id, tagline]); // Run when `riot_id` or `tagline` changes

    useEffect(()=> { 
      const getMatchData = async () => {
        let response = await fetch(`http://64.23.226.14:8000/matches?puuid=${PUUID}&num_matches=10&region=${region}`)
        let data = await response.json()
        setMatchData(data)
      }

      const getProfileIcon = async () => {
        let response = await fetch(`http://64.23.226.14:8000/profileIcon?puuid=${PUUID}`)
        let data = await response.json()
        setProfileIcon(data)
      }

      if(PUUID) {
        getMatchData();
        getProfileIcon();
      } 

    }, [PUUID])

    return (
        <div>
            <div className="flex py-3">
              <div className="flex align-bottom">
                <img src={profileIcon} alt="" className="size-24 border border-white" />
              </div>
              <h2 className="text-white text-3xl font-bold pl-2 pt-2">{riot_id}#{tagline}</h2>
            </div>
            
            <h3 className="text-white text-2xl font-bold pb-2">Match History</h3>            
            <MatchesList matchData={matchData} region={region} />
        </div>
    )
}

export default UserData;

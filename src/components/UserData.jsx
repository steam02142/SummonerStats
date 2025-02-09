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
        let response = await fetch(`http://127.0.0.1:8000/puuid?riot_id=${riot_id}&tagline=${tagline}&region=${region}`);
        let data = await response.json();
        setPUUID(data["puuid"]);
        };

        getPUUID();
        
    }, [riot_id, tagline]); // Run when `riot_id` or `tagline` changes

    useEffect(()=> { 
      const getMatchData = async () => {
        let response = await fetch(`http://127.0.0.1:8000/matches?puuid=${PUUID}&num_matches=2&region=${region}`)
        let data = await response.json()
        setMatchData(data)
      }

      const getProfileIcon = async () => {
        let response = await fetch(`http://127.0.0.1:8000/profileIcon?puuid=${PUUID}`)
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
            <h2 className="text-white text-3xl font-bold">{riot_id}#{tagline}</h2>
            <div className="flex pb-3 align-bottom">
              <img src={profileIcon} alt="" className="size-24 rounded-full border border-white" />
              <p className="text-white">Region: {region}</p>
            </div>
            

            <MatchesList matchData={matchData} region={region} />
        </div>
    )
}

export default UserData;

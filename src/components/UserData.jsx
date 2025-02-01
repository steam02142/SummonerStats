import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MatchPreviewCard from './MatchPreview';
import MatchesList from './MatchesList';

function UserData() {
    const {id} = useParams()
    const [PUUID, setPUUID] = useState(null)
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
      if(PUUID) {
        // console.log("PUUID set " + PUUID)
      }  

      const getMatchData = async () => {
        let response = await fetch(`http://127.0.0.1:8000/matches?puuid=${PUUID}&num_matches=2&region=${region}`)
        let data = await response.json()
        setMatchData(data)
      }

      if(PUUID) {
        getMatchData();
      } 

    }, [PUUID])

    return (
        <div>
            <p>Summoner name and tagline: {riot_id} #{tagline} in region {region}</p>
            <MatchesList matchData={matchData} region={region} />
        </div>
    )
}

export default UserData;

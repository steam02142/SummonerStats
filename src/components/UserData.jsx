import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MatchPreviewCard from './MatchPreview';

function UserData() {
    const {id} = useParams()
    const [PUUID, setPUUID] = useState(null)
    const [titleCard, setTitleCard] = useState(null)

    let riot_id = id.slice(0, id.indexOf('-'))
    let tagline = id.slice(id.indexOf('-') + 1, id.length)

    useEffect(() => {
        const getPUUID = async () => {
        let response = await fetch(`http://127.0.0.1:8000/puuid?riot_id=${riot_id}&tagline=${tagline}`);
        let data = await response.json();
        setPUUID(data["puuid"]);
    };

        getPUUID();
    }, [riot_id, tagline]); // Run when `riot_id` or `tagline` changes

useEffect(() => {
  if (PUUID) { // Only run if `PUUID` is not null
    const getTitleCard = async () => {
      let response = await fetch(`http://127.0.0.1:8000/titlecard?puuid=${PUUID}&num_matches=1`);
      let data = await response.json();
      console.log("Title Card JSON:", data); 
      setTitleCard(data);
      console.log("Title Card JSON:", titleCard.win); 

    };

    getTitleCard();
  }
}, [PUUID]); // Run when `PUUID` updates

    return (
        <div>
            <p>Summoner name and tagline: {riot_id} #{tagline}</p>
            <p>PUUID: {PUUID}</p>
            <MatchPreviewCard></MatchPreviewCard>
        </div>
    )
}

export default UserData;

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MatchPreviewCard from './MatchPreview';

function UserData() {
    const {id} = useParams()
    const [PUUID, setPUUID] = useState(null)
    const [titleCard, setTitleCard] = useState(null)

    const args = id.split("-")
    console.log(args)
    let riot_id = args[0]
    let tagline = args[1]
    let region = args[2]
    console.log(riot_id)

    useEffect(() => {
        const getPUUID = async () => {
        let response = await fetch(`http://127.0.0.1:8000/puuid?riot_id=${riot_id}&tagline=${tagline}&region=${region}`);
        let data = await response.json();
        setPUUID(data["puuid"]);
        };

        getPUUID();
    }, [riot_id, tagline]); // Run when `riot_id` or `tagline` changes

    return (
        <div>
            <p>Summoner name and tagline: {riot_id} #{tagline} in region {region}</p>
            <p>PUUID: {PUUID}</p>
            <MatchPreviewCard></MatchPreviewCard>
        </div>
    )
}

export default UserData;

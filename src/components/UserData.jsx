import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// Steps 
// 1. https://developer.riotgames.com/apis#account-v1 to get puuid
// 2. https://developer.riotgames.com/apis#summoner-v4 to get summoner (not sure if needed)
// 3. https://developer.riotgames.com/apis#match-v5/GET_getMatch to get info on matches using puuid

function UserData() {
    const {id} = useParams()
    const [PUUID, setPUUID] = useState(null)

    let riot_id = id.slice(0, id.indexOf('-'))
    let tagline = id.slice(id.indexOf('-') + 1, id.length)

    useEffect(()=> {
        fetch(`http://127.0.0.1:8000/puuid?riot_id=${riot_id}&tagline=${tagline}`)
            .then(res => {
                return res.json();
            })
            .then((data)=> {
                setPUUID(data["puuid"])
            })
    }, [])

    return (
        <div>
            <p>Summoner name and tagline: {riot_id} #{tagline}</p>
            <p>PUUID: {PUUID}</p>
        </div>
    )
}

export default UserData;

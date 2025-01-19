import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Steps 
// 1. https://developer.riotgames.com/apis#account-v1 to get puuid
// 2. https://developer.riotgames.com/apis#summoner-v4 to get summoner (not sure if needed)
// 3. https://developer.riotgames.com/apis#match-v5/GET_getMatch to get info on matches using puuid

function InputForm() {
    const [riotid, setRiotid] = useState('');
    const [tagline, setTagline] = useState('');
    const [region, setRegion] = useState('NA');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        console.log("submitted")
        navigate(`/Profile/${riotid}-${tagline}`)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="p-10">
                <div className="flex gap-3 ">
                    <label className="flex flex-col pb-2">RIOT ID
                    <input className="outline outline-1"
                        type="text"
                        required
                        value={riotid}
                        onChange={(e)=> setRiotid(e.target.value)}
                    />
                    </label>
                    <label className="flex flex-col">TAGLINE
                        <input className="outline outline-1" 
                            type="text"
                            required 
                            onChange={(e)=> setTagline(e.target.value)}
                        />
                    </label>
                    <select
                        value={region}
                        onChange={(e)=> setRegion(e.target.value)}
                    >
                        <option value="NA">NA</option>
                        <option value="EU">EU</option>

                    </select>
                </div>
                <div className="flex justify-center mt-4">
                    <button type="button" className="border rounded px-4" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
            <p>{riotid}, {tagline}, {region}</p>
        </div>
    )
}

export default InputForm;
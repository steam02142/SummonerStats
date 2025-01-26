import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Steps 
// 1. https://developer.riotgames.com/apis#account-v1 to get puuid
// 2. https://developer.riotgames.com/apis#summoner-v4 to get summoner (not sure if needed)
// 3. https://developer.riotgames.com/apis#match-v5/GET_getMatch to get info on matches using puuid

function InputForm() {
    const [riotid, setRiotid] = useState('');
    const [tagline, setTagline] = useState('');
    const [region, setRegion] = useState('americas');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        console.log("submitted")
        navigate(`/Profile/${riotid}-${tagline}-${region}`)
    }

    return (
        <div className="">
            <form className="">
                <div className="flex justify-center">
                    <label className="flex flex-col pb-2 text-sm font-medium">Region
                        <select
                            value={region}
                            onChange={(e)=> setRegion(e.target.value)}
                            className="outline outline-1 outline-slate-400 py-2 px-4 bg-white text-black rounded-l-md h-9"
                        >
                            <option value="americas">NA</option>
                            <option value="EU">EU</option>

                        </select>
                    </label>
                    
                    <div className="flex">
                        <label className="flex flex-col pb-2 text-sm font-medium">Game Name
                        <input className="outline outline-1 outline-slate-400 py-2 px-4 w-72 text-black"
                            type="text"
                            required
                            value={riotid}
                            onChange={(e)=> setRiotid(e.target.value)}
                        />
                        </label>
                    </div>
                    <div className="flex">
                        <label className="flex flex-col pb-2 text-sm font-medium">Tagline
                            <input className="outline outline-1 outline-slate-400 py-2 px-4 w-32 rounded-r-md text-black" 
                                type="text"
                                required 
                                onChange={(e)=> setTagline(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button type="submit" className="border rounded px-4 py-1" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InputForm;
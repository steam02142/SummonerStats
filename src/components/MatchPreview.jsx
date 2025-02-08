import { useState } from "react"
import GoldChart from "./LineChartTest"
import LeftSection from "./match preview components/LeftSection"
import MiddleSection from "./match preview components/MiddleSection"
import RightSection from "./match preview components/RightSection"


const MatchPreviewCard = ({matchData, region}) => {
    const [open, setOpen] = useState(false)
    const previewColours = {
        win: "bg-gradient-to-r from-cyan-500/40 to-blue-500/40",
        loss: "bg-gradient-to-r from-rose-600/40 to-blue-500/40"
    }

    const primaryPlayer = matchData.primary_player_stats
    const matchStats = matchData.match_stats
    const allPlayers = matchData.all_players

    const blueTeam = allPlayers.slice(0, 5)
    const redTeam = allPlayers.slice(5, 10)

    return ( 
        <div className={`mb-4 rounded-md text-white 
                ${primaryPlayer.won?
                    previewColours.win:
                    previewColours.loss
                }`}
                onClick={()=> setOpen(!open)}>

            <div className="flex justify-between outline rounded-md outline-1 px-10 py-5" >

                <LeftSection primaryPlayer={primaryPlayer} matchStats={matchStats}></LeftSection>

                <MiddleSection primaryPlayer={primaryPlayer}></MiddleSection>

                <RightSection blueTeam={blueTeam} redTeam={redTeam}></RightSection>
            </div>
            <div className="bg-white">
                {open ? 
                    <GoldChart matchid={matchStats.matchId} region={region} primaryPlayer={primaryPlayer.championName}></GoldChart>
                    :<></>
                }
            </div>
        </div>
    );
}
 
export default MatchPreviewCard;
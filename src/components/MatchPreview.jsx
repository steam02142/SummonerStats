import { useState } from "react"
import LeftSection from "./matchPreviewComponents/LeftSection"
import MiddleSection from "./matchPreviewComponents/MiddleSection"
import RightSection from "./matchPreviewComponents/RightSection"
import ExtraMatchData from "./extraMatchData/ExtraMatchData"


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
        <div className={`mb-4 rounded-md text-white outline outline-1
                ${primaryPlayer.won?
                    previewColours.win:
                    previewColours.loss
                }`}
                >

            <div className="flex justify-between rounded-md outline-1 px-10 py-5 cursor-pointer hover:bg-black/10" onClick={()=> setOpen(!open)}>

                <LeftSection primaryPlayer={primaryPlayer} matchStats={matchStats}></LeftSection>

                <MiddleSection primaryPlayer={primaryPlayer}></MiddleSection>

                <RightSection blueTeam={blueTeam} redTeam={redTeam}></RightSection>
            </div>
            <div>
                {open?
                    <ExtraMatchData primaryPlayer={primaryPlayer} blueTeam={blueTeam} redTeam={redTeam} backgroundColours={previewColours}
                                    matchid={matchStats.matchId} region={region}></ExtraMatchData>
                    :<></>
                   
                }
                
            </div>
        </div>
    );
}
 
export default MatchPreviewCard;
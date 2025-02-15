import { useState } from "react";
import ExtraMatchDataRow from "./ExtraMatchDataRow";
import InformationSelector from "./InformationSelector";
import GoldChart from "./LineChartTest";

const ExtraMatchData = ({primaryPlayer, blueTeam, redTeam, backgroundColours, matchid, region}) => {
    const [selected, setSelected] = useState("Scoreboard")

    return (  
        <div className="bg-[#1B2335]">
            <InformationSelector selected={selected} setSelected={setSelected}></InformationSelector>
            {selected === "Scoreboard" && 
                <>
                <ExtraMatchDataRow primaryPlayer={primaryPlayer} players={blueTeam} team="Blue" backgroundColours={backgroundColours}></ExtraMatchDataRow>
                <ExtraMatchDataRow primaryPlayer={primaryPlayer} players={redTeam} team="Red" backgroundColours={backgroundColours}></ExtraMatchDataRow>
                </>
            }

            {selected === "Graphs" &&
                <div 
                className={`${primaryPlayer.won ? backgroundColours.win : backgroundColours.loss} 
                            py-2 flex justify-center`}>
                <GoldChart matchid={matchid} region={region} primaryPlayer={primaryPlayer.championName}></GoldChart>
            </div>
            }
        </div>  
    );
    
    
}
 
export default ExtraMatchData;
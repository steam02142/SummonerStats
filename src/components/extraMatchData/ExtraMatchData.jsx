import { useState } from "react";
import ExtraMatchDataRow from "./ExtraMatchDataRow";
import InformationSelector from "./InformationSelector";
import TimelineChart from "./TimelineChart";
import GraphSelector from "./GraphSelector";

const ExtraMatchData = ({primaryPlayer, blueTeam, redTeam, backgroundColours, matchid, region}) => {
    const [selected, setSelected] = useState("Scoreboard")
    const [chartType, setChartType] = useState("totalGold")

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
                <div>
                    <GraphSelector chartType={chartType} setChartType={setChartType}></GraphSelector>
                    <div 
                        className={`${primaryPlayer.won ? backgroundColours.win : backgroundColours.loss} 
                                    py-2 flex justify-center`}>
                        <TimelineChart matchid={matchid} region={region} primaryPlayer={primaryPlayer.championName} chartType={chartType}></TimelineChart>
                    </div>
                </div>
            }
        </div>  
    );
    
    
}
 
export default ExtraMatchData;
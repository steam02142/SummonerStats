import { useState } from "react";
import ExtraMatchDataRow from "./ExtraMatchDataRow";
import InformationSelector from "./InformationSelector";
import GoldChart from "./LineChartTest";

const ExtraMatchData = ({primaryPlayer, blueTeam, redTeam, backgroundColours, matchid, region}) => {
    const [selected, setSelected] = useState("Scoreboard")


    if (selected == "Scoreboard") {
        return (  
            <div className="bg-[#1B2335]">
                <InformationSelector selected={selected} setSelected={setSelected}></InformationSelector>
                <ExtraMatchDataRow primaryPlayer={primaryPlayer} players={blueTeam} team="Blue" backgroundColours={backgroundColours}></ExtraMatchDataRow>
                <ExtraMatchDataRow primaryPlayer={primaryPlayer} players={redTeam} team="Red" backgroundColours={backgroundColours}></ExtraMatchDataRow>
            </div>  
        );
    } else {
        return (
            <div className="bg-[#1B2335]">
                <InformationSelector selected={selected} setSelected={setSelected}></InformationSelector>
                <div className={`${primaryPlayer.won ? backgroundColours.win : backgroundColours.loss} py-2`}>
                    <GoldChart matchid={matchid} region={region} primaryPlayer={primaryPlayer.championName}></GoldChart>
                </div>
                
            </div>
        );
    }
    
}
 
export default ExtraMatchData;
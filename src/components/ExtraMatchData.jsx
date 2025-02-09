import ExtraMatchDataRow from "./ExtraMatchDataRow";

const ExtraMatchData = ({primaryPlayer, blueTeam, redTeam, backgroundColours}) => {
    return (  
        <div className="bg-[#1B2335]">
            <ExtraMatchDataRow primaryPlayer={primaryPlayer} players={blueTeam} team="Blue" backgroundColours={backgroundColours}></ExtraMatchDataRow>
            <ExtraMatchDataRow primaryPlayer={primaryPlayer} players={redTeam} team="Red" backgroundColours={backgroundColours}></ExtraMatchDataRow>
        </div>
        
    );
}
 
export default ExtraMatchData;
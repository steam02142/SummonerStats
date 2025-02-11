import PlayerList from "./PlayerList";

const RightSection = ({  blueTeam, redTeam }) => {
    return (  

        <div className="flex gap-5 text-sm">
            <PlayerList team={blueTeam} teamName="Blue Team" />
            <PlayerList team={redTeam} teamName="Red Team" />
        </div>

    );
}
 
export default RightSection;
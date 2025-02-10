const PlayerList = ({ team, teamName }) => {
    const isBlueSide = teamName === "Blue Team"
    return (  
        <div className="content-center">
            {team.map((player) => (
                <div key={player.riotName} className={`flex items-center gap-2 ${isBlueSide? "flex-row-reverse": ""}`}>  
                    <img 
                        className="size-6"
                        src={player.champion_icon} 
                        alt={`${player.riotName}'s champion`} 
                        loading="lazy"
                        title={player.championName}
                    />
                    <p className={`truncate w-24 ${isBlueSide? "text-right": ""}`}>{player.riotName}</p>
                </div>

            ))}
        </div>
    );
}
 
export default PlayerList;
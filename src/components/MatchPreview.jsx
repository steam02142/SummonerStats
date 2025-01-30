const MatchPreviewCard = ({matchData}) => {
    const primaryPlayer = matchData.primary_player_stats
    const matchStats = matchData.match_stats
    const allPlayers = matchData.all_players

    const blueTeam = allPlayers.slice(0, 5)
    const redTeam = allPlayers.slice(5, 10)

    const PlayerList = ({ team, teamName }) => (
    <div>
        <p className="font-bold">{teamName}</p>
        {team.map((player) => (
            <div key={player.riotName} className="flex items-center gap-2">
                <img 
                    className="size-7"
                    src={player.champion_icon} 
                    alt={`${player.riotName}'s champion`} 
                    loading="lazy"
                    title={player.championName}
                />
                <p className="truncate w-24">{player.riotName}</p>
            </div>
        ))}
    </div>
    );

    const Summoners = () => (
    <div>
        <p>Summoners</p>
        {primaryPlayer.summoners.map((summoner, index) => (
            <div key={index} className="flex items-center gap-2">
                <img 
                    className="size-6"
                    src={summoner.icon}  
                    loading="lazy"
                />
                {/* Title adds the tooltip */}
                <p className="truncate w-24" title={summoner.name}>{summoner.name}</p>
            </div>
        ))}
    </div>
    );

    const Items = () => (
    <div>
        <p>Items</p>
        {primaryPlayer.items.map((item, index) => {
            if(item != null) {
            return (
            <div key={index} className="flex items-center gap-2">
                <img 
                    className="size-6"
                    src={item.icon}  
                    loading="lazy"
                />
                {/* Title adds the tooltip */}
                <p className="truncate w-24" title={item.name}>{item.name}</p>
            </div>
            )}
    })}
    </div>
    );

    return ( 
        <div className="flex justify-between outline outline-1 p-3">
            <div>
                {primaryPlayer.championName}
                <img
                    className="outline outline-2 rounded-full size-16"
                    src={primaryPlayer.champion_icon} />
            </div>

            <div className="grid">
                <div>
                    <span>{primaryPlayer.won? 'Victory':'Defeat'} - </span>
                    <span>{matchStats.gameMode} - </span>
                    <span>{((matchStats.gameDuration)/60).toFixed(0) + " minutes"}</span>
                </div>

                <div className="flex justify-between">
                    <div>
                        <div>K/D/A</div>
                         <div>{primaryPlayer.kills}/{primaryPlayer.deaths}/{primaryPlayer.assists}</div>

                    </div>

                    <div >
                        <Summoners></Summoners>
                    </div>

                    <div>
                        <Items></Items>

                    </div>
                </div>
            </div>

            <div className="flex gap-5 text-sm">
                <PlayerList team={blueTeam} teamName="Blue Team" />
                <PlayerList team={redTeam} teamName="Red Team" />
            </div>
            
        </div>
    );
}
 
export default MatchPreviewCard;
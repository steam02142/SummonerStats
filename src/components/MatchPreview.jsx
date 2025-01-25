const MatchPreviewCard = ({matchData}) => {

    console.log(matchData)

    const primaryPlayer = matchData.primary_player_stats
    const matchStats = matchData.match_stats
    const allPlayers = matchData.all_players

    const team1 = allPlayers.slice(0, 5)
    const team2 = allPlayers.slice(5, 10)

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
                    <span>Won? - </span>
                    <span>{matchStats.gameMode} - </span>
                    <span>{((matchStats.gameDuration)/60).toFixed(2) + " minutes"}</span>
                </div>

                <div className="flex justify-between">
                    <div>
                        <div>K/D/A</div>
                         <div>{primaryPlayer.kills}/{primaryPlayer.deaths}/{primaryPlayer.assists}</div>

                    </div>

                    <div >
                        Summoners
                        <img src={primaryPlayer.summoner1.icon} />
                        <img src={primaryPlayer.summoner2.icon} />
                    </div>

                    <div>
                        Items 
                        <img src={primaryPlayer.item0.icon} />
                        <img src={primaryPlayer.item1.icon} />
                        <img src={primaryPlayer.item2.icon} />
                        <img src={primaryPlayer.item3.icon} />
                    </div>
                </div>
            </div>

            <div className="flex gap-5 text-sm">
                <div>
                    <p>team a</p>
                    
                    {team1.map((player, index)=>{
                        return(
                            <div className="flex">
                                <img 
                                    className="size-6"
                                    src={player.champion_icon}/>
                                <p>{player.riotName}</p>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <p>team b</p>
                    {team2.map((player, index)=>{
                        return(
                            <div className="flex">
                                <img
                                    className="size-6" 
                                    src={player.champion_icon}/>
                                <p className="truncate">
                                    {player.riotName}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    );
}
 
export default MatchPreviewCard;
import Items from "./match preview components/Items";
import Summoners from "./match preview components/Summoners";

const ExtraMatchDataRow = ({primaryPlayer, players, team, backgroundColours}) => {
    let primaryPlayerOnTeam = players.find((player)=>player.riotName == primaryPlayer.riotName)
    let won = false
    if((primaryPlayerOnTeam && primaryPlayer.won) || (!primaryPlayerOnTeam && !primaryPlayer.won)){
        won = true
    }

    return (  
        <div className={`w-full  ${won? backgroundColours.win: backgroundColours.loss}`}>
            <div className="flex bg-[#1b2335ad] pt-1">
                <div className="w-1/4 pl-4">
                    <span className={`${won? "text-blue-600" : "text-red-600"} font-bold text-lg`}>
                        {won? "Victory" : "Defeat"} 
                    </span>
                    <span className="text-white/80"> ({team} Team)</span>
                </div>

                <p className="w-1/4 text-center">Items</p>
                <p className="w-1/6 text-center">KDA</p>
                <p className="w-1/12 text-center">Damage</p>
                <p className="w-1/12 text-center">Gold</p>
                <p className="w-1/12 text-center">CS</p>
            </div>
            <div>
                {players.map((player, index)=> {
                    return(
                        <div key={index} className="flex items-center text-white/80 p-1">
                            <div className="flex p-2 items-center w-1/4">
                                <img src={player.champion_icon} className="size-9" />
                                <Summoners primaryPlayer={player} size={4}></Summoners>
                                <div>
                                    <h2 className={`font-bold ${player.riotName == primaryPlayer.riotName? "text-amber-300" : "text-white"}`}>
                                        {player.riotName}
                                    </h2>
                                    <p className="text-xs text-gray-500">{player.championName}</p>
                                </div>
                            </div>
                            <div className="w-1/4 flex justify-center">
                                    <Items primaryPlayer={player} size={"size-6"}></Items>
                            </div>
                            <div className="w-1/6 text-center">
                                <div>
                                    <span className="font-semibold text-sm">{player.kills}</span>
                                    <span className="text-gray-400 text-sm mx-[2px]">/</span>
                                    <span className="font-semibold text-sm">{player.deaths}</span>
                                    <span className="text-gray-400 text-sm mx-[2px]">/</span>
                                    <span className="font-semibold text-sm">{player.assists}</span>
                                </div>
                                <div>
                                    <span className="text-sm align-text-top text-white font-bold">{((player.kills + player.assists)/player.assists).toFixed(2)}</span>
                                    <span className="text-sm align-text-top "> KDA</span>
                                </div>
                            </div>
                            <div className="w-1/12 text-center">
                                <p className="text-white font-semibold">{player.damageDealt}</p>
                            </div>
                            <div className="w-1/12 text-center">
                                <p>{player.gold}</p>
                            </div>
                            <div className="w-1/12 text-center">
                                <p>{player.creepScore}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default ExtraMatchDataRow;
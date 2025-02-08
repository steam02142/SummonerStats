import Summoners from "./Summoners";

const LeftSection = ({primaryPlayer, matchStats}) => {
    return ( 
        <div className="pr-0">
            <span className="text-lg font-bold">{primaryPlayer.championName} - </span>
            <span className="text-lg">{primaryPlayer.won? 'Victory':'Defeat'}</span>
            <div className="flex pt-2">
                 <div>
                    <img
                        className="outline outline-2 rounded-full size-16"
                        src={primaryPlayer.champion_icon} />
                </div>
                <div className="pt-2 pl-2">
                    <Summoners primaryPlayer={primaryPlayer}></Summoners>
                </div>
            </div>
            <h3 className="text-md font-semibold pt-4">{matchStats.gameMode}</h3>
            
        </div>
    );
}
 
export default LeftSection;
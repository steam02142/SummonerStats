import Items from "./Items";

const MiddleSection = ({primaryPlayer}) => {
    return ( 
        <div className="flex pr-8">
            <div className="text-center content-center pr-3">
                <span className="font-bold text-2xl">{primaryPlayer.kills}</span>
                <span className="font-semibold text-2xl text-gray-400">/</span>
                <span className="font-bold text-2xl">{primaryPlayer.deaths}</span>
                <span className="font-semibold text-2xl text-gray-400">/</span>
                <span className="font-bold text-2xl">{primaryPlayer.assists}</span>
                <div className="font-bold text-xs">{((primaryPlayer.kills + primaryPlayer.assists)/primaryPlayer.assists).toFixed(2)} KDA</div>
            </div>
            <div className="content-center pr-3">
                <Items primaryPlayer={primaryPlayer}></Items>
            </div>
            <div className="content-center">
                <div className="flex content-center">
                    <img src="/gold.svg" alt="" className="size-[18px] mt-[2px]"/>
                    <p className="text-center text-sm text-[#F3A059] font-bold">{primaryPlayer.gold}</p>
                </div>
                <div className="flex content-center">
                    <img src="/creep-score.svg" alt="" srcset="" className="size-[18px] mt-[2px]"/>
                    <p className="text-center text-sm text-[#82E5D9] font-bold mr-1">{primaryPlayer.creepScore} CS</p>
                </div>
                <div className="flex content-center">
                    <img src="/damage.svg" alt="" srcset="" className="size-[18px] mt-[2px]"/>
                    <p className="text-center text-sm text-[#E25656] font-bold">{primaryPlayer.damageDealt}</p>
                </div>
                <div className="flex content-center">
                    <img src="/kill-participation.svg" alt="" srcset="" className="size-[18px] mt-[2px]"/>
                    <p className="text-center text-sm text-[#B78787] font-bold">{primaryPlayer.killParticipation}%</p>
                </div>
                
                
                                
            </div>
        </div>
    );
}
 
export default MiddleSection;
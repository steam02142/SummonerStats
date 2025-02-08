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
            <div className="content-center">
                <Items primaryPlayer={primaryPlayer}></Items>
            </div>
        </div>
    );
}
 
export default MiddleSection;
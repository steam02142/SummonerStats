const GraphSelector = ({chartType, setChartType}) => {
    return (  
        <div className="flex justify-between px-24 bg-[#2a3551]">
            <button 
                className={`grow my-1 mx-10 border-blue-500 ${chartType == "totalGold"? "border-b-2": ""}`}  
                onClick={() => setChartType("totalGold")}>
            Gold
            </button>

            <button 
                className={`grow my-1 mx-10 border-blue-500 ${chartType == "damageToChamps"? "border-b-2": ""}`} 
                onClick={() => setChartType("damageToChamps")}>
            Damage
            </button>
           
            <button 
                className={`grow my-1 mx-10 border-blue-500 ${chartType == "minionsKilled"? "border-b-2": ""}`} 
                onClick={() => setChartType("minionsKilled")}>
            CS
            </button>
        </div>
    );
}
 
export default GraphSelector;
const InformationSelector = ({selected, setSelected}) => {

    return (  
        <div className="flex justify-around bg-[#252f48]">
            <button className={`grow py-1 ${selected == "Scoreboard"? "bg-slate-400/30": ""}`}  onClick={() => setSelected("Scoreboard")}>Scoreboard</button>
            <div className="border-l border-white/70"></div>
            <button className={`grow py-1 ${selected == "Graphs"? "bg-slate-400/30": ""}`} onClick={() => setSelected("Graphs")}>Graphs</button>
        </div>

    );
}
 
export default InformationSelector;
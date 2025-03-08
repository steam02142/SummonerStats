const Summoners = ({primaryPlayer, size}) => {
    return ( 
        <div className="grid gap-1">
            {primaryPlayer.summoners.map((summoner, index) => (
                <div key={index} className="flex items-center">
                    {/* Title adds the tooltip */}
                    <img 
                        className={`${size} rounded-md`}
                        src={summoner.icon}  
                        loading="lazy"
                        title={summoner.name}
                    />
                    <span className="pl-1">{summoner.name}</span>
                </div>
            ))}
        </div>
     );
}
 
export default Summoners;
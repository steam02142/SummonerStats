const Summoners = ({primaryPlayer, size, showName}) => {
    return ( 
        <div className="grid gap-1">
            {primaryPlayer.summoners.map((summoner, index) => (
                <div key={index} className="flex items-center pr-1">
                    {/* Title adds the tooltip */}
                    <img 
                        className={`${size} rounded-md`}
                        src={summoner.icon}  
                        loading="lazy"
                        title={summoner.name}
                    />

                    {
                        showName && <span>{summoner.name}</span>
                    }
                </div>
            ))}
        </div>
     );
}
 
export default Summoners;
const Items = ({primaryPlayer}) => {
    return (  
        <div className="grid grid-cols-3 gap-1 items-center">
            {primaryPlayer.items.map((item, index) => {
                if(item != null) {
                return (
                <div key={index} className="size-9">
                    {/* Title adds the tooltip */}
                    <img 
                        className="rounded-md"
                        src={item.icon}  
                        loading="lazy"
                        title={item.name}
                    />
                </div>
                )
                } else {
                    return (
                        <div className="size-9 bg-gray-900/70 rounded-md"></div>
                    )
                }
            })}
        </div>
    );
}
 
export default Items;
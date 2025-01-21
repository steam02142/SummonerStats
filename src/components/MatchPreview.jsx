const MatchPreviewCard = () => {
    return ( 
        <div className="flex justify-between outline outline-1 p-3">
            <div>
                <img 
                    className="outline outline-2 rounded-sm"
                    src="test.svg" />
            </div>

            <div className="grid">
                <div>
                    <span>Won? - </span>
                    <span>Game Mode - </span>
                    <span>Time Played</span>
                </div>

                <div className="flex justify-between">
                    <div>
                        K/D/A
                    </div>

                    <div>
                        Summoners
                    </div>

                    <div>
                        Items
                    </div>
                </div>
            </div>

            <div className="flex gap-2 text-sm">
                <div>
                    <p>team a</p>
                    <div className="flex">
                        <img src="test.svg"/>
                        <p>name</p>
                    </div>
                    {/* loop this */}

                </div>
                <div>
                    <p>team b</p>
                    <div className="flex">
                        <img src="test.svg"/>
                        <p>name</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default MatchPreviewCard;
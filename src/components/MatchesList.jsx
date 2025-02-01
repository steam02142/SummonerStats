import MatchPreviewCard from "./MatchPreview";

const MatchesList = (props) => {
    if(props.matchData == null || props.region == null) {
        return ( <div>Loading...</div> )
    } 
    
    return ( 
        <div>   
            {props.matchData.map((matchData, index)=> {
                return (<MatchPreviewCard key = {index} matchData={matchData} region={props.region}  />)
            })}
        
        </div>
     
     );
}
 
export default MatchesList;
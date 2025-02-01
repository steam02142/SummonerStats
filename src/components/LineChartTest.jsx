import { useState, useEffect } from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend} from "recharts";

const GoldChart = ({matchid, region, primaryPlayer}) => {
  const [matchData, setMatchData] = useState(null)
  const [activeChamps, setActiveChamps] = useState([primaryPlayer])
  const colours = ["#FF5733", "#33B5FF", "#8E44AD", "#FFC300", "#2ECC71", "#FF6347", "#F39C12", "#1F77B4", "#9B59B6", "#3498DB"];

  // Retrieve chart data
  useEffect(() => {
    const getMatchData = async () => {
      let response = await fetch(`http://127.0.0.1:8000/timeline?matchid=${matchid}&region=${region}`);
      let data = await response.json();
      // setMatchData(matchData["puuid"]);
      setMatchData(data)
    };
    getMatchData();
  }, [matchid, region]); 

  const handleClick = (dataKey) => {
    let championIndex = activeChamps.indexOf(dataKey)
    console.log("index: " + championIndex)
    // champion not currently selected, add them
    if(championIndex == -1){
      console.log("Added champion: " + dataKey)
      setActiveChamps(prev => [...prev, dataKey])
    } else{
      console.log("Removed champion: " + dataKey)
      setActiveChamps(activeChamps.filter((_, index) => index != championIndex))
    }
  }

  if(!matchData){
      return <p>Loading Chart...</p>
    }

  let allChampions = Object.keys(matchData[0])
  allChampions = allChampions.filter((element)=> {return element != "minute"})

  

  return ( 
    <LineChart
      width={730}
      height={250}
      data={matchData}
      margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="minute" />
      <YAxis />
      <Tooltip />
      <Legend height={36} iconType="circle" onClick={props => handleClick(props.dataKey)} />
      {/* <Line hide={!activeChamps.includes("Garen")} type="monotone" dataKey="Garen" stroke="#8884d8" /> */}
      {/* <Line type="monotone" dataKey="Senna" stroke="#4084d8" /> */}

      {
        allChampions.map((champ, index)=>{
          return (<Line hide={!activeChamps.includes(champ)} type="monotone" dataKey={champ} stroke={colours[index]} dot={false} />)
        })
      }

    </LineChart>
  );
}
 
export default GoldChart;
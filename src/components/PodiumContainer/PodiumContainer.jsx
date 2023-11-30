import { useEffect, useState } from "react";
import { getAllPodiums } from "../../services/podium.service";
import { CardPodiums } from "../CardPodiums/CardPodiums";

  export const PodiumContainer = () => {

    const [podiumLoading, setPodiumLoading] = useState(false);
    const [allPodiums, setAllPodiums] = useState([]);
    
    const getPodiums = async () => {
        const podiumData = await getAllPodiums();
        setAllPodiums(podiumData); 
    }

    useEffect(() => {
        getPodiums();
      }, []);
    
      useEffect(() => {
        console.log(allPodiums);
      }, [allPodiums]);

    return (
      <div>
        {allPodiums && allPodiums?.data?.map((item) => {
            return (<div className="podiumCard" key={item._id}>{item?.name} <div className="podiumFirsPlace"><h1>{item?.firstPlace?.name}</h1><img src={item?.firstPlace?.image}/></div>
            <div className="podiumSecondPlace"><h1>{item?.secondPlace?.name}</h1><img src={item?.secondPlace?.image}/></div>
            <div className="podiumThirdPlace"><h1>{item?.thirdPlace?.name}</h1><img src={item?.thirdPlace?.image}/></div>
            </div>)
        })}
      </div>
    )
  }
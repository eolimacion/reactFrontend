import { useEffect, useState } from "react";
import { getAllPodiums } from "../../services/podium.service";
import { CardPodiums } from "../CardPodiums/CardPodiums";
import { CardInTheGallery } from "../CardInTheGallery/CardInTheGallery";

  export const PodiumContainer = () => {

    const [podiumLoading, setPodiumLoading] = useState(false);
    const [allPodiums, setAllPodiums] = useState([]);
    const [buttonComment, setButtonComment] = useState(false);

    const handleComment = (id) => {
        setButtonComment(id)
    }
    
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
        <div className="podiumAbel">
        {allPodiums &&
          allPodiums?.data?.map((item) => (
            <div className="podiumCardContainer" key={item._id}>
              <div className="podiumCard">{item?.name}</div>
              <CardPodiums name={item?.firstPlace?.name} image={item?.firstPlace?.image} />
              <CardPodiums name={item?.secondPlace?.name} image={item?.secondPlace?.image} />
              <CardPodiums name={item?.thirdPlace?.name} image={item?.thirdPlace?.image} />
              {/* <button onClick={handleComment(item._id)}>comment here</button> */}
            </div>
          ))}
      </div>
    )
  }


//   <div className="podiumAbel">
//         {allPodiums && allPodiums?.data?.map((item) => {
//             return (<div className="podiumCard" key={item._id}>{item?.name} 
//             <CardPodiums name={item?.firstPlace?.name} image={item?.firstPlace?.image}/>
//             <CardPodiums name={item?.secondPlace?.name} image={item?.secondPlace?.image}/>
//             <CardPodiums name={item?.thirdPlace?.name} image={item?.thirdPlace?.image}/>
//             {/* <button onClick={handleComment(item._id)}>comment here</button> */}
//             </div>)
//         })}
//       </div>
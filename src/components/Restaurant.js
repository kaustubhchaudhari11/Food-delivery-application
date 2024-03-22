import CDN from "../utils.js/config";
import { useContext } from "react";
import UserContext from "../utils.js/UserContext";

export const RestrauntCard = (props) => {
    // Destructure resData and provide a default object to avoid destructuring undefined
    const { resData = {} } = props;
    const url = CDN;
    const { loggedInUser } = useContext(UserContext);

    const test = resData;
    const cuisines = resData.info?.cuisines ? resData.info.cuisines.join(', ') : "No cuisines available";
    const price = resData.info?.costForTwo;
    const cloudinaryImageId = resData.info?.cloudinaryImageId || "defaultImageId";

    const imageUrl = `${CDN}${cloudinaryImageId}`;


    return (
      <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300'>
        <img
          className="rounded-lg"
          alt="res-logo"
          src={imageUrl}>
        </img>
        <h3 className="font bold py-4">{resData.info?.name}</h3>
        <h3>{cuisines}</h3>
        <h3> {price}</h3>
        <h4>
          {resData?.info?.avgRating + " Stars"}
        </h4>
        <h4> {resData?.info?.totalRatingString}</h4>
        <h4>User : {loggedInUser} </h4>

      </div>
    );
  }


  //Higher order component for promoted label

export  const withPromotedLabel = (RestrauntCard) =>{
    return (props)=>{
      return (
         <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestrauntCard {... props}/>
         </div>
      )
    }
  }

export default RestrauntCard;

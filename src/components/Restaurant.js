import CDN from "../utils.js/config";

export const RestrauntCard = (props) => {
    // Destructure resData and provide a default object to avoid destructuring undefined
    const { resData = {} } = props;
    const url = CDN;

    const test = resData;
    const cuisines = resData.info?.cuisines ? resData.info.cuisines.join(', ') : "No cuisines available";
    const price = resData.info?.costForTwo;
    const cloudinaryImageId = resData.info?.cloudinaryImageId || "defaultImageId";

    const imageUrl = `${CDN}${cloudinaryImageId}`;


    return (
      <div className='res-cards' style={{
        background:"#f0f0f0"
      }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={imageUrl}>
        </img>
        <h3>{resData.info?.name}</h3>
        <h3>{cuisines}</h3>
        <h3> {price}</h3>
        <h4>
          {resData?.info?.avgRating + " Stars"}
        </h4>
        <h4> {resData?.info?.totalRatingString}</h4>
        {/* <h4> {resData}</h4> */}
      </div>
    );
  }

export default RestrauntCard;
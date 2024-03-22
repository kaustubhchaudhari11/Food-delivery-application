import {RestrauntCard, withPromotedLabel}  from "./Restaurant";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "./useOnlineStatus";
import { fetch_Res_Url } from "../utils.js/config";

const Body =() =>{
    // State to manage the filter status (true for filtered, false for unfiltered
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  //Search text will take string input:
  const [searchText, setSearchText] = useState("")
  const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);

  console.log("Body Rendered");

    useEffect (() =>{
      fetchData();
    },[]);

    const fetchData = async () =>{
      try {
      const data = await fetch(fetch_Res_Url);
      const response = await data.json();
      const filter_data = response.data.cards[1].card.card.gridElements;
      const { infoWithStyle: { restaurants } } = filter_data;
      const all_data = restaurants;
      console.log("This data you want to set",all_data);
      setAllRestaurants(restaurants); // Update allRestaurants with fetched data
      setRestaurants(all_data);
      }
      catch(error){
        console.log("Error Fetching Data",error);
      }
    };

    const Handlefilter = ()=>{
        const filteredList = restaurants.filter((x) => x?.info?.avgRating > 4.3);
        setRestaurants(filteredList);
      }

    const HandleFilterSearch = () =>{
        console.log(restaurants)
        setRestaurants(restaurants);
        const filteredRestaurant = allRestaurants.filter((res) =>{
          return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
        // Update the state to only include filtered restaurants.
        setRestaurants(filteredRestaurant);
      }
    const onlineStatus = useOnlineStatus();
    console.log("This is online Status",onlineStatus);

      if(onlineStatus === false){
          return (
            <h1>
            Looks Like you are Offline
            </h1>
          )
      }

    return restaurants.length ===0 ? <Shimmer/> :
    (
      <div className="body">
        <div className= "filter flex">
        <div className="search m-4 p-4">
          <input 
          type ="text"
          className="border border-solid"
          onChange={(e)=>{
            setSearchText(e.target.value);
          }} 
          />
          <button 
          className="px-4 py-2-rounded bg-green-100 m-4 rounded-lg"
            onClick={HandleFilterSearch}>
            Search
          </button>
        </div>
        <div>
          
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button 
          className="px-4 py-2 bg-gray-100 rounded rounded-lg"
            onClick={Handlefilter}
            >
            Top rated restaurant
            </button>
        </div>
        </div>
          <div className="flex flex-wrap justify-center mx-auto">
          {restaurants.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestrauntCard key={restaurant?.info?.id} resData={ restaurant} />
            )}
          </Link>
        ))}
          </div>
      </div>
      
    ) 
  }


  export default Body;
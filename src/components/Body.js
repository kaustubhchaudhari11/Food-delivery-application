import RestrauntCard from "./Restaurant";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body =() =>{
    // State to manage the filter status (true for filtered, false for unfiltered
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  //Search text will take string input:
  const [searchText, setSearchText] = useState("")


  console.log("Body Rendered");

    useEffect (() =>{
      fetchData();
    },[]);



    const fetchData = async () =>{
      try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4684953&lng=73.82610009999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
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
    

    return restaurants.length ===0 ? <Shimmer/> :
    (
      <div className="body">
        <div className= "filter">
        <div className="search">
          <input 
          type ="text"
          onChange={(e)=>{
            setSearchText(e.target.value);
          }} 
          className="search-box"/>

          <button 
            onClick={HandleFilterSearch}>
            Search
          </button>

        </div>
          <button className="filter-btn"
            onClick={Handlefilter}
            >
            Top rated restaurant
            </button>
        </div>
          <div className="res-container">
          {
            restaurants.map((restraunt) => (
                <Link
                to ={"/restaurants/"+restraunt?.info?.id}
                >
                <RestrauntCard key={restraunt?.info?.id} resData ={restraunt}/>
                </Link>
            ))
          }
          </div>
      </div>
    ) 
  }


  export default Body;
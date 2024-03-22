import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer'; // Ensure this path is correct
import { MENU_API } from '../utils.js/config'; // Ensure this path is correct
import { useRestrauntMenu } from './useRestrauntMenu';
import RestaurantCategory from './RestaurantCategory';


const RestrauntMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();

    const dummy = "Dummy Data";

    const [showIndex, setShowIndex] = useState(null);

    const {resInfo} = useRestrauntMenu(resid)

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.find(card => card.card?.card.info)?.card.card.info || {};


    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("itemCards",itemCards);


    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

    return (
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl'>
            {name }</h1>
            <p className='font-bold'>{cuisines ? cuisines.join(", ") : 'Cuisine information not available'} - {costForTwoMessage || 'Cost information not available'}</p>
        {/* Categories Accordian */}
                {categories.map((category, index) => (
                // controlled component
                <RestaurantCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}
                />
            ))}
        </div>
    );
};

export default RestrauntMenu;

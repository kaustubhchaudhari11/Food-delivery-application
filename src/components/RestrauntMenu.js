import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer'; // Ensure this path is correct
import { MENU_API } from '../utils.js/config'; // Ensure this path is correct

const RestrauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(`${MENU_API}${resid}`);
            if (!response.ok) throw new Error('Response not OK');
            const json = await response.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    };

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.find(card => card.card?.card.info)?.card.card.info || {};

    // More comprehensive search for itemCards
    let itemCards = [];
    const searchForItemCards = (obj) => {
        if (Array.isArray(obj)) {
            for (const item of obj) {
                searchForItemCards(item);
            }
        } else if (typeof obj === 'object' && obj !== null) {
            if (obj.hasOwnProperty('itemCards')) {
                itemCards = obj.itemCards;
                return;
            }
            for (const key of Object.keys(obj)) {
                searchForItemCards(obj[key]);
            }
        }
    };

    searchForItemCards(resInfo);

    return (
        <div className="menu">
            <h1>{name || 'Restaurant Name Not Available'}</h1>
            <p>{cuisines ? cuisines.join(", ") : 'Cuisine information not available'} - {costForTwoMessage || 'Cost information not available'}</p>
            <h2>Menu</h2>
            {itemCards.length > 0 ? (
                <ul>
                    {itemCards.map((item, index) => (
                        <li key={index}>
                            {item.card.info.name} - Rs. {(item.card.info.price / 100 || item.card.info.defaultPrice / 100).toFixed(2)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Menu details not available for this restaurant.</p>
            )}
        </div>
    );
};

export default RestrauntMenu;

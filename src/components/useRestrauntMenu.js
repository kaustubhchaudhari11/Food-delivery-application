import React from 'react'
import {useState,useEffect} from 'react';
import { MENU_API } from '../utils.js/config';
import { useParams } from 'react-router-dom';



export const useRestrauntMenu = (resId) => {    

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[resId]);
    
    const fetchMenu = async () => {
            const response = await fetch(`${MENU_API}${resId}`);
            if (!response.ok) throw new Error('Response not OK');
            const json = await response.json();
            setResInfo(json.data);
    };

    return { resInfo }; 
}

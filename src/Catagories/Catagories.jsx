import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CategoryFood from '../CategoryFood/CategoryFood';

const Catagories = () => {
    const data=useLoaderData();
    // console.log(data.meals);
    return (
        <div>
            {
                data.meals.map((meal,index) => <CategoryFood key={index} category={meal.strCategory}/>)
            }
            
        </div>
    );
};

export default Catagories;
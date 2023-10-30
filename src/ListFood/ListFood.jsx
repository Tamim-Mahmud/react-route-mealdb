import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowFood from '../Catagories/ShowFood/ShowFood';

const ListFood = () => {
    const data=useLoaderData();
    const { category } = useParams();
    console.log(category);
    
    // useEffect(()=>{
    //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
    //         .then(res =>res.json())
    //         .the(data =>setCategory(data));


    // },[data])
    
    return (
        <div className="grid grid-cols-3 gap-5"> 
            {
                data.meals.map(food => <ShowFood key={food.idMeal} data={food} category={category}/>)
            }
        </div>
    );
};

export default ListFood;
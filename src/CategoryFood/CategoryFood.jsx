import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CategoryFood = ({category}) => {
    // console.log(category)
    return (
        <div>
            {
                <Link to={`/${category}`}> {category}</Link>
                
            }
            <div className="">
                <Outlet/>
            </div>
        </div>
    );
};

export default CategoryFood;
import React from "react";
import { Link } from "react-router-dom";
import FoodDetails from "../../FoodDetails/FoodDetails";

const ShowFood = (props) => {
    console.log(props)
    const data=props.data;
    const category = props.category;
    
  return (
    <div>
      <div className=" ">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={data.strMealThumb}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.strMeal}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <Link to={`/${category}/${data.idMeal}`} className="btn btn-primary">Show Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFood;

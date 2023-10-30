import React, { useLayoutEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FoodDetails = () => {
  let data = useLoaderData();
  console.log(data.meals[0]);
  const params = useParams();
  console.log(params);
  data = data.meals[0];
  const videoId=data.strYoutube.split('=');
  console.log(videoId[1]);

  return (
    <div className="flex gap-10">
      <div class="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={data.strMealThumb} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{data.strMeal}</h2>
          <h2>
            {data.strArea} {data.strCategory}{" "}
          </h2>
          <p>{data.strInstructions}</p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
      <div className="">
      <iframe width="600" height="500" src={`https://www.youtube.com/embed/${videoId[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default FoodDetails;

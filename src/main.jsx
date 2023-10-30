import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Catagories from './Catagories/Catagories.jsx';
import Region from './Region/Region.jsx';

import ListFood from './ListFood/ListFood.jsx';
import FoodDetails from './FoodDetails/FoodDetails.jsx';

const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path:'/categories',
        element: <Catagories/>,
        loader : ()=>fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`),
        children: [
          
        ]
      },
      {
        path: "/region",
        element: <Region/>
      },
      {
        path:"/:category",
        element: <ListFood />,
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
      },
      {
        path :'/:category/:idMeal',
        element: <FoodDetails/>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)

      }
      

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

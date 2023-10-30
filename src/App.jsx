import React from "react";
import Home from "./Home/Home";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex gap-7 mb-10 ">
        <Link to="/home" className="btn">Home</Link>
        <Link to="/categories" className="btn">List by Catagories</Link>
        <Link to="/region" className="btn">List by Region</Link>
        
      </div>
      <Outlet className="max-w-min"/>
    </>
  );
};

export default App;

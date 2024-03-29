import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData,apiUrl} from "./data"
import { toast } from "react-toastify";


const App = () => {

  const [cources, setCources] = useState("");
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res= await fetch(apiUrl);
        
        const output =await res.json();

        setCources(output.data);

      }
      catch(err){
        toast.error("Something went wrong");
      }
    }

    fetchData();

  },[]);

  return (
    <div>

      {/* Navbar */}
      <Navbar/>

      {/* Filter */}
      <Filter filterData={filterData}/>

      {/* caards */}
      <Cards cources={cources}/>


    </div>
  );
};

export default App;

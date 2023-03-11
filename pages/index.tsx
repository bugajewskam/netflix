import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import { getEnvironmentData } from "worker_threads";
import { getData } from "../data";
import styles from "../styles/Home.module.css";
import { Item } from "../interface";
import { ListItem, useScrollTrigger } from "@mui/material";
import Movies from "./components/Movies";
import Filtering from "./components/Filtering";

const Home: NextPage = () => {
  type Category = "Movie" | "TV Series" | "";
  const [data, setData] = useState<Item[] | []>([]);

  const [category, setCategory] = useState<Category>("");
  useEffect(() => {
    getData().then((result) => setData(result));
  }, []);

  const handleMovie = ()=>{
    
    setCategory('Movie')
  }
  const handleSeries = ()=>{
    setCategory('TV Series')
  }
  const handleData = ()=>{
    setCategory('')
  }
  const filterData  = useMemo(() => {
    if (data !== null) {
      if (category === "Movie"){
        return data.filter((item) => item.category === "Movie");
      }
      if (category === 'TV Series'){
        return data.filter((item)=> item.category === "TV Series")
      }
      if(category ===''){
        return data
      }
      return;
    }
  }, [category])
  console.log(filterData)
  console.log(category)
  console.log(data);
  return (
    <>
      <div className="webside">
        <div>
          <Filtering handleMovie={handleMovie} handleSeries={handleSeries} handleData={handleData}/>
        </div>
        <div>
          <Movies moviesOrSeries={filterData} />
        </div>
      </div>
    </>
  );
};

export default Home;

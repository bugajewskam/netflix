import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { getEnvironmentData } from "worker_threads";
import { getData } from "../data";
import styles from "../styles/Home.module.css";
import { Item } from "../interface";
import { ListItem } from "@mui/material";

const Home: NextPage = () => {
  const [data, setData] = useState<Item[]| []>([]);
  useEffect(() => {
    getData().then(result => setData(result));
  }, []);


console.log(data)
  return (
    <div className="container">
{data?.map((move: Item )=> 
    <div className="move" key={move.title}>{move.title}
    <Image src={`/${move.thumbnail.regular.large}`} alt={move.title}
     width="200px"
     height="200px"/>
    </div>
    )
  }
  </div>
  );
};

export default Home;

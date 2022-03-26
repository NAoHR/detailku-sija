import Main from "../containers/Main";
import Loader from "../components/Loader";
import { useState,useEffect } from "react";

export default function Home() {
  const [data,setData] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  },[])
  return (
    <>

      {data !== null && 
        <Main />
      }
      <Loader status={data !== null && true}/>
    </>
  )
}

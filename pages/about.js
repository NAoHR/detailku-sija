import About_Main from "../containers/About";
import Loader from "../components/Loader";
import { useState,useEffect } from "react";

const About = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
      setTimeout(()=>{
        setData(true)
      },1000)
    },[])
    return (
        <>
        {data !== null && 
            <About_Main />
        }
        <Loader status={data !== null && true}/>
        </>
    )
}

export default About;
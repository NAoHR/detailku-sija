import Job from "../containers/Job";
import {useEffect,useState} from "react";
import Loader from "../components/Loader";
import {requestMethod} from "../utils/apiCaller";

export default function Home() {
  const [data,setData] = useState(null);
  useEffect(()=>{
    requestMethod.getAllJob()
    .then((val)=>{
      setData(val.data.data);
    })
    .catch((er)=>{
      setData(false)
    })
 },[])
  return (
    <>
      {data !== null && 
        <Job data={data}/>
      }
      <Loader status={data !== null && true}/>
    </>
  )
}

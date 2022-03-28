import Job from "../containers/Job";
import {useEffect,useState} from "react";
import Loader from "../components/Loader";
import {requestMethod} from "../utils/apiCaller";
import NotFound from "../containers/NotFound";

const DecideToShow = ({data}) => {
  if(data === false){
    return <NotFound message={"Internal Error"} title={501} redirect={"/"}/>
  }
  return <Job data={data}/>
}

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
        <DecideToShow data={data}/>
      }
      <Loader status={data !== null && true}/>
    </>
  )
}

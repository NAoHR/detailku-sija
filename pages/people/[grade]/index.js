import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Grade_Main from "../../../containers/Grade";
import {requestMethod} from "../../../utils/apiCaller";
import Loader from "../../../components/Loader";
import NotFound from "../../../containers/NotFound";

const DecideToShow = ({data}) => {
  if(data === false){
    return <NotFound message={"Internal Error"} title={500} redirect={"/people"}/>
  }else if(data.length == 0){
    return <NotFound message={"Data Not Found"} title={404} redirect={"/people"}/>
  }
  return <Grade_Main eachdata={data} />
}

const Grade = () => {
    const [data,setData] = useState(null);
    const router = useRouter();
    const {grade} = router.query;

    useEffect(()=> {
      if(router.isReady){
        console.log(router.query)
        requestMethod.getGradeBased(grade)
          .then((val)=>{
            setData(val.data.data);
          })
          .catch((er)=>{
            setData(false)
          }) 
      }
    },[router.isReady])

    return (
      <>
        {data !== null && <DecideToShow data={data} />
      }

        <Loader status={data !== null && true}/>
      </>
    )
}

export default Grade;
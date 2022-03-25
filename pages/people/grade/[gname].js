import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Grade_Main from "../../../containers/Grade";
import {requestMethod} from "../../../utils/apiCaller";
import Loader from "../../../components/Loader";

const Grade = () => {
    const [data,setData] = useState(null);
    const router = useRouter();
    const {gname} = router.query;

    useEffect(()=> {
      if(router.isReady){
        requestMethod.getGradeBased(gname)
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
        {data !== null && <Grade_Main eachdata={data} />}

        <Loader status={data !== null && true}/>
      </>
    )
}

export default Grade;
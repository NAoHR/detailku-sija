import PublicMessage from "../containers/PublicMessage";
import Loader from "../components/Usable/Loader";
import { requestMethod } from "../utils/apiCaller";
import NotFound from "../containers/NotFound";
import { useEffect, useState } from "react";


const DecideToShow = ({data}) => {
    if(data === false){
      return <NotFound message={"Terjadi Error"} title={501} redirect={"/"}/>
    }
    return <PublicMessage data={data}/>
  }

export default function Publicmsg() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        requestMethod.getPublicMessage()
            .then((v) => {
                setData(v.data.data);
            })
            .catch((e) => {
                setData(false);
            })
    }, [])
    return (
        <>
        {/* <PublicMessage /> */}
        {
            data !== null && <DecideToShow data={data}/>
        }
        <Loader status={data !== null && true}/>
        </>
    )
}

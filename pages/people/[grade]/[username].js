import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import NotFound from "../../../containers/NotFound";
import User_Main from "../../../containers/User_Main";
import {requestMethod} from "../../../utils/apiCaller";

const DecideToShow = ({data,route}) =>{
    if(data === 0){
        return <NotFound message={"User Tidak Ditemukan"} title={"404"} redirect={`/people/${route}`} />
    }else if (data === false){
        return <NotFound message={"Server Error"} title={"501"} redirect={"/"} />
    }else if (data === 1){
        return <NotFound message={`User tidak ada di ${route.split("_").join(" ")}`} title={"404"} redirect={"/people"} />
    }
    return <User_Main data={data}/>
}

const User = () => {
    const [data,setData] = useState(null);
    const router = useRouter()
    const {grade,username} = router.query;
    useEffect(()=>{
        if(router.isReady){
            requestMethod.getUsernameBased(username)
            .then((val)=>{

                let valdata = val.data.data
                if(valdata.length === 0){
                    setData(0);
                }else{
                    if(valdata[0].grade !== grade){
                        setData(1);
                    }else{
                        setData(valdata[0])
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
                setData(false)
            })
        }
    },[router.isReady])

    return ( 
        <>
            {data !== null && <DecideToShow data={data} route={grade}/>}
            {/* <User_Main /> */}
            <Loader status={data !== null && true}/>
        </>
    )
}

export default User;
import People from "../../containers/People.jsx";
import {requestMethod} from "../../utils/apiCaller";
import Loader from "../../components/Loader";
import { useEffect,useState } from "react";

const PeopleMain = () => {
    const [data,setData] = useState(null)
    useEffect(()=>{
        requestMethod.getPeople()
            .then((val)=>{
                setData(val.data.data);
            })
            .catch((err)=>{
                setData(false)
            })
    },[])
    return (
        <>
            {data !== null && 
                <People data={data}/>
            }
            <Loader status={data !== null && true}/>
        </>
    )
}

export default PeopleMain;
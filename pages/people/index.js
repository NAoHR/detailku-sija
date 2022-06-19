import People from "../../containers/People.jsx";
import {requestMethod} from "../../utils/apiCaller";
import Loader from "../../components/Usable/Loader";
import { useEffect,useState } from "react";
import NotFound from "../../containers/NotFound"

const DecideToShow = ({data}) => {
    if(data === false){
        return <NotFound message={"Terjadi Error"} title={501} redirect={"/"}/>
    }
    return <People data={data}/>
}


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
                <DecideToShow data={data}/>
            }
            <Loader status={data !== null && true}/>
        </>
    )
}

export default PeopleMain;
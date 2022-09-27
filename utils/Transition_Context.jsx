import {useContext,useState,useEffect, createContext} from "react";
import { useRouter } from "next/router";


export const TransitContext = createContext();

const TransitionContext = (props) => {
    const [pageToGo, setPTG] = useState(null);
    const [isReady,setIsReady] = useState(false);
    const router = useRouter();
    
    function pageTransitHandler(togo){
        if(pageToGo === null){
            if(togo !== router.pathname){
                setPTG(togo);
            }
        }
    }

    useEffect(()=>{
        if(pageToGo !== null){
            setTimeout(async ()=>{
                await router.push(pageToGo);
                setPTG(null);
            },1200)
        }
    },[pageToGo])

    useEffect(()=>{
        setIsReady(router.isReady)
    },[isReady])
    
    return (
    <>
        <TransitContext.Provider value={pageTransitHandler} >
        {props.children}
        <div className="lovely_transit_page" style={{
            height : pageToGo !== null && "100%",
            transition : "1s"
        }}>
        </div>
        </TransitContext.Provider>
    </>)
}

export default TransitionContext;

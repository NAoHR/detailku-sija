import { useContext, useEffect } from "react"
import { AuthContext } from "../../utils/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Dashboard from "../../containers/Dashboard";
import Loader from "../../components/Usable/Loader";

const Login = () => {
    const {dispatch, isLoggedIn, state} =  useContext(AuthContext);
    const router = useRouter();
    
    useEffect(async ()=>{
        if(router.isReady){
            isLoggedIn()
            .then((v) => {
                dispatch({type: "isLoggedIn", payload : v});
            })
            .catch((e)=>{
                window.localStorage.clear();
                router.push("/login");
                toast.error(e.response.data.message);
            });
        }
    }, [router.isReady])

    return (
        <>
        {
            state?.loginRelated?.isLoggedIn ? <Dashboard /> : <Loader />
        }
        </>
    )
}

export default Login;
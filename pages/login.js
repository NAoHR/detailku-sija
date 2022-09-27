import { useContext, useEffect } from "react"
import { AuthContext } from "../utils/AuthContext";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import LoginContainer from "../containers/Login";

const Login = () => {
    const {dispatch, isLoggedIn} =  useContext(AuthContext);
    const router = useRouter();
    useEffect(async ()=>{
        if(router.isReady){
            isLoggedIn()
            .then((v) => {
                router.push("/me");
            })
            .catch((e) => {
                window.localStorage.clear();
            })
        }
    }, [router.isReady])

    return (
        <>
         <LoginContainer />
        </>
    )
}

export default Login;
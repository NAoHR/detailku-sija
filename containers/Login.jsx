import style from "../styles/containers-css/Login.module.css";
import {AiFillLock} from "react-icons/ai"
import CustomLink from "../utils/Custom_link";
import { requestMethod } from "../utils/apiCaller";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

const LoginContainer = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    function submitHadle(e){
        const loadToast = toast.loading("please wait");
        const submitButton = document.getElementsByClassName(style.inputSubmit)[0];
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.innerText = "redirecting"
        requestMethod.loginUser({
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })
            .then((v) => {
                toast.update(loadToast, {render : `Welcome ${usernameRef.current.value}`, type: "success", isLoading : false, autoClose : true })

                window.localStorage.setItem("dttoken", `Bearer ${v.data.detailkutoken}`);
                router.push("/me");
            })
            .catch((e) => {
                toast.update(loadToast, {render : e.response.data?.message || "something went wrong", type: "error", isLoading : false, autoClose : true})
            })
            .finally(()=>{
                submitButton.disabled = false;
                submitButton.innerText = "Submit";
            })
    }

    return (
        <>
        <section className={`${style.loginSection} b-light flex`}>
            <div className={`${style.decorationSide} b-light-orange`}>
                <img src="/login.svg" alt="" />
            </div>
            <div className={`${style.loginSide} flex centerAll`}>
                <div className={`${style.loginDecor} b-orange`} style={{
                    top : "10px",
                    right : "10px",
                    borderRadius: "50%"
                }}>
                </div>
                <div className={`${style.loginDecor} b-orange`} style={{
                    bottom : "10px",
                    left : "10px",
                    borderRadius: "50%"
                }}>
                </div>
                <div className={`${style.inputBox} flex`}>
                    <h5 className={`${style.loginText} poppins c-black`}>
                        <span style={{
                            fontSize : "2.5em",
                        }}>
                            <AiFillLock /> <br />
                        </span>
                        Login | Masuk
                    </h5>

                    <form action="post" onSubmit={submitHadle}>
                        <input 
                        type="text" 
                        className={style.inputBasic} 
                        placeholder="username" 
                        required={true}
                        ref={usernameRef}
                        spellCheck={false}
                        autoComplete={"off"}
                        />

                        <input 
                        type="password" 
                        className={style.inputBasic} 
                        placeholder="password" 
                        required={true}
                        ref={passwordRef}
                        spellCheck={false}
                        autoComplete={"off"}
                        />

                        <button 
                        type="submit" 
                        className={`${style.inputSubmit} ${style.inputBasic} b-orange poppins c-black` } 
                        style={{border : "none"}}> Submit</button>
                    </form>

                    <CustomLink path="/">
                        <p className="poppins c-black" style={{
                            textAlign : "center",
                            fontWeight : "500",
                            fontSize: "0.8em",
                            textDecoration: "underline var(--orange)"
                        }}>
                            home | back to feed
                        </p>
                    </CustomLink>
                </div>
            </div>
        </section>
        </>
    )
}

export default LoginContainer;


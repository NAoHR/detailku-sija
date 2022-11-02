import styleModal from "../../styles/components-css/usable/Modal.module.css";
import {AiFillWarning, AiFillHome} from "react-icons/ai";
import CustomLink from "../../utils/Custom_link";

const ModalMessage = ({title ,message}) => {
    function allowContent(){
        const ms = document.getElementById("modalMessage");
        ms.style.display = "none"
    }

    return (
        <>
            <div className={`${styleModal.black_screen} flex centerAll`} id="modalMessage">

                <div className={`b-red poppins flex centerAll ${styleModal.modal_form} c-white`}
                style={{
                    maxWidth : "900px",
                    width : "90%",
                    height: "80%",
                    maxHeight : "500px",
                    border : "5px solid var(--white)",
                    borderRadius: "3px",
                    position: "relative",
                    flexDirection: "column",
                    gap: "10px",
                    textAlign: "center",
                    padding: "8px"
                }}
                >
                    <CustomLink path="/">
                        <div
                        className="c-red hover flex centerAll b-bold-white shadow"
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "56px",
                            fontSize: "1.4em",
                            width: "36px",
                            height: "36px",
                            fontWeight : "bold",
                            borderRadius: "38px"
                        }} 
                        >
                            <AiFillHome />
                        </div>
                    </CustomLink>

                    <div
                    className="c-red hover flex centerAll b-bold-white shadow"
                    onClick={allowContent}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        fontSize: "1.4em",
                        width: "36px",
                        height: "36px",
                        fontWeight : "bold",
                        borderRadius: "38px"
                    }} 
                    >
                        x
                    </div>

                    <h1
                    style={{
                        fontSize : "8em",
                        marginBottom: "-40px"
                    }}
                    >
                        <AiFillWarning />
                    </h1>
                    <h1>
                        {title}
                    </h1>
                    {message.map((v, index) => {
                        return <h3 key={index} style={{
                            fontWeight: "500",
                            fontSize: "1.3em"
                        }}>
                            {v}
                        </h3>
                    })}
                </div>
            </div>
        </>
    )
}

export default ModalMessage
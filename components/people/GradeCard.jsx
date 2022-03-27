import style from "../../styles/components-css/people/Grade_card.module.css";

const GradeCard = ({creds}) => {

    const name = creds.name.split(" ")
    return (
        <div className={style.lovely_grade_card}>
            <div className={style.lovely_card_top}>
                <div className={style.lovely_top_bar}>

                </div>
                <div className={style.lovely_image_side}>
                    {creds.detail.picture === undefined ? 
                    <h2 className={`${style.lovely_ifundefined} ${style.pm_remover}`}>
                        {name.length == 1 ? name[0].slice(0,1).toUpperCase() : `${name[0].slice(0,1).toUpperCase()}${name[name.length-1].slice(0,1).toUpperCase()}`}
                    </h2>  : 
                    <img src={creds.detail.picture} alt="profile.jpg" className={style.user_image}/>
                    }
                </div>
            </div>
            <div className={style.lovely_card_bottom}>
                <div className={style.lovely_username_side}>
                    <h1 className={`${style.lovely_user_name} ${style.pm_remover}`}>
                        {name.length >= 2 ? `${name[0]} ${name[name.length -1]}` : name[0]}
                    </h1>
                </div>
                <h2 className={`${style.lovely_user_username} ${style.pm_remover}`}>
                    @{creds.username}
                </h2>
                <div className={style.lovely_description}>
                    <h3 className={`${style.lovely_user_desc} ${style.pm_remover}`}>
                        {creds.detail.description.length > 120 ? `${creds.detail.description.slice(0,116)}...` : creds.detail.description}
                    </h3>
                </div>
                <div className={style.lovely_pcs_side}>
                    <h4 className={`${style.lovely_pcs_perks} ${style.pm_remover}`}>
                        <span className={style.lovely_perks_num}>
                            {creds.project.length}
                        </span>
                        Project
                    </h4>
                    <h4 className={`${style.lovely_pcs_perks} ${style.pm_remover}`}>
                        <span className={style.lovely_perks_num}>
                            {creds.certificate.length}
                        </span>
                        Cert
                    </h4>
                    <h4 className={`${style.lovely_pcs_perks} ${style.pm_remover}`}>
                        <span className={style.lovely_perks_num}>
                            {creds.skill.length}
                        </span>
                        Skill
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default GradeCard;
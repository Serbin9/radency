import React from "react";
import BaseForm from "../baseForm/BaseForm";
import style from "./MainPage.module.css"

const MainPage =({error, users})=>{
    return(
        <div className={style.MainPageConatainer}>
            {error && <div className={style.errorContainer}>{error}</div>}
            {users.length === 0 && !error &&<div className={style.errorText}>None file uploaded</div>}
            {users.length > 0 && !error && <BaseForm users={users}/>}
        </div>
    )
}
export default MainPage;
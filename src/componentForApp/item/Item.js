import React from "react";
import style from "./Item.module.css"




const Item =({element, index})=>{
    console.log("element====>", element);
    console.log("index", index);
    return(
        <div>
            <td>{index+1}</td>
            {element.duplicateLine !=="full name" && <tb>{element["full name"]}</tb>|| <td className={style.errorStyle}>{element["full mname"]}</td>}

        </div>
    )
}
export default Item
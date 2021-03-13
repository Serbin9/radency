import React from "react";
import style from "./BaseForm.module.css"
import Item from "../item/Item"
const BaseForm=({users})=>{
    // console.log("users======>5", users);
    return(
       <table className={style.table}>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>Full Name</th>
                   <th>Phone</th>
                   <th>Email</th>
                   <th>Age</th>
                   <th>Experience</th>
                   <th>Yearly Income</th>
                   <th>Has children</th>
                   <th>License states</th>
                   <th>Expiration date</th>
                   <th>License number</th>
                   <th>Duplicate with</th>
               </tr>
           </thead>
           <tbody>
               {users.map((element, index) => {
                   return(
                    <tr key={index}>
                             <Item element={element} index={index}/>                                                                                                                    
                    </tr>
                   )
               })
               }
           </tbody>
       </table> 
    )
}


export default BaseForm;
import React from "react";
import style from "./Item.module.css"
import {phoneValidations, 
    emailValidations, 
    ageValidations, 
    experienceValidations, 
    yearlyIncomeValidations, 
    childrenValidations,
    licenseStatesValidation, 
    expDayValidations,
    licenseValidations, } from '../lib/fieldValidations';



const Item =({element, index})=>{
    // console.log("element====>", element);
    // console.log("index", index);


    const phone = phoneValidations(element["phone"]);
    const email = emailValidations(element["email"]);
    const age = ageValidations(element["age"]);
    const experience = experienceValidations(element["experience"], element["age"]);
    const license = licenseValidations(element["license number"]);
    const yearlyIncome = yearlyIncomeValidations(element["yearly income"]);
    const children = childrenValidations(element["has children"]);
    const licenseStates = licenseStatesValidation(element["license states"]);
    const expDay = expDayValidations(element["expiration date"]);
    return(
        <>
            <td>{index+1}</td>
            {element.duplicateLine !=="full name" && <td>{element["full name"]}</td>|| <td className={style.errorStyle}>{element["full mname"]}</td>}
            {element.duplicateLine !=="phone" && phone && <td>{element["phone"]}</td>|| <td className={style.errorStyle}>{element["phone"]}</td>}
            {element.duplicateLine !=="email" && email && <td>{element["email"]}</td>|| <td className={style.errorStyle}>{element["email"]}</td>}
            { age && <td>{element["age"]}</td>|| <td className={style.errorStyle}>{element["age"]}</td>}
            { experience && <td>{element["experience"]}</td>|| <td className={style.errorStyle}>{element["experience"]}</td>}
            {yearlyIncome.status && <td>{yearlyIncome.valueYI}</td>|| <td className={style.errorStyle}>{yearlyIncome.valueYI}</td>}
            {children.status && <td>{children.value}</td>|| <td className={style.errorStyle}>{children.value}</td>}
            {licenseStates.status && <td>{licenseStates.value}</td> || <td className={style.errorStyle}>{licenseStates.value}</td>}
            {expDay.status && <td>{expDay.value}</td> || <td className={style.errorStyle}>{expDay.value}</td>}
            {license && <td>{element["license number"]}</td>|| <td className={style.errorStyle}>{element["license number"]}</td>}
            <td>{element["duplicateWith"]}</td>
        </>
    )
}
export default Item
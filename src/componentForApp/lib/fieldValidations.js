import _round from "lodash/round";
import moment from "dayjs"


export const emailValidations =(email)=>{
const correctEmailet = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return correctEmailet.test(String(email).toLowerCase());

}
export const phoneValidations =(phone)=>{
    return phone.length ===12
}

export const ageValidations =(age)=>{
    return Math.trunc(age) && age >=21
}

export const experienceValidations = (expirience, age)=>{
    return Number(expirience) >=0 && Number(expirience) < Number(age)
}
export const licenseValidations = (license)=>{
    const corectLicense = /^[\w\dА-я]+$/;
    return license.length === 6 && corectLicense.test(license);
}

export const  yearlyIncomeValidations = (yearlyIncome)=>{
    // const YIValue = isFinite(yearlyIncome);
    if(isNaN(yearlyIncome)){
        return {status:false , valueYI:"Неверный формат данных"+ " " + yearlyIncome}

    }
    
    const valueYI = (Math.round(yearlyIncome *100)/100).toFixed(2);
    if( yearlyIncome <= 1000000){
        return {status:true , valueYI:valueYI}
    }else{
        return{status:false, valueYI:valueYI}

    }
    
}



export const childrenValidations=(children)=>{
    if(children.toLowerCase()==="true" || children.toLowerCase()=="false"){
        return{status:true, value:children.toUpperCase()}
    }
    if(children===""){
        return{status:false, value:"FALSE"}
    }
    return{status:false, value:children}
}



export const licenseStatesValidation=(licenseStates)=>{
    if(licenseStates.includes(".")||licenseStates.includes(",")||licenseStates.includes(" ")){
        return{status:false, value:licenseStates}
    }

    const multiLicense = licenseStates.split("|")
    for(let i=0; i<multiLicense.length ; i++){
        if(multiLicense[i].length >2){
            multiLicense[i]=multiLicense[i].slice(0, 2).toUpperCase().trim()
        }
    }
    const result = multiLicense.join(", ")
    return{status:true, value:result}


}


export const expDayValidations =(expDay)=>{
    let date = moment(expDay, "YYYY-MM-DD" || "MM/DD/YYYY").isValid();

    let dateFormat = moment(expDay).format("YYYY-MM-DD");
    let dateNowFormat = moment().format("YYYY-MM-DD");
    if(date){
        if(dateFormat > dateNowFormat){
            return{status:true, value:expDay}

        }else{
            return{status:false, value:expDay}
        }
      
    }

}
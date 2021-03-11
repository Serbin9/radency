// import structureObject from "./structureObject"


const createStructure =(data)=>{
    const structure = {};
    for(let i = 0 ; i<data[0].data.length; i++){
        structure[data[0].data[i].trim().toLowerCase()]=""
    }
    return structure;
}

const validationStructure=(formStructure, structureObject)=>{
    console.log("formStructure", formStructure, "structureObject=======>", structureObject);
    for(let key in formStructure){
        if(!Object.keys(structureObject).includes(key)){
            return false;
        }
    }
    return true;
}


const lengthDataValue =(data)=>{
    let size = data.length;
    if(data[data.length-1].data.length ===1){
        size = data.length-1
    }
    return size;
}


const validationFields =(match, obj, arr)=>{
    let counter = 0

    for(let i=0; i<arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            if(obj[arr[i]] !=="" ){
                counter++
            }
        }
    }
    return counter===match;
}

const phoneValidation=(data)=>{
    const newDate =[]
    for(let i=0; i<data.length; i++){
        if(data[i].phone.length <12){
            if(data[i].phone.length ===11 && data[i].phone[0]==="1"){
                data[i].phone = "+"+data[i].phone;
            }
            if(data[i].phone.length ===11 && data[i].phone[0]==="+"){
                data[i].phone="1"+ data[i].phone.slice(1)
            }
            if(data[i].phone.length <=10 && data[i].phone[0]!=="+"){
                data[i].phone = "+1"+data[i].phone
            }
        }
        newDate.push(data[i])
    }
    return newDate;
}

const repeatingSearch =(oldDate)=>{
    const newData = [];
    for(let i = 0; i<oldDate.length; i++){
        for(let k = 0; k<oldDate.length; k++){
            if(i !== k ){
                if(oldDate[i]["full name"].toLowerCase() === oldDate[k]["full name"].toLowerCase()){
                    oldDate[i].duplicateWith = k+1;
                    oldDate[i].duplicateLine = "full name";
                }
                if(oldDate[i]["phone"].toLowerCase() === oldDate[k]["phone"].toLowerCase()){
                    oldDate[i].duplicateWith = k+1;
                    oldDate[i].duplicateLine = "phone";
                }
                if(oldDate[i]["email"].toLowerCase() === oldDate[k]["email"].toLowerCase()){
                    oldDate[i].duplicateWith = k+1;
                    oldDate[i].duplicateLine = "email";
                }
            }
        }
        newData.push(oldDate[i])
    }
    return newData;
}


export {
    createStructure, 
    phoneValidation, 
    // structureObject, 
    validationStructure, 
    lengthDataValue, 
    validationFields,
    repeatingSearch
}
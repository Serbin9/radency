import {createStructure, 
    phoneValidation, 
    // structureObject, 
    validationFields, 
    validationStructure, 
    lengthDataValue,
    repeatingSearch} from './baseFunctionOfChangeStructure';
import structureObject from "../lib/structureObject"

const changeStructure=(data, errorCallback, uploadCallback, ...args)=>{
    const users = [];
    const formStructure = createStructure(data);
    const formatStructure = validationStructure(formStructure, structureObject);
    const lengthValue = lengthDataValue(data);
    // console.log("formStructure", formStructure, "formatStructure", formatStructure, "lengthValue", lengthValue);
    if(!formatStructure){
        errorCallback("File format is not correct");
        // return;
    }else{
        for(let i=1; i < lengthValue; i++){
            const itemForm = Object.assign({}, formStructure);
            let k = 0;
            for(let key in itemForm){
                itemForm[key]= data[i].data[k].trim()
                k++
            }
            const validFields = validationFields(3, itemForm, args)
            if(!validFields){
                errorCallback("File format is not correct");
                break;
            }
            users.push(itemForm);
        }
    }

    // console.log('users====>', users);


    const afterCheckPhoneValidation = phoneValidation(users);
    const afterRepeatingSearch = repeatingSearch(afterCheckPhoneValidation);
    uploadCallback(afterRepeatingSearch);


}

export default changeStructure;
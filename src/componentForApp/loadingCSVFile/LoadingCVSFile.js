import React, {useRef} from "react"
import { CSVReader } from 'react-papaparse';
import changeStructure from "../lib/changeStructure";
import style from "./LoadingCVSFile.module.css"

const LoadingCVSFile = ({setUsers, setError})=>{
    const buttonRef = useRef();

    const handleOpenDialog = (e) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
          buttonRef.current.open(e)
        }
    }
    const handleOnDrop = (data) => {
        console.log('---------------------------')
        console.log("data", data, "setError", setError, "setUsers", setUsers);
        const isRequiredFields = ["full name", "phone", "email"];
        changeStructure(data, setError, setUsers, ...isRequiredFields)
        console.log('---------------------------')
    }
    
    const  handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }
    console.log('------------>92');

    return(
        <CSVReader
        ref={buttonRef}
        onDrop={handleOnDrop}
        onError={handleOnError}
        noDrag

        >
            {()=>(
                <div className={style.buttonContainer}>
                    <button type="button" onClick={handleOpenDialog} 
                    className={style.buttonImport}
                    >
                        Import users
                    </button>
                </div>
            )}
        </CSVReader>
    )
}
export default LoadingCVSFile;
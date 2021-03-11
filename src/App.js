import React, {useState} from "react";
import style from "./app.module.css"
import LoadingCVSFile from "./componentForApp/loadingCSVFile/LoadingCVSFile";
import MainPage from "./componentForApp/mainPage/MainPage";
const  App=()=> {
const[users, setUsers] = useState([]);
const[error, setError] = useState(null)
  return (
    <div className={style.container}>
      <LoadingCVSFile setUsers={setUsers} setError={setError}/>
      <MainPage users = {users} error = {error}/>
    </div>
  );
}

export default App;

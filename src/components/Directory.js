import React, {useState, useEffect} from "react";
import API from "../utils/API";
import UserTable from "./UserTable"

//STORE CONTEXT HERE -->
import DirectoryContext from "../utils/DirectoryContext"



function Directory () {

  const [employees, setEmployeeState]= useState({
    //Start out the employees as an empty array. 
    employees: []
  });

  useEffect(()=>{
    API.getEmployeeList().then(results =>{
      //UPDATE EMPLOYEE STATE
      setEmployeeState({...employees, workers:results.data.results});
      console.log(results.data.results);
    })
  })
    
  
  //RENDER THE RETURN OF THE DATA
  return (
    <DirectoryContext.Provider value={{employees}}>

<p>This is some P from the Directory</p>
<UserTable/>
    </DirectoryContext.Provider>
   
    )
}

export default Directory;

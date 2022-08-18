import React, { useEffect, useState } from 'react'



const UsersCrenditial = () => {
  const [data , setData] = useState([]);
   useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("users")));
    
   } ,[]) 
   console.log("bfbdb=====>" , data);
 
    return(
      
      <div>
        {
           data.map((el)=>{
            return(
            <div>
              <ul>
                <li>First Name : {el.userfname} , Last Name : {el.userlname} , Email Id : {el.mail}</li>
                
                </ul>
              
            </div>
            );
        })
      }     
      </div>
      
    );
  
  
    
 
    

}
export default UsersCrenditial
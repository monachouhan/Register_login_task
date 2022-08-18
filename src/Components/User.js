import React from 'react'
 import { useNavigate } from 'react-router-dom'

const User = () => {
 const navigate1 = useNavigate();
 const navigate2 = useNavigate();

  const handleChange =() =>{
     navigate1("/Register");
  }
  const handleSubmit =() =>{
    navigate2("/SignUp");
 }

  return (
    <div>
        <button onClick={()=>handleChange()}>Register</button><br></br>
        <button onClick={() =>handleSubmit()}>Sign up</button>
     
    </div>
  )
}

export default User
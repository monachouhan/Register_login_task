import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const SignUp = () => {
  const history = useNavigate();
 const navigation = useNavigate();
 const navigation1 = useNavigate();
  const [inputval, setInputval] = useState({
    email: "",
    password: "",
    checked :"admin"
  });
  const [checked, setChecked] = useState(false);
  
  const [data, setData] = useState([]);
  console.log(inputval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInputval(() => {
      return {
        ...inputval,
        [name]: value,
      };
    });
  };
  
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("users");
    console.log(getuserArr);

    const { email, password } = inputval;

    if (!email.includes("@")) {
      alert("plz enter valid email addres", {
        position: "top-center",
      });
    } 
    else if(checked==="admin")
    {
      navigation1("/UsersCrenditial")
    }
    else if (password === "") {
      alert("password field is requred", {
        position: "top-center",
      });
    } 
    
    else if(email==="admin@123" && password==="123456")
    {
         history("/UsersCrenditial")
    }
    else {
       if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.mail === email && el.password === password;
        });
 console.log("value======>" , userlogin);
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          // localStorage.setItem("user_login", JSON.stringify(userlogin));
           alert("Successfully login")
          navigation("/NewUser");
        }
      }
    }
  }
  const handleChange = event => {
    if (event.target.checked) {
       navigation1("/UsersCrenditial")
    } else {
     history("/NewUser")
    }
    setChecked(current => !current);
  };
  
  return (
    <div>
      <h1>Sign In &#9989;</h1>
      <label>Email : </label>
      <input type="email" placeholder="email" name ="email"onChange={getdata}></input><br></br>
      <label>Password : </label>
      <input type="password" placeholder="password"  name ="password" onChange={getdata}></input><br></br>
      <button onClick={addData}>Sign In</button>&nbsp;&nbsp;
      <label htmlFor="checked">Admin</label>
        <input
          type="checkbox"
          value={checked}
          onChange={handleChange}
          id="checked"
          name="checked"
        />  
        
       {/* <button onClick={adminPanel}>Admin</button> */}
    </div>
  );
};

export default SignUp;

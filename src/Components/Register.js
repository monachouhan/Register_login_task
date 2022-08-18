import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import "./user.css";
const Register = () => {
  const navigation = useNavigate();

  const [userfname, setUserfname] = useState("");
  const [userlname, setUserlname] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const [inputval , setInputval] = useState({
  //   userfname: "",
  //   userlname: "",
  //   email: "",
  //   password: ""
  // });

  // const [data,setData] = useState([]);
  //   console.log(inputval);

  // const getdata =(e) =>{

  //   const {value ,name} = e.target;

  //   setInputval(() =>{
  //     return{
  //       ...inputval,[name] : value
  //     }
  //   })

  // }
  const addData = (e) => {
    e.preventDefault();

    const localData = JSON.parse(localStorage.getItem("users") || "[]");

    // const { userfname, userlname,email, password } = inputval;
    if (userfname === "") {
      alert("  first name field is requred!", {
        position: "top-center",
      });
    } else if (userlname === "") {
      alert("user last name  field is requred", {
        position: "top-center",
      });
    } else if (!mail.includes("@")) {
      alert("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password field is requred", {
        position: "top-center",
      });
    }
   
    // console.log("data added succesfully");
    else {
      var newData = {
        userfname: userfname,
        userlname: userlname,
        mail: mail,
        password: password,
      };
      localData.push(newData);
    const store = JSON.parse(localStorage.getItem("youtube"))
     
    localStorage.setItem("youtube" , JSON.stringify(newData));
    console.log("gfjhjdg====>",newData);
      localStorage.setItem("users", JSON.stringify(localData));
      // localStorage.setItem("users",JSON.stringify([...data,inputval]));

      navigation("/SignUp");
    }
  };

  return (
    <div>
      <form>
        <h1> Welcome in Registration Page </h1>
        <label>First Name : </label>
        <input
          type="text"
          placeholder="first Name"
          name="userfname"
          onChange={(e) => setUserfname(e.target.value)}
        ></input>
        <br></br>
        <label>Last Name : </label>
        <input
          type="text"
          placeholder="last Name"
          name="userlname"
          onChange={(e) => setUserlname(e.target.value)}
        ></input>
        <br></br>
        <label>Email : </label>
        <input
          type="email"
          placeholder="email"
          name="mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label>Password : </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button onClick={addData}>Submit</button>
      </form>
    </div>
  );
};
export default Register;

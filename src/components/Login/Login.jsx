import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
   const[un,setUn] =useState('');
   const[pwd,setPwd] =useState('');
   const[error,setError] =useState('false');
   const readusername =(event) =>{
    event.preventDefault();
    console.log(event.target.value);
    setUn(event.target.value);
   }

   const readpassword =(event) =>{
    event.preventDefault();
    console.log(event.target.value);
    setPwd(event.target.value);
   }
   const checkfilldata = (event) =>{
    event.preventDefault();
    if(un.trim()==='' || pwd.trim()==='')
    {
setError(true);
    return;
}

    else{
        setError(false);
    }
}

  return (
    <div>
        <h1 className="fg">SIGN-IN</h1>
        <form>
            username:<input type="text" onChange={readusername}/><br/>
            password:<input type="password" onChange={readpassword}/><br/>
            <button type="submit" onClick={checkfilldata}>LOG IN</button>
            {error && 'Error Occured'}
        </form>
      
    </div>
  )
}

export default Login

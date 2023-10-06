import React from 'react'

const Logindata = (props) => {
  return (
    <div>
      <h1 className='fg'>SIGN-IN</h1>
    <p>
        Username:&nbsp;&nbsp; 
        { props.username }
        <br></br>
        Password:&nbsp;&nbsp;
        {props.password}
        <br></br>
       </p> 
    </div>
  )
}

export default Logindata

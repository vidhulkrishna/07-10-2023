import React from 'react'
import './Transferdata.css'

const Transferdata = (props) => {
  return (
    <div>
    <h1 className='aa'>Welcome</h1>
    <p>
        Username:&nbsp;&nbsp; 
        { props.username }
        <br></br>
        Password:&nbsp;&nbsp;
        {props.password}
        <br></br>
        Usertype:&nbsp;&nbsp;
        {props.usertype}
    </p>
    </div>
  )
}

export default Transferdata

import React from 'react'

const Course = () => {
    const[] =useState('');
    const[] =useState('');





  return (
    <div>
      <h1 className='ab'>Details</h1>
      <form>
        CourseName&nbsp;<input type="text" onChange={readcoursename}/><br/>
        Duration&nbsp;<input type="number" onChange={readduration}/><br/>
        FeeAmount&nbsp;<input type="text" onChange={readfeeamount}/><br/>
        <button type="submit">Save</button>

      </form>
    </div>
  )
}

export default Course

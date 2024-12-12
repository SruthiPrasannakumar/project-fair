import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className=' my-5 d-flex justify-content-center align-items-center flex-column'>
      <h1  style={{fontSize:'80px'}}>404!</h1>
      <img src="https://w7.pngwing.com/pngs/639/917/png-transparent-page-not-found-cartoon-illustration-thumbnail.png" alt="" className="img-fluid" />
      <h1>Look like you r lost</h1>
      <p>The page your looking for is not available!</p>
      <Link to={'/'} className="btn btn-warning">Go to home</Link>

    </div>
  )
}

export default Pnf
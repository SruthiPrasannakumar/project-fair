import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className=' my-5 d-flex justify-content-center align-items-centeer flex-column'>
      <h1  style={{fontSize:'80px'}}>404!</h1>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/027/788/567/small_2x/laptop-problem-woman-404-error-animation-frustrated-technology-fails-error-message-gif-motion-graphic-hispanic-sad-girl-laptop-animated-cartoon-line-character-4k-isolated-on-white-background-video.jpg" alt="" className="img-fluid" />
      <h1>look like you r lost</h1>
      <p>the page your looking for is not available!</p>
      <Link to={'/'} className="btn btn-warning">Go to home</Link>

    </div>
  )
}

export default Pnf
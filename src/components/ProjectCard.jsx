import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
Card

const ProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://projectimg.com/hubfs/IMG%20-%20LOGO-TRANSPARENT-%20black%20font%20-%20Zoom-3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://projectimg.com/hubfs/IMG%20-%20LOGO-TRANSPARENT-%20black%20font%20-%20Zoom-3.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Language used: <span className='text-danger'>language</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quidem natus tenetur quibusdam maiores corrupti sequi. Earum voluptatum quae voluptates sint porro repellendus labore, harum deserunt cupiditate. Beatae, enim dolorum!</p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/SruthiPrasannakumar/hospital-web" target='_blank' className='btn btn-secondary me-2'> <i className='fa-brands fa-github'></i></a>
            <a href="https://counter-redux-pi-one.vercel.app/" target='_blank' className='btn btn-secondary '> <i className='fa-solid fa-link'></i></a>
          </div>
        </Modal.Body>
       
      </Modal>
    
    
    </>
  )
}

export default ProjectCard
import React,{Component} from 'react';
import { Row, Container, Col, Button, Modal, Form, InputGroup, FormControl} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from "../media/index.css";
import { Link } from "react-router-dom";
import {BsBoxArrowLeft} from 'react-icons/bs';
import {BsPlus} from 'react-icons/bs';
import {IoIosFemale} from 'react-icons/io';
import {IoIosMale} from 'react-icons/io';
import {IoSearch} from 'react-icons/io5';

class Users extends Component{
  constructor(args){
    super(args);
    this.state = {
    }
  };
  render(){
		return (
			<Container fluid className="colorfondo">
					<Row>
						<Col md={12} className="pb-3">
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Mari</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30012345678</p>
									<IoIosFemale size="22px" color="fuchsia" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Marcos</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30112345678</p>
									<IoIosMale size="22px" color="blue" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Mari</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30012345678</p>
									<IoIosFemale size="22px" color="fuchsia" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Marcos</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30112345678</p>
									<IoIosMale size="22px" color="blue" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Mari</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30012345678</p>
									<IoIosFemale size="22px" color="fuchsia" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Marcos</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30112345678</p>
									<IoIosMale size="22px" color="blue" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Mari</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30012345678</p>
									<IoIosFemale size="22px" color="fuchsia" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
						<Link to="/user" className="textsimple">
							<Modal.Dialog className="transform">
								<Modal.Header closeButton>
									<Modal.Title>Marcos</Modal.Title>
								</Modal.Header>

								<Modal.Body className="d-flex flex-row flex-wrap">
									<p>30112345678</p>
									<IoIosMale size="22px" color="blue" className="ml-3"/>
								</Modal.Body>
							</Modal.Dialog>
						</Link>
							<div className="flotantesuperior d-block"style={{width:"100%"}}>
								<div className="d-flex flex-row flex-wrap" 
								style={{width:"150px",height:"25px"}}>
									<Link to="/" style={{width:"40px",marginTop:"28px",height:"40px",marginLeft:"20px"}}>
										<div className="rounded-circle sombra1 botonflotante"
										style={{width:"40px",paddingLeft:"8px",paddingTop:"5px",height:"40px",background:"white"}}>
											<BsBoxArrowLeft size="22px" color="#717171"/>
										</div>
									</Link>

									<Link to="/add-edit" style={{width:"40px",marginTop:"28px",height:"40px",marginLeft:"20px"}}>
										<div className="rounded-circle sombra1 botonflotante"  
											style={{width:"40px",paddingLeft:"8px",paddingTop:"5px",height:"40px",background:"white"}}>
											<BsPlus size="22px" color="#717171"/>
										</div>
									</Link>
								</div>
								<div style={{width:"20.9%",minWidth:"270px"}} className="float-right d-flex">
									<Form.Control type="email" placeholder="Buscar..." className="botonflotante" 
									style={{width:"20%",minWidth:"200px"}}/>
									<div className="rounded-circle botonflotante"  
										style={{width:"40px",paddingLeft:"9px",paddingTop:"5px",height:"40px",left:"0px",marginLeft:"20px",background:"white"}}>
										<IoSearch size="20px" color="#717171"/>
									</div>
								</div>
							</div>
							
							
						</Col>
					</Row>
			</Container>
		);
  }
}

export default Users;
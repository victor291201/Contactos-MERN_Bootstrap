import React,{Component} from 'react';
import { Row, Container, Col, Button, Card, Image } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from "../media/index.css";
import PropTypes from 'prop-types' ;
import { Link } from "react-router-dom";

class User extends Component{
  constructor(args){
    super(args);
    this.state = {
    }
  };
  render(){
		return (
			<Container fluid className="vh100">
					<Row className="h100 colorfondo">
						<Col md={3}></Col>
						<Col md={6} >
							<div className="rounded-circle my-5"
							 	style={{width:"240px",height:"240px",margin:"0 auto",border:"1px solid #D2D2D2"}}>
								<Image src="http://www.clcorporation.com/wp-content/uploads/2018/09/article.jpg" roundedCircle 
								style={{width:"100%",height:"100%",border:"10px solid white"}}/>
							</div>
							<Card style={{ width: '100%' }}>
								<Card.Body>
									<Card.Title>Mari</Card.Title>
									<Card.Text>
										Compañera de trabajo
									</Card.Text>
									<Card.Text>
										30012345678
									</Card.Text>
									<div className="d-flex flex-wrap justify-content-around ">
										<Link to="/add-edit">
											<Button className="botonflotante" style={{width:"150px",marginTop:"7px",marginBottom:"7px"}}>Editar</Button>
										</Link>
										<Button className="botonflotante" style={{width:"150px",marginTop:"7px",marginBottom:"7px"}}>Eliminar</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={3}></Col>
					</Row>
			</Container>
		);
  }
}

export default User;
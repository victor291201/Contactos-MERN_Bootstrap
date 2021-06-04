import React,{Component} from 'react';
import { Row, Container, Col, Button, InputGroup, Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from "../media/index.css";
import PropTypes from 'prop-types' ;
import { Link } from "react-router-dom";

class AddEdit extends Component{
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
						<Col md={6} className="mt-5 pt-4"> 
              <h2>
                Crear contacto nuevo
              </h2>
              <Form.Group className="w100">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email"
                placeholder="Ingrese el nombre" name="nombre" 
                />
              </Form.Group>
              <Form.Group className="w100">
                <Form.Label>Numero</Form.Label>
                <Form.Control type="email"
                  placeholder="Ingrese el numero" name="numero" 
                />
              </Form.Group>
              <Form.Group className="w100">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div>
                <Form.Check
                  type="radio"
                  inline
                  label={`hombre`}
                  id={`hombre`}
                  name="sexo"
                />
                <Form.Check
                  type="radio"
                  inline
                  label={`mujer`}
                  id={`mujer`}
                  name="sexo"
                />
              </div>
              <Button className="botonflotante mt-4" style={{width:"150px",border:"none",display:"block",position:"relative",margin:"0 auto"}}>
                Guardar
              </Button>
						</Col>
						<Col md={3}></Col>
					</Row>
			</Container>
		);
  }
}

export default AddEdit;
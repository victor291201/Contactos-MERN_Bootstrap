import React,{Component} from 'react';
import { Row, Container, Col, Button, Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from "../media/index.css";
import PropTypes from 'prop-types' ;
import { Link } from "react-router-dom";

class LoginRegister extends Component{
  constructor(args){
    super(args);
    this.state = {
    }
  };
  render(){
    const {tipo} =this.props;
    if(tipo==="registrar"){
      return (
        <Container fluid className="vh100 colorfondoi">
            <Row className="h100">
              <Col md={3} className="colorfondoi h100">
                <div style={{marginTop:"6.3em",marginLeft:"10%"}}>
                  <h2>
                      Registrate 
                  </h2>
                  <Form style={{marginTop:"25px"}}>
                    <Form.Row  className="w100">
                      <Form.Group className="w100">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" style={{width:"90%"}}  
                        placeholder="Ingrese el nombre de usuario" name="username" 
                        />
                      </Form.Group>
                      <Form.Group className="w100">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" style={{width:"90%"}}  
                        placeholder="Ingrese el nombre de usuario" name="username" 
                        />
                      </Form.Group>
                      <Form.Group className="w100">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" style={{width:"90%"}} 
                          placeholder="Ingrese la contraseña" name="password" 
                        />
                      </Form.Group>
                    </Form.Row>
                  </Form>
                  <hr style={{marginRight:"12%",marginTop:"45px"}}/>
                  <div style={{marginTop:"60px" ,marginBottom:"60px",marginRight:"10%"}} className="d-flex justify-content-center">
                    <Link to="/" className="deco-n">
                      <Button className="btncolor1"
                        style=
                        {{maxWidth:"80%",minWidth:"6.7em"}}
                      >
                        Registrarse
                      </Button>
                    </Link>
                  </div>
                </div>
                
              </Col>
              <Col md={9} className="gradiente h100 d-none d-md-block">
                <div style={{width:"50%",marginLeft:"12%",marginTop:"11%"}}>
                  <h2 className="text-light">
                      Conocenos
                  </h2>
                  <p className="text-light" style={{marginTop:"5%"}}>
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                  </p>
                </div>
              </Col>
            </Row>
        </Container>
      );
    }
    else{
      if(tipo === "login"){
        return (
          <Container fluid className="vh100 colorfondoi">
              <Row className="h100">
                <Col md={3} className="h100 colorfondoi">
                  <div style={{marginTop:"8.5em",marginLeft:"10%"}}>
                    <h2>
                        Log In 
                    </h2>
                    <Form style={{marginTop:"25px"}}>
                      <Form.Row  className="w100">
                        <Form.Group className="w100">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="email" style={{width:"90%"}}  
                          placeholder="Ingrese el nombre de usuario" name="username" 
                          />
                        </Form.Group>
                        <Form.Group className="w100">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" style={{width:"90%"}} 
                            placeholder="Ingrese la contraseña" name="password" 
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                    <hr style={{marginRight:"12%",marginTop:"45px"}}/>
                      <div className="d-flex flex-row flex-wrap justify-content-around ml-md-n1" 
                      style={{marginRight:"10%",marginTop:"60px",marginBottom:"30px"}}>
                      <Link to="/inicio" className="deco-n">
                        <Button className="btncolor1"
                          style={{maxWidth:"80%",minWidth:"6.7em",marginBottom:"30px"}}
                        >
                          Ingresar
                        </Button>
                      </Link>
                      <Link to="/registrar" className="deco-n">
                        <Button className="btncolor2"
                          style={{maxWidth:"80%",minWidth:"6.7em"}}
                        >
                          Registrarse
                        </Button>
                      </Link>
                      </div>
                  </div>
                  
                </Col>
                <Col md={9} className="gradiente h100 d-none d-md-block">
                  <div style={{width:"50%",marginLeft:"12%",marginTop:"11%"}}>
                    <h2 className="text-light">
                        Conocenos
                    </h2>
                    <p className="text-light" style={{marginTop:"5%"}}>
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                      somos una compañia de registro de contactos la cual prestamos servicio a pequeñas empresas
                    </p>
                  </div>
                </Col>
              </Row>
          </Container>
        );
      }
    }
  }
}
LoginRegister.defaultProps = {  
    tipo: "login"  
}  

export default LoginRegister;
import React,{Component} from 'react';
import LoginRegister from "./components/login-register";
import Users from "./components/users";
import User from "./components/user";
import AddEdit from "./components/add-edit";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component{
  constructor(args){
    super(args);
    this.state = {
    }
  };
  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/" exact component={LoginRegister}/>
						<Route path="/registrar">
							<LoginRegister tipo="registrar"/>
						</Route>
            <Route path="/inicio" exact component={Users}/>
            <Route path="/user" exact component={User}/>
            <Route path="/add-edit" exact component={AddEdit}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

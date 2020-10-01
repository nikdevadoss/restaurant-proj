import React from 'react';
import './App.css';
import Select from 'react-select';
import axios from 'axios';
import data from './data';
import ListItems from './ListItems';
import { SelectList } from 'react-widgets'
import { Dropdown }from 'semantic-ui-react'
import {Icon} from 'semantic-ui-react'
import SelectSearch from 'react-select-search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class UserAuth extends React.Component{
  constructor(props){
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleLogin(e){
      for(let i = 0; i < data.users.length; ++i){
          console.log(this.state.username);
          if(data.users[i].username === this.state.username && data.users[i].password === this.state.password){
              console.log("LOGIN SUCESSFUL");
          }
      }
  }

handleUsername(e){
    this.setState({
        username: e.target.username
    });
    console.log(this.state.username);
}

handlePassword(e){
    this.setState({
        username: e.target.password
    });
    console.log(this.state.password);
}


  render(){
    return(
      <div className= "header">
        <header>
          <form id= "user-auth-form" onSubmit={this.handleLogin}>
              <label>Username: </label>
              <input type= "text" id= "username" value= {this.state.username} onChange= {this.handleUsername}></input>
              <p>{"\n"}</p>
              <label>Password: </label>
              <input type= "text" id= "password" value= {this.state.password} onChange= {this.handlePassword}></input>
              <p>{"\n"}</p>
            <button type= "submit" onClick= {this.handleLogin}>Login</button>
          </form>
        </header>
      </div>
    );
  }
}
export default UserAuth;
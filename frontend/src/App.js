import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RestaurantList from './RestaurantList';
import UserAuth from './UserAuth';


class App extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">User Authentication</Link>
          </li>
          <li>
            <Link to="/restaurantList">Restaurant List</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/restaurantList">
            <RestaurantList></RestaurantList>
          </Route>
          <Route path="/">
            <UserAuth></UserAuth>
          </Route>
        </Switch>
      </div>
    </Router>

    );
  }
  
}

// function UserAuth() {
//   return <h2>userAuth</h2>;
// }
export default App;
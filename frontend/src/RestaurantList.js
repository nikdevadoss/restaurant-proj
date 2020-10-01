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


class RestaurantList extends React.Component{
  constructor(props){
    super();
    this.state = {
      items:[],
      currentItem: {
        text: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value
      }
    });
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: ''
        }
      })

    }
  }
  render(){
    return(
      <div className= "header">
        <header>
          <form id= "add-restaurant-form" onSubmit={this.addItem}>
            <select name="list" value={this.state.currentItem.text} onChange= {this.handleInput} >
              {data.restaurants.map((e, key) => {
                return <option value={e.value}>{e.name}</option>;
              })}
            </select>
            <button type= "submit">Add</button>
          </form>
        </header>
        <ListItems items = {this.state.items}></ListItems>
      </div>
    );
  }
}
export default RestaurantList;
import React from 'react';
import './ListItems.css';
import {Icon} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'font-awesome/css/font-awesome.min.css';

function ListItems(props){
    const items = props.items;
    const listItems = props.items.map(item => {
        return <div className="list" key= {item.key}>
            <p>
                {item.text} 
                {/* <button > Delete</button> */}
            </p>
        </div>
    })
    return (
        <div>{listItems}</div>
    );

}

export default ListItems;

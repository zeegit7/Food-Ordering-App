import React, { Component } from 'react';
import './App.css';

class Menu extends Component {


  constructor(props){
    super(props);

    this.state={

      items:this.props.data
  };

}

  handleAdd(i){
    console.log("addIndex",i);
    this.props.addToCart(i);

}




  render() {

    var items = this.state.items.map((item, i)=>{
      return  <li key={i}>{item.name} :{item.value} <button onClick={(e)=>{this.handleAdd(i)}}>Add</button></li>
});



    return (



      <div style={{float: "left"}}>

        <h1 > Menu </h1>
          {items}


          </div>


    );
  }
}

export default Menu;

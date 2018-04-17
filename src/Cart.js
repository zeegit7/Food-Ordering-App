import React, { Component } from 'react';
import './App.css';

class Cart extends Component {

  constructor(props){
    super(props);

    this.state={

    cartItems:this.props.data

    };
  }

  handleRemove(i){
    console.log("Remove called", i)
    this.props.removeFromCart(i);
  }

    render() {

      var cart = this.state.cartItems.map((item, i)=>{
        return  <li key={i}>{item.name} : {item.value} <button onClick={(e)=>{this.handleRemove(i)}}>Remove</button> Qty:{this.state.cartItems[i].qty}</li>
      });

        return (

          <div  style={{float: "right"}}>

          <h1 style={{float: "right"}}> Cart </h1>

            {cart}



          </div>


        );
    }
}

export default Cart;

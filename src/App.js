import React, { Component } from 'react';
import Menu from './Menu';
import Cart from './Cart';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state={

      items: [
        {
          "name": "Mocha",
           "value": 6,
           "qty":1
         },
         {
           "name": "Misto",
            "value": 4.5,
               "qty":1
          },
          {
            "name": "Cappuchino",
             "value": 3.5,
                "qty":1
           },
           {
             "name": "Frappe",
              "value": 8,
                 "qty":1
            },
            {
              "name": "Cafe Blonde",
               "value": 5,
                  "qty":1
             }
    ],
    cartItems:[],
    total : 0
    };
  }

addToCart(i){
  console.log("Add to cart called!" , i)
  for(var x = 0;x<this.state.cartItems.length;x++){
    if((this.state.cartItems[x].name===this.state.items[i].name)){
        console.log("If executed");
        this.state.items[i].qty++;
          console.log("New qty",this.state.items[i].qty );
        break;
    }
  }
  if(this.state.items[i].qty<=1){
    this.state.cartItems.push(this.state.items[i]);
  }


  this.state.total =this.state.total+ this.state.items[i].value;
  console.log("total",this.state.total);

  this.setState({});
}

removeFromCart(i){
  //console.log("total",this.state.total);
  console.log("removeIndex",i);
  console.log("removeItem",this.state.cartItems[i].name);

  if(this.state.cartItems[i].qty>1){
    console.log("Remove if executed");
    this.state.cartItems[i].qty--;
    this.state.total =this.state.total- this.state.cartItems[i].value;
    console.log("New qty",this.state.cartItems[i].qty);
  }
  else{
    this.state.total =this.state.total- this.state.cartItems[i].value;
    this.state.cartItems.splice(i,1);

  }

  //this.state.total =this.state.total- (this.state.cartItems[i].value*this.state.cartItems[i].qty);
  console.log("total",this.state.total);


  this.setState({});

}

handleOrder(){
  console.log("Order Processed!")
  console.log("Total",this.state.total);
  this.state.cartItems.splice(0);
  this.state.total = 0;
  this.setState({});
}


  render() {
    return (
      <div className="App">

        <h1> Starbucks  App </h1>

        <div>
          <Menu data={this.state.items} addToCart ={this.addToCart.bind(this)} />
          <Cart data={this.state.cartItems} removeFromCart ={this.removeFromCart.bind(this)} />
          total : {this.state.total}
          <button onClick={(e)=>{this.handleOrder()}}> Place Order! </button>
        </div>

      </div>
    );
  }
}

export default App;

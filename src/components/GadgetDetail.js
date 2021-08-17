import React from "react";
import PropTypes from "prop-types";

function GadgetDetail(props) {


  function handleBuyingGadget(event) {
    event.preventDefault();
    if(props.gadget.quantity === 1 || props.gadget.quantity === "out of stock") {
      props.onClickingBuy({name: props.gadget.name, description: props.gadget.description, quantity: "out of stock", id: props.gadget.id });
    } else {
      props.onClickingBuy({name: props.gadget.name, description: props.gadget.description, quantity: props.gadget.quantity - 1, id: props.gadget.id });
    }
  }

  // function handleBuyingGadget(event) {
  //   event.preventDefault();
  //   console.log(props.gadget)
  //   if (props.gadget.quantity === 0) {
  //     let newQuantity = "out of stock";
  //     console.log(newQuantity);
  //     return newQuantity;
  //   } else {
  //     let newQuantity = props.gadget.quantity - 1;
  //     console.log(newQuantity);
  //     return newQuantity;
  //   }   
  // }

  return (
    <React.Fragment>
      <h1>Gadget Detail</h1>
      <p><strong>Gadget Name: </strong> {props.gadget.name}</p>
      <p><strong>Description: </strong> {props.gadget.description}</p>
      <p><strong>Quantity Available: </strong> {props.gadget.quantity}</p>
      <hr/>
      <button onClick={ handleBuyingGadget }>Buy</button> 
      <hr />
    </React.Fragment>
  );
}

GadgetDetail.propTypes = {
  gadget: PropTypes.object,
  onClickingBuy: PropTypes.func
}

export default GadgetDetail;
import React from "react";
import PropTypes from "prop-types";

function Gadget(props){
  return (
    <React.Fragment>
      <p><strong>Gadget Name: </strong> {props.name}</p>
      <p><strong>Description: </strong> {props.description}</p>
      <p><strong>Quantity Available: </strong> {props.quantity}</p>
      <hr />
    </React.Fragment>
  );
}

Gadget.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default Gadget;
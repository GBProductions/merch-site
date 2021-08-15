import React from "react";
import PropTypes from "prop-types";

function Gadget(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenGadgetClicked(props.id)}>
        <p><strong>Gadget Name: </strong> {props.name}</p>
        {/* <p><strong>Quantity Available: </strong> {props.quantity}</p> */}
        <hr />
      </div>
    </React.Fragment>
  );
}

Gadget.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenGadgetClicked: PropTypes.func
};

export default Gadget;
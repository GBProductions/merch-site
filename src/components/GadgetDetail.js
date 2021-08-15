import React from "react";
import PropTypes from "prop-types";

function GadgetDetail(props) {

  return (
    <React.Fragment>
      <h1>Gadget Detail</h1>
      <p><strong>Gadget Name: </strong> {props.gadget.name}</p>
      <p><strong>Description: </strong> {props.gadget.description}</p>
      <p><strong>Quantity Available: </strong> {props.gadget.quantity}</p>
      <hr/>
    </React.Fragment>
  );
}

GadgetDetail.propTypes = {
  gadget: PropTypes.object
}

export default GadgetDetail;
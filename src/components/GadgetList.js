import React from "react";
import Gadget from "./Gadget";
import PropTypes from "prop-types";


function GadgetList(props){
  return (
    <React.Fragment>
      <hr />
      {props.gadgetList.map((gadget, index) => 
        <Gadget name={gadget.name}
          description={gadget.description}
          quantity={gadget.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}

GadgetList.propTypes = {
  gadgetList: PropTypes.array
}

export default GadgetList;
import React from "react";
import Gadget from "./Gadget";
import PropTypes from "prop-types";


function GadgetList(props){
  return (
    <React.Fragment>
      <hr />
      {props.gadgetList.map((gadget) => 
        <Gadget 
          whenGadgetClicked = { props.onGadgetSelection }
          name={gadget.name}
          description={gadget.description}
          quantity={gadget.quantity}
          id={gadget.id}
          key={gadget.id} />
      )}
    </React.Fragment>
  );
}

GadgetList.propTypes = {
  gadgetList: PropTypes.array,
  onGadgetSelection: PropTypes.func
}

export default GadgetList;
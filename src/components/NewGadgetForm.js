import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewGadgetForm(props){

    function handleNewGadgetFormSubmission(event) {
        event.preventDefault();
        props.onNewGadgetCreation({name: event.target.name.value, quantity: event.target.quantity.valueAsNumber, description: event.target.description.value, id: v4()});
    }

    return (
        <React.Fragment>
            <h3>Add A New Gadget</h3>
            <form onSubmit={handleNewGadgetFormSubmission}>
                <input
                    type="text"
                    name="name"
                    placeholder="Gadget Name" />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity in Stock" />
                <br />
                <textarea
                    name="description"
                    placeholder="Describe the gadget." />
                <br />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}


NewGadgetForm.propTypes ={
    onNewGadgetCreation: PropTypes.func
};


export default NewGadgetForm;
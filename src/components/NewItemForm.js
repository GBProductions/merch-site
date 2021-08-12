import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props){

    function handleNewGadgetFormSubmission(event) {
        event.preventDefault();
        props.onNewItemCreation({name: event.target.name.value, quantity: event.target.quantity.valueAsNumber, description: event.target.description.value, id: v4()});
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
                <textarea
                    name="description"
                    placeholder="Describe the gadget." />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}


NewItemForm.propTypes ={
    onNewItemCreation: PropTypes.func
};


export default NewItemForm;
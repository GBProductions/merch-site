import React from "react";

function NewItemForm(props){
    return (
        <React.Fragment>
            <h3>New Item Form</h3>
            <form onSubmit={props.formSubmissionHandler}>
            <input
            type="text"
             name="names"
             placeholder="Item Name" />
            <input
            type="number"
            quantity="quantity"
            placeholder="Quantity in Stock"
             />
            <testarea
            description="Describe the product."
            />
            <button type="submit">{props.buttonText}</button>
            </form>
        </React.Fragment>
    )
}




export default NewItemForm;
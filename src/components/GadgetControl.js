import React from 'react';
import GadgetList from './GadgetList';
import NewGadgetForm from './NewGadgetForm';

class GadgetControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      gadgetCollection: []
    };
  }

  handleAddingNewGadgetToCollection = (newGadget) => {
    const newGadgetCollection = this.state.gadgetCollection.concat(newGadget);
    this.setState({gadgetCollection: newGadgetCollection,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {

    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewGadgetForm  onNewGadgetCreation={this.handleAddingNewGadgetToCollection}/>
      buttonText = "Return to Gadget List";
    } else {
      currentlyVisibleState = <GadgetList gadgetList={this.state.gadgetCollection}/>
      buttonText = "Add Gadget";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default GadgetControl;
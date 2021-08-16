import React from 'react';
import GadgetList from './GadgetList';
import NewGadgetForm from './NewGadgetForm';
import GadgetDetail from './GadgetDetail';


class GadgetControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      gadgetCollection: [],
      selectedGadget: null,
      newGadgetQuantity: 0
    };
  }

  // handleBuyingSelectedGadget = (gadget) => {
  //   console.log("handleBuyingSelectedGadget reached");
  //   this.setState(prevState => ({
  //     newGadgetQuantity: !prevState.
  //   }));


  //   // console.log(id)
  //   console.log(gadget.quantity);
  //   this.setState({newGadgetQuantity: 1});
  //   console.log(this.state)
  //   // const newGadgetQuantity = this.state.gadgetCollection.filter(gadget => gadget.id === id)[0];
  //   // this.setState({new})
  // }

  handleChangingSelectedGadget = (id) => {
    const selectedGadget = this.state.gadgetCollection.filter(gadget => gadget.id === id)[0];
    this.setState({selectedGadget: selectedGadget});
  }

  handleAddingNewGadgetToCollection = (newGadget) => {
    const newGadgetCollection = this.state.gadgetCollection.concat(newGadget);
    this.setState({gadgetCollection: newGadgetCollection,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedGadget != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedGadget: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedGadget != null) {
      currentlyVisibleState = <GadgetDetail gadget = {this.state.selectedGadget}
                                            // onClickingBuy = {this.handleBuyingSelectedGadget} 
                                            />
      buttonText = "Return to Gadget List"
    }
     else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewGadgetForm  onNewGadgetCreation={this.handleAddingNewGadgetToCollection}/>
      buttonText = "Return to Gadget List";
    } else {
      currentlyVisibleState = <GadgetList gadgetList={this.state.gadgetCollection} onGadgetSelection = {this.handleChangingSelectedGadget} />
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
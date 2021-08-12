import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      itemCollection: []
    };
  }

  handleAddingNewItemToCollection = (newItem) => {
    const newItemCollection = this.state.itemCollection.concat(newItem);
    this.setState({itemCollection: newItemCollection,
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
      currentlyVisibleState = <NewItemForm  onNewItemCreation={this.handleAddingNewItemToCollection}/>
      buttonText = "Return to Gadget List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.itemCollection}/>
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

export default ItemControl;
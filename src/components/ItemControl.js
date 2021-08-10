import React from 'react';
import ItemList from './ItemList';

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false
    };
  }

  render() {

    return (
      <React.Fragment>
        <ItemList />
      </React.Fragment>
    );
  }
}

export default ItemControl;
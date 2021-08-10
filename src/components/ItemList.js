import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

const dummyMerch = [
  {
    name: "t-shirt",
    description: "logo cotton tee",
    quantity: 40,
  },
  {
    name: "keychain",
    description: "large key chain",
    quantity: 20,
  },
  {
    name: "beanie",
    description: "embroidered gray beanie",
    quantity: 15,
  },

]

function ItemList(props){
  return (
    <React.Fragment>
      <hr />
      {dummyMerch.map((item, index) => 
        <Item name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}

// ItemList.propTypes = {
//   itemList:
// }

export default ItemList;
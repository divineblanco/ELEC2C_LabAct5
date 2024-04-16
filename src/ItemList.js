import Item from "./Item";
import React from "react";
function ItemList({ items }) {
//   const item = [
//     { id: 1, quantity: "1", name: "Milk", isChecked: false },
//     { id: 2, quantity: "2", name: "Coffee", isChecked: false },
//     { id: 3, quantity: "3", name: "Sugar", isChecked: false },
//   ];

  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {items.map((item) => (
          <Item itemList={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
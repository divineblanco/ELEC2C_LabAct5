import Item from "./Item";
import React from "react";
function ItemList({ items, onDeleteItem, handleCheck }) {
  const totalItems = items.length;

  const checkedItems = items.filter((item) => item.isChecked).length;

  const percentageCheck =
    totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;


  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {items.map((item) => (
          <Item itemList={item} key={item.name} onDelete={onDeleteItem} handleCheck={handleCheck}/>
        ))}
      </ul>

      {}
      <div className="Percentage">
        List Checked: {percentageCheck.toFixed(2)}%
      </div>

    </div>
  );
}

export default ItemList;
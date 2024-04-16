import React, { useState } from "react";

function Item({ itemList, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
  
    function handleCheck() {
      setIsChecked(!isChecked);
    }
  
    return (
      <div className="items">
        <li className={`entry ${isChecked ? "checked" : ""}`}>
          <span>
            <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
              {itemList.quantity} {itemList.name}
            </span>
          </span>{" "}
          <div>
            <button onClick={handleCheck}>
              {isChecked ? "Uncheck" : <img src="./check.png" width="20px" height="20px" alt="check"></img>}
            </button>
            <button onClick={() => onDelete(itemList.id)}><img src="./delete.png" width="20px" height="20px" alt="delete"></img></button>
          </div>
        </li>
      </div>
    );
  }

  export default Item;
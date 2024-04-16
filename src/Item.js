import React, {useState} from "react";

function Item({itemList, onDelete}){

    const [isChecked, setIsChecked] = useState(false);

    function handleCheck(){
        setIsChecked(!isChecked);
    }

    function handleClick(){
        onDelete(itemList.id);
    }

    return(

        <div className="items">
            <li className={`entry ${isChecked ? "checked" : ""}`} >
                <span>
                    <span style={{ textdecoration: isChecked ? "line-through" : "none"}}>
                        {itemList.quantity} {itemList.name}
                    </span>
                </span>{" "}
                <div>
                    <button onClick={handleClick}>
                        <img src="./delete.png" width="20px" height="20px" alt="delete"></img> 
                    </button>
                    <button onClick={handleCheck}>
                        {isChecked ? "Uncheck" : <img src="./check.png" width="20px" height="20px" alt="check"></img>}
                    </button>
                </div>
               
            </li>
            <br/>
            <br/>
        </div>
    );
}

export default Item;
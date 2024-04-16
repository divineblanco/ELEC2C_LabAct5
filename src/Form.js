import { useState } from "react";

function Form({onAddItem}){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
  

    function handleSubmit(e){
        e.preventDefault();

        //form validation
        if (!name) return;
        
        const newItem = {name, quantity, isChecked: false, id: Date.now()};
        console.log(newItem);
        setName("");
        setQuantity(1);
        onAddItem(newItem);
    }
    
    return(
        <div id="form">
            <form onSubmit={handleSubmit}>
                <select value={quantity} onChange={e=>setQuantity(Number(e.target.value))}>
                    {/* <option>1</option>
                    <option>2</option>
                    <option>3</option> */}
                    {Array.from({length: 30}, (_, n) => n + 1).map(num=> (
                        <option value={num} key={num}>{num}</option>
                    ))}
                </select>
                <input 
                    type="text" 
                    placeholder="Add an item..." 
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <button>I Got This!</button>
            </form>
        </div>
    );
}

export default Form;
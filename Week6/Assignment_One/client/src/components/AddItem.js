import './AddItem.css';

import { useState } from "react";

const AddItem = ({submit, btnText, name, description, level, Id}) => {
    
    const initialInputs = {Name: name || "", Description: description || "", Level: level || ""};
    const [inputs, setInputs] = useState(initialInputs);


    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(event.target);
        setInputs(prevInputs => ({...prevInputs, [name]:value}));

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(inputs);
        if(inputs.Name === "" || inputs.Description === "" || inputs.Level === "")
           { 
                alert("Inputs Cannot Be Empty");
                return;
           }
        setInputs(initialInputs);
        submit(inputs, Id);

    };


    return(
        <form onSubmit={handleSubmit}>
             <input
                type="text"
                name="Name"
                value={inputs.Name}
                onChange={handleChange}
                placeholder="Item Name"
             />
             <input
                type="text"
                name="Description"
                value={inputs.Description}
                onChange={handleChange}
                placeholder="Item Description"
             />
             <input
                type="number"
                name="Level"
                min="1"
                max="5"
                value={inputs.Level}
                onChange={handleChange}
                placeholder="Level"
             />
             <button>{btnText}</button>
        </form>
    )

};

export default AddItem;
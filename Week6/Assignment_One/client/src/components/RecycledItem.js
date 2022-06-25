import { useState } from 'react';
import AddItem from './AddItem';

import './RecycledItem.css';

const RecycledItem = ({deleteItem, editItem, Name, Description, Level, Id}) =>{
    


    const [editToggle, setEditToggle] = useState(false);
    
    return (
        <ul >
            {
                !editToggle ? 
            <>            
                <li>Name: {Name}</li>
                <li>Description: {Description}</li>
                <li>Importance: {Level}</li>
                <button className='deleteBtn' onClick={ () => deleteItem(Id)}>Delete</button>
                <button className='editBtn' onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
                <AddItem
                    name={Name}
                    description={Description}
                    level={Level}
                    Id={Id}
                    btnText="Submit Edit"
                    submit={editItem}/>
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>    
            </>
            }
        </ul>
    )
};
export default RecycledItem;
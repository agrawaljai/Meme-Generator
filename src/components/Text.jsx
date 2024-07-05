import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {

    const [editmode, setEditMode ] = useState(false);
    const [val, setVal ] = useState("Double Click to Edit");


    return (
        <Draggable>
            {
                editmode ? ( 
                    <input onDoubleClick={e => setEditMode(false)} value={val} onChange={(e) => setVal(e.target.value)} type="text" /> 
                ) : ( 
                    <h1 onDoubleClick={e => setEditMode(true)}>{val}</h1> 
                )
            }
        </Draggable>
        
    );
}

export default Text;
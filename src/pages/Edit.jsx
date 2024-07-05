import React, { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import Button from 'react-bootstrap/Button';
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {

    const [params] = useSearchParams();
    const [count, setCount ] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);

    }


    return (
        <div>
            <div style={{ height: '70vh', width: '80vw', border: '2px solid', margin: '3px', padding: '2px'}} ref={memeRef} className="meme mt-5 mb-5">
                <img src={params.get("url")} style={{  maxHeight: '68vh', maxWidth: '70vw'}} alt="" />
                {
                    Array(count).fill(0).map(e => <Text />)
                }
            </div>
            <Button style={{marginLeft: '5px', marginRight: '5px'}} variant="primary" onClick={addText}>Add Text</Button>
            <Button style={{marginLeft: '5px', marginRight: '5px'}} variant="success" onClick={e => exportComponentAsJPEG(memeRef)}>Save</Button>
        </div>
    );
}

export default EditPage;
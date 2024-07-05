import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const Homepage = () => {

    const [data, setData ] = useState([]);


    useEffect(() => {
        getAllMemes().then((memes) => setData(memes.data.memes));
    }, []);

    return (
        <div className="row" style={{margin: '5px'}}>
            {
                data.map(el => <MemeCard image={el.url} title={el.name} />)
            }
        </div>

    );
}

export default Homepage;
import React from "react";
import { useHistory } from "react-router-dom";

const Child = () => {
    const history = useHistory();
    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Oops! Let's try that again</h1>
            <h2>Ask a parent or guardian to help out</h2>
            <button className='onb-btn' onClick={() => history.push("/parent")}>I'm a parent</button>
        </div>
    )
}

export default Child;
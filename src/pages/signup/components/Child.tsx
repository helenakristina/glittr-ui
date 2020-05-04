import React from "react";
import { useHistory } from "react-router-dom";

const Child = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Oops! Let's try that again</h1>
            <h4>Ask a parent or guardian to help out</h4>
            <button onClick={() => history.push("/parent")}>I'm a parent</button>
        </div>
    )
}

export default Child;
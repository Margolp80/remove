import React from "react";
import {useState} from "react";
import Link from "./Link";

function ReadFile(props) {



    const changeHandler = async (event) => {
        const reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = function (e) {
            props.setFileInfo(e.target.result)
        };


    };


    return (
        <div className="App">
            <input type="file" name="file" onChange={changeHandler}/>
            <div>
                <Link href={'/output'}>Read clean file</Link>
            </div>
        </div>
    );

}

export default ReadFile;
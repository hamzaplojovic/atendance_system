import React from "react";
import "./Main.css";

const Divs = () => {
    var string = "";
    for (let x of Array(localStorage.getItem("students"))) {
        string = string + x;
    }
    for (let index = 0; index < string.split(",").length; index++) {
        var heading = document
            .getElementById("main")
            .appendChild(document.createElement("h1"));
        heading.innerText = string.split(",")[index];
    }
    document.getElementById("button").style.display = "none";
};

function Main() {
    return (
        <div className="main" id="main">
            <button onClick={Divs} id="button">
                Generate
            </button>
        </div>
    );
}

export default Main;

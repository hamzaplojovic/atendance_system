import React from "react";
import "./Main.css";

const Divs = () => {
    var string = "";
    for (let x of Array(localStorage.getItem("students"))) {
        string = string + x;
    }
    for (let index = 0; index < string.split(",").length; index++) {
        var studentCheck = document
            .getElementById("main")
            .appendChild(document.createElement("div"));
        studentCheck.setAttribute("class", "check");
        var heading = studentCheck.appendChild(document.createElement("h2"));
        heading.innerText = string.split(",")[index];
        var check = studentCheck.appendChild(document.createElement("input"));
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "checkbox");
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

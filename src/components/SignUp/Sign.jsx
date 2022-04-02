import React from "react";
import "./Sign.css";
import file from "./FIle";

const submitHandler = (e) => {
    e.preventDefault();
    var students = [];
    var users = {
        user1: { username: "hamzaplojovic", password: "admin" },
        user2: { username: "hanaplojovic", password: "admin" },
    };

    for (var x = 0; x < Object.values(users).length; x++) {
        if (
            document.getElementById("username").value ===
                Object.values(users)[x]["username"] &&
            document.getElementById("password").value ===
                Object.values(users)[x]["password"]
        ) {
            for (const key in file.data["users"][
                document.getElementById("username").value
            ]) {
                students.push(
                    file.data["users"][
                        document.getElementById("username").value
                    ][key]
                );
            }
            localStorage.setItem(
                "username",
                document.getElementById("username").value
            );
            localStorage.setItem("students", Array(students));
            document.querySelector("div.main").style.display = "block";
            document.querySelector("div.sign").style.display = "none";
        } else if (
            document.getElementById("password").value !==
            Object.values(users)[x]["password"]
        ) {
            window.location.reload(true);
        }
    }
};

function SignIn() {
    return (
        <div className="sign">
            <form action="">
                <label htmlFor="username">Enter your usename: </label>
                <input type="text" id="username" />
                <label htmlFor="password">Enter your password: </label>
                <input type="text" id="password" />
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    );
}

export default SignIn;

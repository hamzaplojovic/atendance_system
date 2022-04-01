import React from "react";
import "./Sign.css";

const submitHandler = (e) => {
    e.preventDefault();
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
            window.open("https://google.com");
        } else {
            document.location.reload(true);
        }
    }
};

function SignIn() {
    return (
        <div className="main">
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

import React from "react";

const submitHandler = (e) => {
    e.preventDefault();
    var users = {
        user1: { username: "hamzaplojovic", password: "admin" },
        user2: { username: "hanaplojovic", password: "admin" },
    };

    for (var x = 0; x < Object.values(users).length; x++) {
        if (
            document.getElementById("username").value ==
                Object.values(users)[0]["username"] &&
            document.getElementById("password").value ==
                Object.values(users)[0]["password"]
        ) {
            console.log("HI");
            break;
        }
    }
    if (1 == 1) {
        // if ("hamzaplojovic" == document.getElementById("username").value) {
        //     console.log("HI");
        // }
    }
};

function SignIn() {
    return (
        <form action="">
            <label htmlFor="username">Enter your usename: </label>
            <input type="text" id="username" />
            <label htmlFor="password">Enter your password: </label>
            <input type="text" id="password" />
            <button onClick={submitHandler}>Submit</button>
        </form>
    );
}

export default SignIn;

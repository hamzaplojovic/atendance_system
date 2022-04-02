import "./App.css";
import SignIn from "./components/SignUp/Sign";
import Main from "./components/SignUp/Main/Main";

function App() {
    console.clear();
    return (
        <div className="App">
            <SignIn />
            <Main />
        </div>
    );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <Welcome />
        <AllTheBooks />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;

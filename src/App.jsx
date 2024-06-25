import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <AllTheBooks />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;

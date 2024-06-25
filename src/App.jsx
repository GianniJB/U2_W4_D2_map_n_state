import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-3 mt-5">
          <AllTheBooks />
        </div>
      </div>
    </div>
  );
}

export default App;

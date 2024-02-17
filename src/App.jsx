import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import "./index.css";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="mt-3">
          <div className="container-fluid">
            <div className="row ms-1">
              <div className="col-md-8 ">
                <Searchbar />
                <Cards />
              </div>
              <div className="col-md-4 ">
                <Filters />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Movielist from "./components/Movielist.jsx";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Watchlist from "./components/Watchlist.jsx";
import Banner from "./components/Banner.jsx";
import { useEffect, useState } from "react";
function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("movieItems", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRemoveMovie = (movieObj) => {
    let currentWatchList = watchList.filter((movie) => movie.id != movieObj.id);
    localStorage.setItem("movieItems", JSON.stringify(currentWatchList));
    setWatchList(currentWatchList);
  };
  useEffect(() => {
    let allMovies = localStorage.getItem("movieItems");
    if (!allMovies) {
      return;
    }
    setWatchList(JSON.parse(allMovies));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar watchList={watchList} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movielist
                  handleAddWatchList={handleAddWatchList}
                  watchlist={watchList}
                  handleRemoveMovie={handleRemoveMovie}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchList={watchList}
                handleRemoveMovie={handleRemoveMovie}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

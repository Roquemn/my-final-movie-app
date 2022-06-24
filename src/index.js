import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./features/MovieSearch/pages/LandingPage";
import { MoviesProvider } from "./features/Providers/MoviesProvider";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FavoritesPage from "./features/FavoritesMovies/pages/FavoritesPage";
import Home from "./features/MovieSearch/pages";
import Footer from "./features/MovieSearch/components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      <MoviesProvider>
        <Switch>
          <Route path="/my-final-movie-app" component={LandingPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Redirect to="/my-final-movie-app"/>
        </Switch>
      </MoviesProvider>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

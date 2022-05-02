import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Details from "./components/details/Details";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import { HomeContainer } from "./components/home/styles/HomeStyles";
import ViewSelectMov from './components/viewedSelectedMovies/ViewSelectMov';
import { details, favourites, home } from "./utils/constants";



const App = () => {
    return (
        <>
            <HomeContainer>
                <Header />
            </HomeContainer>
            <Switch>
                <Route exact path={['/', `${home}`]}>
                    <Home />
                </Route>
                <Route path={details}>
                    <Details />
                </Route>
                <Route path={favourites}>
                    <ViewSelectMov />
                </Route>
            </Switch>
        </>

    );
};

export default App;
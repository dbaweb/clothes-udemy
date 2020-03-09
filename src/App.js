import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndOutPage from "./components/pages/sign-in-and-out/sign-in-and-out.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndOutPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { HomePage } from "./components/pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { HatsPage } from "./components/pages/hatspage/hats-page.component";
import { JacketsPage } from "./components/pages/jacketspage/jackets-page.component";
import { SneakersPage } from "./components/pages/sneakerspage/sneakers-page.component";
import { WomenPage } from "./components/pages/womenpage/women-page.component";
import { MenPage } from "./components/pages/menpage/men-page.component";
import ShopPage from "./components/pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
        <Route exact path="/jackets" component={JacketsPage}></Route>
        <Route exact path="/sneakers" component={SneakersPage}></Route>
        <Route exact path="/women" component={WomenPage}></Route>
        <Route exact path="/men" component={MenPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

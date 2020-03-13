import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import collectionOverviewComponent from "../../components/collection-overview/collection-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.page}`}
      component={collectionOverviewComponent}
    />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

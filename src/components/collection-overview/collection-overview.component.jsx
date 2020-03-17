import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collection-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...othersCollectionProps }) => (
      <CollectionPreview key={id} {...othersCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

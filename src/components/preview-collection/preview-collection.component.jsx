import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewItems
} from "./preview-collection.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <CollectionPreviewItems>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewItems>
  </CollectionPreviewContainer>
);

export default CollectionPreview;

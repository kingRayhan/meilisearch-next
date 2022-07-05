import React from "react";

import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom";

import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "instantsearch.css/themes/algolia-min.css";

const searchClient = instantMeiliSearch(
  "https://search.newsrme.com",
  "i1OrThaLdbd6b98f555df8112c964675ed91c5df1300b656df1185395bd67d890189c441"
);

const Search = () => (
  <div className="ais-InstantSearch">
    <InstantSearch indexName="videos" searchClient={searchClient}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </div>
);

const Hit = ({ hit }) => (
  <div key={hit.id}>
    <div className="hit-name">
      <Highlight attribute="title" hit={hit} />
    </div>
  </div>
);

export default Search;

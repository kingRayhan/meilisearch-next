import React from "react";
import dynamic from "next/dynamic";
const Searchbar = dynamic(() => import("../components/Search"), {
  ssr: false,
});

const index = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
};

export default index;

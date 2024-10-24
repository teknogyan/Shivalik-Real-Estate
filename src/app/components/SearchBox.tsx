"use client";
import React, { useState } from "react";
const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search for a property"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;

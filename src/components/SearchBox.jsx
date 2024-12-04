import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/UseFetch";
import { Link ,useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data] = useFetch(`search/movie`, { query });

  const navigate = useNavigate()

  return (
    <div className="searchBox">
      <input
        className="searchField"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="resultBox">
        <ul>
          {data?.results?.map((item) => {
            return (
            <li>
              <Link to={`movie/${item.id}`}>{item.title}</Link>
            </li>

            // another method use to useNavigate
            // <li onClick={() => navigate(`movie/${item.id}`)}>
            //   {item.title}
            // </li>

              )
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;

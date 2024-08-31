import React from "react";
import Wrapper from "./wrapper";
import MovieCard from "./MovieCard";
import { popularMovies } from "../utils/data";

const Main = () => {
  // console.log(popularMovies)
  return (
    <main>
      <div className="movieSlider">
        <p style={{ textAlign: "center" }}>movie slider goes here</p>
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies</h2>
        <div className="gallery">

          {
            popularMovies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              }
            )
          }
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;

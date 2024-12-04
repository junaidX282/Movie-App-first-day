import React from "react";
import { useState } from "react";
import Wrapper from "../components/wrapper";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Slider from "../components/Slider";
import { useFetch } from "../hooks/UseFetch";

const Home = () => {


  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetch("movie/popular", { page: page });

  const { results, total_pages } = data;

  return (
    <main>
      <div className="movieSlider">
        <Slider />
      </div>
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && (
          <>
            <h2 className="sectionTitle">Popular Movies</h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
          </>
        )}

        <Pagination page={page} setPage={setPage} totalPages={total_pages} />
      </Wrapper>
    </main>
  );
};

export default Home;

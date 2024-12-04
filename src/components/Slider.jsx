import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useFetch } from "../hooks/UseFetch";
import { spliderOptions } from "./sliderData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const Slider = () => {
  const [data, loading, error] = useFetch("movie/now_playing");
  const { results } = data;

  return (
    <div className="movieSlider">
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <Splide options={spliderOptions}>
          {results?.map(({ title, backdrop_path, id }) => (
            <SplideSlide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                alt=""
              />
              <div className="slideCaption">
                <h2>{title}</h2>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default Slider;

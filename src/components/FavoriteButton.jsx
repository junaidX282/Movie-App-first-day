import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HeartFill from "../assets/heart-filled.svg";
import HeartLine from "../assets/heart-lined.svg";

const FavoriteButton = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);

  let favorited = state.favorites.some((item) => item.id === movie.id);

  const handleFavorite = () => {
    favorited
      ? dispatch({ type: "REMOVE_FROM_FAVORITE", payload: movie.id })
      : dispatch({ type: "ADD_TO_FAVORITE", payload: movie });
  };

  return (
    <div className="favButton" onClick={handleFavorite}>
      {favorited ? <img src={HeartFill} alt="" /> : <img src={HeartLine} />}
    </div>
  );
};

export default FavoriteButton;

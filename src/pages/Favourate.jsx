import React from 'react'
import Wrapper from '../components/wrapper'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import MovieCard from '../components/MovieCard'

const Favourate = () => {

  const {state}  = useContext(AppContext)

  return (
    <Wrapper>
      <div className="sectionTitle">
          favorited movies
        </div>
      <div className="gallery">
        
        {
          state?.favorites.map((movie) =>{
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })
        }
      </div>
    </Wrapper>
  )
}

export default Favourate
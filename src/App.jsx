
import Layout from "./components/Layout"
import {Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home"
import Favourate from '../src/pages/Favourate'
import MovieInfo from '../src/pages/MovieInfo'

function App() {
  

  return (
   <Layout>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path = '/favorates' element= {<Favourate />} />
      <Route path = '/movie/:id' element={<MovieInfo />} />
    </Routes>
   </Layout>
  )
}

export default App

import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';


function App() {

  return (
    <>
    <Routes>
      <Route path= "/" element={<Home />}/>
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>

   </>
  )
}

export default App

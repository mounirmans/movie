// import { Route, Routes } from 'react-router';
// import Home from './pages/Home';
// import MovieDetails from './pages/MovieDetails';
// import About from './pages/About';
// import Contact from './pages/Contact';


// function App() {

//   return (
//     <>
//     <Routes>
//       <Route path= "/" element={<Home />}/>
//       <Route path= "/about" element={<About />}/>
//       <Route path= "/contact" element={<Contact />}/>
//       <Route path="/movie/:id" element={<MovieDetails />} />
//     </Routes>

//    </>
//   )
// }

// export default App
// App.tsx
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from '../src/components/Navbar'; // Import the Navbar
import { ThemeProvider } from '../src/components/ThemeContext'; // Import the ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Navbar /> {/* Include the Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

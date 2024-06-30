import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data); // Assuming data is an array of movies
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  // Rendering movies as list items
  const movies = data.map((movie) => (
    <li key={movie.id}>{movie.title}</li> // Assuming each movie object has a 'title' property
  ));

  return (
    <>
      <h1>Movie List</h1>
      <ul>{movies}</ul>
    </>
  );
}

export default App;

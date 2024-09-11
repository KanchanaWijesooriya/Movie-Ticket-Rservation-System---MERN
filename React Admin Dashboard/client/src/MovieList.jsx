import React, { useState, useEffect } from 'react';
import './MovieList.css';
import axios from 'axios';

function MovieList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [movies, setMovies] = useState([
  //   { id: 'C1', name: 'Mission Impossible: 7 Dead Reckoning Part One', banner: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg?20230517140125', trailer: 'https://i.ytimg.com/vi/LPFs42UP61Y/maxresdefault.jpg' },
  //   { id: 'C3', name: 'Top Gun Maverick 2022', banner: 'https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg', trailer: 'https://i.ytimg.com/vi/ade7YuZYk6M/maxresdefault.jpg' },
  // ]);

  const [movies, setMovies] = useState([]);
  const [haveid, setHaveid] = useState("");
  const [updatemode, setUpdatemode] = useState(false);
  const [seats, setSeats] = useState([0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0]);

  const [newMovie, setNewMovie] = useState({ hall: '', name: '', banner: '', trailer: '' });

  const handleAddMovieClick = () => {
    setUpdatemode(false)
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleAddMovie = () => {
    setMovies(prevMovies => [...prevMovies, { ...newMovie, id: `C${prevMovies.length + 1}` }]);
    setNewMovie({ hall: '', name: '', banner: '', trailer: '' });
    setIsDialogOpen(false);
    addData()
  };

  async function deletedata(_id){
    try {
        await axios.post('/delete', {_id});
        console.log("data deleted" + _id)
        getData()
    } catch (error) {
        console.log("data not deleted "+error)
    }
}

  async function getData(){
    try {
        axios.get('/test').then(({data}) => {
          setMovies(data)
            // console.log(data)
            
        }) 
        // alert("data recieved")
        console.log("data recieved")
        
    } catch (e) {
        alert("data not recieved"+ e)
    }
    console.log(movies);
}

useEffect(() => {
        getData()
    },[])

  async function addData() {
    try {
        await axios.post('/test', {Hall: newMovie.hall, Name: newMovie.name , Poster: newMovie.banner, Trailer: newMovie.trailer, Seats: seats});
        console.log("data successfully added")
        getData()
    }catch(error){
        alert("data not added"+error)
    }
}


async function rs(h){
  try {
      await axios.post('/reset', {Hall: h, Seats: seats});
      console.log("Seats are reseted" + h)
      getData()
  } catch (error) {
      console.log("Seats are not reseted "+error)
  }
}

const up = (_id, hall, name, banner, trailer) => {
  setNewMovie({ hall: hall, name: name, banner: banner, trailer: trailer })
  setHaveid(_id)
  setUpdatemode(true);
  setIsDialogOpen(true);
}

async function updatedata(id, hall, name, banner, trailer) {
  try {
      await axios.post('/update', {_id: id, Hall: hall, Name: name , Poster: banner, Trailer: trailer});
      console.log("data updated")
      getData()
      setIsDialogOpen(false);
      setNewMovie({});
  } catch (error) {
      console.log("data not upated "+error)
  }
}

  return (
    <div className="movie-list-container">
      <h2>Movies List</h2>
      <button className="add-movie-button" onClick={handleAddMovieClick}>Add New Movie</button>
      
      <table className="movie-table">
        <thead>
          <tr>
            <th>H.No.</th>
            <th>Movie Name</th>
            <th>Movie Banner</th>
            <th>Trailer</th>
            <th>Delete</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.Hall}</td>
              <td>{movie.Name}</td>
              <td><img src={movie.Poster} alt={`${movie.Name} Banner`} /></td>
              <td><img src={movie.Trailer} alt={`${movie.Name} Trailer`} /></td>
              <td><button className="delete-button" onClick={() => deletedata(movie._id)}>Delete</button></td>
              <td><button className="edit-button" onClick={() => up(movie._id, movie.Hall, movie.Name, movie.Poster, movie.Trailer)}>Edit</button></td>
              <td><button className="reset-seats" onClick={() => rs(movie.Hall)}>Reset</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Add New Movie</h3>
            <label>
              Hall Number:
              <input type="text" name="hall" value={newMovie.hall} onChange={handleInputChange} />
            </label>
            <label>
              Movie Name:
              <input type="text" name="name" value={newMovie.name} onChange={handleInputChange} />
            </label>
            <label>
              Movie Banner: (url)
              <input type="text" name="banner" value={newMovie.banner} onChange={handleInputChange} />
            </label>
            <label>
              Trailer: (url)
              <input type="text" name="trailer" value={newMovie.trailer} onChange={handleInputChange} />
            </label>
            <button className="done-button" onClick={updatemode ? () => updatedata(haveid, newMovie.hall, newMovie.name, newMovie.banner, newMovie.trailer) : handleAddMovie}>Done</button>
            <button className="cancel-button" onClick={handleDialogClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
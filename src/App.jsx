import { useState } from "react"
import Header from './components/Header.jsx'
import CityFrom from './components/CityForm.jsx'
import axios from "axios";
import Footer from './components/Footer.jsx'
import Map from './components/Map.jsx'
import Weather from './components/Weather.jsx'
import './CssReset.css'
import './App.css'
import Movie from "./components/Movie.jsx";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = import.meta.env.VITE_API_KEY;
const BACKEND = import.meta.env.VITE_SERVER_KEY;
const LOCAL = import.meta.env.VITE_LOCAL;

function App() {

  const [City, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState('');
  const [date, setDate] = useState('');
  const [dayOne, setDayOne] = useState('');
  const [dayTwo, setDayTwo] = useState('');
  const [dayThree, setDayThree] = useState('');
  const [movieData, setMovieData] = useState('');

  function changeCity(newCity) {
    getLocation(newCity)
    setCity(newCity)
  }

  async function getLocation(cityName) {

    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    getBackendMovie(cityName);
    try {
      let response = await axios.get(url);
      setCity(response.data[0].display_name)
      setLatitude(response.data[0].lat)
      setLongitude(response.data[0].lon)
      getBackendWeather(response.data[0].lat, response.data[0].lon)
      console.log(response.data[0].display_name)

    } catch (error) {
      alert("getLocation didn't work")
    }
  }
  async function getBackendMovie(city) {
    try {
      let responseMovie = await axios.get(`${LOCAL}/movie`, {
        params: {
          'city': city
        }
      })
      console.log(responseMovie.data.movies)
      setMovieData(responseMovie.data.movies)

    }catch{
      console.log('movie API call not working')
    }
  }
  async function getBackendWeather(latitude, longitude) {
      try {
        let response = await axios.get(`${LOCAL}/weather`, {
          params: {
            "latitude": latitude,
            "longitude": longitude
          }
        })
        setDayOne(response.data.weather[0])
        console.log(dayOne)
        setDayTwo(response.data.weather[1])
        setDayThree(response.data.weather[2])
        console.log(response)
        console.log(dayOne)
      } catch {
        console.log('getBackend didnt work!')
      }
    }
    console.log(dayOne)

    return (
      <>
        <Header />
        <CityFrom changeCity={changeCity} />
        <Map latitude={latitude} longitude={longitude} City={City} />
        {dayOne && <Weather dayOne={dayOne} dayTwo={dayTwo} dayThree={dayThree} />}
        {movieData && <Movie movieData= {movieData}/>}
        <Footer />
      </>
    )
  }
  export default App

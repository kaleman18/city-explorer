import {useState} from "react"
// import Header from './components/Header.jsx'
import CityFrom from './components/CityForm.jsx'
import axios from "axios";
// import Footer from './components/Footer.jsx'
import Map from './components/Map.jsx'

const API_KEY = import.meta.env.VITE_API_KEY;
function App () {

  const [City, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  function changeCity(newCity){
    getLocation(newCity)
    setCity(newCity)
  }

  async function getLocation(cityName){

    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      setCity(response.data[0].display_name)
      setLatitude(response.data[0].lat)
      setLongitude(response.data[0].lon)
    } catch(error){
      console.log(error.message)
    }
  }


  return(
    <>
      {/* <Header /> */}
      <CityFrom changeCity = {changeCity}/>
      <Map latitude = {latitude} longitude = {longitude} City = {City}/>
      {/* <Footer/> */}
    </>
  )



}




export default App


import React from 'react'
import { GoogleMap,Marker,InfoWindow,useLoadScript, useJsApiLoader } from '@react-google-maps/api';
import mapstyles from './mapstyles';
import './searchstyles.css'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
  
};

const center = {
  lat: 25.9995, 
  lng: 84.6534
};
const options ={
  styles: mapstyles,
  disableDefaultUI:true
}
const libraries = ["places"];

 function Maps() {

const  {isLoaded,loadError} = useLoadScript({
  Maps_API:"AIzaSyBdKrl2lCUjgKVAM51-vw_UwmbPfLCGozw",
  Places_API:"AIzaSyBIaD2brVQ6zA_lKuq5A1-oK6Ciash7AIw",
  libraries,


})
const mapRef = React.useRef();
const onMapLoad = React.useCallback((map) => {
  mapRef.current = map;
}, []);



if(loadError) return "error loading";
return(
 <div>
   
  <GoogleMap mapContainerStyle = {mapContainerStyle}
  center={center}
       zoom={10}
       options = {options}   
       onload = {onMapLoad}
    > 
     </GoogleMap>
</div>
)
}
function Search()
{
  //value is for what user is typing
  //suggestion is what it provides

  const {ready,value,suggestions:{status,data},setValue,clearSuggestions} = usePlacesAutocomplete({
    //to serach places nearby
    requestOptions:{
      location:{lat:()=> 25.9995, 
  lng:()=> 84.6534}
    },
    radius:200* 1000
  });
  return (
    <div className = "search">
  <Combobox onSelect={
    (address)=>{
      console.log(address)
    }

  }>
  <ComboboxInput value= {value} onChange = {(e)=>{
     setValue(e.target.value)
  }}
  disabled={!ready}
  placeholder = "Enter address"
  />
  <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
  </Combobox>
  </div>
  )
}
export default React.memo(Maps);

//'AIzaSyBdKrl2lCUjgKVAM51-vw_UwmbPfLCGozw' - Javascript maps api
//AIzaSyBIaD2brVQ6zA_lKuq5A1-oK6Ciash7AIw - Places api
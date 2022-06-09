import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class PIMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 36.593502, lng: -94.831101 }}
            >
              <Marker
                position={{ lat: 36.593502, lng: -94.831101 }}
              >
                <InfoWindow>
                  <div className="google-title">4980 Clubhouse Rd, Grove, OK 74344</div>
                </InfoWindow>
                </Marker>
            </GoogleMap>
          ));
          
        return(
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDH1gmInWAU-tcTIcexR8Vnt0pNOA-H1Co"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: `20px`, boxShadow:  '4px 2px 5px black', width: `500px` }} />}
/>
        )
    }
    
}
 
export default PIMap;
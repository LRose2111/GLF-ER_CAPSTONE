import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class NeoshoMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              zoom={12}
              defaultCenter={{ lat: 36.847195, lng: -94.395176 }}
            >
              <Marker
                position={{ lat: 36.847195, lng: -94.395176 }}
              >
                <InfoWindow>
                  <div className="google-title">1850 Clubhouse Rd, Neosho, MO 64850</div>
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
 
export default NeoshoMap;
import React from "react";
import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class ElkRiverMap extends React.Component {

    render(){

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: 36.553117, lng: -94.502221 }}
            >
              <Marker
                position={{  lat: 36.553117, lng: -94.502221 }}
              >
                <InfoWindow>
                  <div className="google-title">100 State Hwy 90, Noel, MO 64854</div>
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
 
export default ElkRiverMap;
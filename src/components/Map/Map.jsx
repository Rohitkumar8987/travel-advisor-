import React from "react";
import googleMapReact from "google-map-react";
import { Paper,Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import  Rating  from "@material-ui/lab";
import {MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import useStyles from './styles'


const Map = ({setCoordinates, setBounds }) => {
    const classes=useStyles();
    const isMobile= useMediaQuery('(min-width:600px)')

    const coordinates={lat: 0, lng:0}
    const position = [51.505, -0.09]
    const center = [10.771278605629783, 106.69012489341263];

    return (
       <>
        <MapContainer center={center}
            zoom={10}
            style={{width:'100vw', height:'100vh'}}
            onChange={(e)=> {
                console.log(e)
                setCoordinates({lat: e.center.lat, lng: e.center.lng});
                setBounds({ne: e.margiBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={''}
            >
           <TileLayer
           url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Lns9nlT6DUQKS2MGALFp">
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           </TileLayer>
        </MapContainer>
       </>
    )
}

export default Map;
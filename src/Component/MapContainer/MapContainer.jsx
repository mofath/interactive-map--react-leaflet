import React, {useState} from 'react';
import "leaflet/dist/leaflet.css";
import { Map, GeoJSON } from 'react-leaflet';
import countries from '../../data/countries.json';
import './MapContainer.css';

const MapContainer = () => {
    const [Color, setColor] = useState("red");

    const colors = ["blue ", "green", "red", "orange", "violet", "indigo", "yellow ", "gray", "pink"];

    const countryStyle = {
        // fillColor: "red",
        fillOpacity: 0.5,
        color: "black",
        weight: "2"
    }

    const onEachCountry = (country, layer) => {

        const countryName = country.properties.ADMIN;
        layer.bindPopup(countryName);

        // const colorIndex = Math.floor(Math.random() * colors.length);
        // layer.options.fillColor = colors[colorIndex];
        layer.options.fillOpacity = Math.random();

        layer.on({
            mouseover: (event) => {
                event.target.setStyle({
                    // fillColor: "orange",
                })
            },
            click: (event) => {
                alert(Color);
                event.target.setStyle({
                    fillColor: Color
                })
            }
        })
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Map</h1>
            <Map
                style={{ height: "80vh" }}
                center={[20, 100]}
                zoom={2}
            >
                <GeoJSON
                    style={countryStyle}
                    data={countries}
                    onEachFeature={onEachCountry}
                />
            </Map>
            <input 
                type="color"
                value={Color}
                onChange={(evt) => {
                    setColor(evt.target.value);
                }}
            />
        </div>
    )
}

export default MapContainer;
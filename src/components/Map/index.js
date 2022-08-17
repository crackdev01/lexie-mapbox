import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../../config';
import { displayMarkers } from '../../utils/displayMarkers';
const URL = process.env.REACT_APP_API_URL || config.DEFAULT_URL;

mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;

export default function Map() {
    const markers = [];
    const [lng, setLng] = useState(config.DEFAULT_LNG);
    const [lat, setLat] = useState(config.DEFAULT_LAT);
    const [zoom, setZoom] = useState(config.DEFAULT_ZOOM);
    const [bounds, setBounds] = useState([]);
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom,
        });
        setBounds([map.current.getBounds()]);
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(config.COORDINATE_DECIMAL_PLACES));
            setLat(map.current.getCenter().lat.toFixed(config.COORDINATE_DECIMAL_PLACES));
            setZoom(map.current.getZoom().toFixed(config.ZOOM_DECIMAL_PLACES));
            setBounds([map.current.getBounds()]);
        });
    });

    const requestCoordinates = () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bounds),
            };

            fetch(URL, requestOptions)
                .then(response => response.json())
                .then(data => displayMarkers(map.current, data, markers));
        } catch (error) {
            console.log('error fetching data', error);
        }
    }

    return (
        <div>
            <div className="sidebar">
                <div className="label">Longitude: {lng}</div>
                <div className="label">Latitude: {lat}</div>
                <div className="label">Zoom: {zoom}</div>
                <button id='display_button' className='display_button' onClick={requestCoordinates}>Display Coordinates</button>
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
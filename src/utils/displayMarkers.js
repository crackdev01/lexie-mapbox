import mapboxgl from 'mapbox-gl';
import { IconMarker } from '../components/icons';
import { clearMarkers } from './clearMarkers';

export function displayMarkers(map, coordinates, markers) {
  markers = clearMarkers(markers);
  Object.keys(coordinates).forEach(coordinate => {
    const marker = new mapboxgl.Marker(<IconMarker />)
      .setLngLat(coordinates[coordinate])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            `<h3>Lng Lat <br></h3>
            <p>${coordinates[coordinate]['lng']} |
            ${coordinates[coordinate]['lat']}</p>`
          )
      )
      .addTo(map);
    markers.push(marker);
  });
}; 
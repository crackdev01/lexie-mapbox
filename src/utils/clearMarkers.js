export function clearMarkers(markers) {
  for (let i = markers.length - 1; i >= 0; i--) {
    markers[i].remove();
    markers.pop();
  }
  return markers;
}
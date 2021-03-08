
/** Declare a function to create a map - original code https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript with modifications for project */

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 53.349804, lng: -6.260310 },
    });

    /**  Create an array of alphabetical characters used to label the markers.*/
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /** Add markers to the map.*/
    const markers = locations.map((location, i) => {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
    });
    });
    /** Add a marker clusterer to manage the markers.*/
    new MarkerClusterer(map, markers, {
    imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
    /** Add marker locations */
    let locations = [
        { lat: 53.2951569, lng: -6.1384571 },
        { lat: 53.3925976, lng: -6.068269 },
        { lat: 53.291892, lng: -6.1350469 },
        { lat: 53.2941696, lng: -6.133857 },
];

google.maps.event.addListener(markers, "click", function() {})
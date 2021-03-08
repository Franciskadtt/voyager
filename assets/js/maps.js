
/** Declare a function to create a map - original code https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript with modifications for project */
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 53.349804,
            lng: -6.260310
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 53.721160, lng: -4.139210},
        { lat: 53.283400, lng: -6.120070},
        { lat: 53.344100, lng: -6.267490},
        { lat: 53.2941696, lng: -6.133857},
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
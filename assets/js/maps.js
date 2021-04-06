
// Function display and hide store info if click on marker
function displayMarkerInfo(){
    /** add class to hide all elements with store class - orginal code with modification from: https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript */
    var elems = document.querySelectorAll(".store");
    [].forEach.call(elems, function(el) {
        el.classList.add("hide");
    });
    // Remove class to display element
    document.getElementById(this.storeId).classList.remove('hide');
}

/** Declare a function to create a map - initMap function original code https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript with modifications for project */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 53.349804, lng: -6.260310 },
    });

    //Add marker locations and storeIds
    var markerList = [
        {'location': { lat: 53.2951569, lng: -6.1384571 }, 'storeId': 'downersails'},
        {'location': { lat: 53.3925976, lng: -6.068269 }, 'storeId': 'marinesuppliers'},
        {'location': { lat: 53.291892, lng: -6.1350469 }, 'storeId': 'trespass'},
        {'location': { lat: 53.2941696, lng: -6.133857 }, 'storeId': 'vikingmarine'},
    ];

    // Add markers to the map and link to position and storeId
    var markers = markerList.map((marker, i) => {
        newMarker= new google.maps.Marker({
            position: marker.location,
            storeId: marker.storeId
            
        });
        // when marker clicked then display info
        newMarker.addListener("click", displayMarkerInfo);
        return newMarker;
    });

    /** New MarkerClusterer - initMap function original code https://developers.google.com/maps/documentation/javascript/marker-clustering */
    // Add a marker clusterer to manage the markers
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
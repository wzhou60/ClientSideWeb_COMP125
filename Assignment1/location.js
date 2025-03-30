function initMap() {
  let displayMap = document.getElementById("displayMap");
  let routeBox = document.getElementById("routeBox");

  // Create a map to the restaurant
  let mcRonalds = { lat: 43.77625867627779, lng: -79.25811114811974 };

  let myMap = new google.maps.Map(displayMap, {
    zoom: 11,
    center: mcRonalds,
    fullscreenControl: false,
  });

  new google.maps.Marker({
    position: mcRonalds,
    map: myMap,
    title: "McRonalds",
  });

  // Get the device's current position
  navigator.geolocation.getCurrentPosition(getPos);
  //handleError();

  function getPos(pos) {
    let myPosition = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    };
    console.log(myPosition);

    let routeFind = new google.maps.DirectionsService();
    let routeDraw = new google.maps.DirectionsRenderer();

    // Drive from current location to restaurant
    let myRoute = {
      origin: myPosition,
      destination: mcRonalds,
      travelMode: "DRIVING",
    };

    // Generate directions for the route
    routeFind.route(myRoute, function (result, status) {
      if (status == "OK") {
        routeDraw.setDirections(result);
        // Display route and directions
        routeDraw.setMap(myMap);
        routeDraw.setPanel(routeBox);
      } else {
        routeBox.textContent = "Directions Unavailable: " + status;
      }
    });

    // In case of geolocation error
    function handleError(err) {
      console.log("Geolocation error: " + err.message);
    }
  }
}

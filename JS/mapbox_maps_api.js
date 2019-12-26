"use strict";
  mapboxgl.accessToken = mapboxtoken;
// var map = new mapboxgl.Map({
//       container: 'map',
//      style: 'mapbox://styles/mapbox/light-v10',
//      zoom: 10,
//    center: [-98.4916, 29.4252]
//  });


var map = new mapboxgl.Map (mapOptions);

geocode("The Alamo, San Antonio TX, 78205",mapboxtoken).then(function(result){
    map.setCenter(result)
    map.setZoom(20)
})
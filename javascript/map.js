

function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(20.7679, 79.8718),
    zoom:4.6,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:[
    {"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},
    {"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"on"}]},
    {"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"lightness":"-3"}]},
    {"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},
    {"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"saturation":"43"},{"lightness":"100"}]},
    {"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},
    {"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"saturation":"70"},{"lightness":"100"},{"gamma":"8.32"}]},
    {"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"lightness":"47"}]},
    {"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},
    {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},
    {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},
    {"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},
    {"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},
    {"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},
    {"featureType":"transit.station","elementType":"labels","stylers":[{"visibility":"off"}]},
    {"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//map.data.loadGeoJson('map.geojson')
//var chart = new google.visualization.GeoChart(document.getElementById('map'));
var marker = new google.maps.Marker({
         position: {lat:20.7679, lng:79.8718},
         //map: map,
         title: 'Click to zoom'
       });
map.addListener('center_changed', function() {
          window.setTimeout(function() {
           map.setZoom(4.8);
           map.panTo(marker.getPosition());
         }, 8000);
        });

        var lineSymbol = {
           path: 'M 0,-1 0,1',
           strokeColor: '#2d2db9',
           strokeOpacity: 1,
           scale: 3
         };


         var line = new google.maps.Polyline({
          path: [{lat: 13.067439, lng: 80.237617},
            {lat: 12.972442, lng: 76.580643},
            ],
          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
              }],
          map: map
        });

        animateCircle(line);

        var line = new google.maps.Polyline({
          path:[{lat: 17.3850, lng: 78.4867},
          {lat:28.644800, lng: 77.580643}] ,

          strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
              }],
          map: map
        });

        animateCircle(line);

        var citymap = {
                chennai: {
                  center: {lat: 13.067439, lng: 80.237617},
                  radius: 380
                },
                bangalore: {
                  center: {lat: 12.972442, lng: 76.580643},
                  radius: 400
                },
                hyderabad: {
                  center: {lat: 17.3850, lng: 78.4867},
                  radius: 300
                },
                delhi: {
                  center: {lat: 28.644800, lng: 77.486721},
                  radius: 380
                }
              };

              for (var city in citymap) {
                  var cityCircle = new google.maps.Circle({
                  strokeColor: '#EC7063',
                  strokeOpacity: 1,
                  strokeWeight: 10,
                  fillColor: '#EC7063',
                  fillOpacity: 2,
                  map: map,
                  center: citymap[city].center,
                  radius: (citymap[city].radius) * 100
                });
              }

            infoWindow = new google.maps.InfoWindow;

      /* //Current location Finding code program
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map); */

          map.data.loadGeoJson('countries-hires.geojson');
          map.data.loadGeoJson('indian-states.geojson')

          map.data.setStyle(function(feature) {
          var color = '#B0B0B0';
          if (feature.getProperty('isColorful')) {
            color = feature.getProperty('color');
          }
          return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: 'white',
            strokeColor: color,
            strokeWeight: 1
          });
        });

        // When the user clicks, set 'isColorful', changing the color of the letters.
        map.data.addListener('click', function(event) {
          var location = {};
          location.lat = event.latLng.lat();
          location.lng = event.latLng.lng();
          console.log("location", location);
          //event.feature.setProperty('isColorful', true);
        });

        // When the user hovers, tempt them to click by outlining the letters.
        // Call revertStyle() to remove all overrides. This will use the style rules
        // defined in the function passed to setStyle()
        map.data.addListener('mouseover', function(event) {
          map.data.revertStyle();
          map.data.overrideStyle(event.feature, {strokeWeight: 2.4});
        });

        map.data.addListener('mouseout', function(event) {
          map.data.revertStyle();
        });




} // closing of the function myMap
function animateCircle(line) {
         var count = 0;
         window.setInterval(function() {
           count = (count + 1) % 200;

           var icons = line.get('icons');
           icons[0].offset = (count / 2) + '%';
           line.set('icons', icons);
       }, 20);
     }

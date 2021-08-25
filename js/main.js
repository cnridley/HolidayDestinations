$(document).ready(function(){
    $(document).on("click", "#question-1-btn", function(){
        $('#question1').hide();
        $('#question2').removeAttr("hidden");
        if ($('input[value=hot]').is(":checked")){
            hotMap();
            $("#city").attr("value", "hot-city")
            $("#beach").attr("value", "hot-beach")
        } else {
            coldMap();
            $("#city").attr("value", "cold-city")
            $("#beach").attr("value", "cold-beach")
            $('#beachHolidays').html("Mountains");
        }
    })

    $(document).on("click", "#question-2-btn", function(){
        $('#question2').hide();
        $('#question3').removeAttr("hidden");
        if ($('input[value=hot-city]').is(":checked")){
            hotCityMap();
            $("#culture").attr("value", "hot-city-culture")
            $("#activities").attr("value", "hot-city-activities")
        } else if ($('input[value=cold-city]').is(":checked")){
            coldCityMap();
            $("#culture").attr("value", "cold-city-culture")
            $("#activities").attr("value", "cold-city-activities")
        } else if ($('input[value=hot-beach]').is(":checked")){
            hotBeachMap();
            $("#culture").attr("value", "hot-beach-culture")
            $("#activities").attr("value", "hot-beach-activities")
        } else if ($('input[value=cold-beach]').is(":checked")){
            coldBeachMap();
            $("#culture").attr("value", "cold-beach-culture")
            $("#activities").attr("value", "cold-beach-activities")
        } 
    })

    $(document).on("click", "#question-3-btn", function(){
        setTimeout(function(){
            $('#question3').hide();
        $('#restart-quiz').removeAttr("hidden");
        if ($('input[value=hot-city-culture]').is(":checked")){
            hotCityCultureMap();
        } else if ($('input[value=hot-city-activities]').is(":checked")){
            hotCityActivitiesMap();
        } else if ($('input[value=hot-beach-culture]').is(":checked")){
            hotBeachCulturesMap();
        } else if ($('input[value=hot-beach-activities]').is(":checked")){
            hotBeachActivitiesMap();
        } else if ($('input[value=cold-beach-activities]').is(":checked")){
            coldBeachActivitiesMap();
        } else if ($('input[value=cold-beach-culture]').is(":checked")){
            coldBeachCultureMap();
        } else if ($('input[value=cold-city-activities]').is(":checked")){
            coldCityActivitiesMap();
        } else if ($('input[value=cold-city-culture]').is(":checked")){
            coldCityCultureMap();
        } 
        }, 2000);
        
    })

    $(document).on("click", "#restart-buttton", function(){
        setTimeout(function(){
            location.reload();
        }, 1000);

    })
   
    $(document).on("click", "#hot", function(){
        $('#hot').attr('checked', 'checked');
    })

    $(document).on("click", "#city", function(){
        $('#city').attr('checked', 'checked');
    })

    $(document).on("click", "#beach", function(){
        $('#beach').attr('checked', 'checked');
    })

    $(document).on("click", "#culture", function(){
        $('#culture').attr('checked', 'checked');
    })

    $(document).on("click", "#activities", function(){
        $('#activities').attr('checked', 'checked');
    })

})


// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

// HOT COUNTRIES:
// aus: { lat: -25.274399, lng: 133.775131 };
// paris: { lat: 48.856613, lng: 2.352222 };
// SEA: { lat: 15.870032, lng: 100.992538 };
// Barcelona:  { lat: 41.385063, lng: 2.173404 };

// COLD COUNTRIES:
// rockies: { lat: 53.933270, lng: -116.576508 };
// london: { lat: 51.509597, lng: -0.133199 };
// Japan: { lat: 36.221011, lng: 138.253337 };
// Alaska: { lat: 64.211755, lng: -149.493703 };

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: { lat: -28.024, lng: 140.887 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [
  { lat: -25.274399, lng: 133.775131 },
  { lat: 48.856613, lng: 2.352222 },
  { lat: 15.870032, lng: 100.992538 },
  { lat: 41.385063, lng: 2.173404 },
  { lat: 53.933270, lng: -116.576508 },
  { lat: 51.509597, lng: -0.133199 },
  { lat: 36.221011, lng: 138.253337 },
  { lat: 64.211755, lng: -149.493703 },
    
  ];
  
  // if hot is clicked. 
  function hotMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: { lat: -28.024, lng: 140.887 },
      });
      // Create an array of alphabetical characters used to label the markers.
      const hotLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      const markers = hotLocations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: hotLabels[i % hotLabels.length],
        });
      });
      // Add a marker clusterer to manage the markers.
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}

const hotLocations = [
    { lat: -25.274399, lng: 133.775131 },
    { lat: 48.856613, lng: 2.352222 },
    { lat: 15.870032, lng: 100.992538 },
    { lat: 41.385063, lng: 2.173404 },
      
    ];
  

    // If cold is clicked.
    function coldMap(){
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 1,
            center: { lat: -28.024, lng: 140.887 },
          });
          // Create an array of alphabetical characters used to label the markers.
          const coldLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          // Add some markers to the map.
          // Note: The code uses the JavaScript Array.prototype.map() method to
          // create an array of markers based on a given "locations" array.
          // The map() method here has nothing to do with the Google Maps API.
          const markers = coldLocations.map((location, i) => {
            return new google.maps.Marker({
              position: location,
              label: coldLabels[i % coldLabels.length],
            });
          });
          // Add a marker clusterer to manage the markers.
          new MarkerClusterer(map, markers, {
            imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          });
    }

    const coldLocations = [
        { lat: 53.933270, lng: -116.576508 },
        { lat: 51.509597, lng: -0.133199 },
        { lat: 36.221011, lng: 138.253337 },
        { lat: 64.211755, lng: -149.493703 },
          
        ];
  

// If hot then city is selected. 
 function hotCityMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: { lat: -28.024, lng: 140.887 },
      });
      // Create an array of alphabetical characters used to label the markers.
      const hotCityLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      const markers = hotCityLocations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: hotCityLabels[i % hotCityLabels.length],
        });
      });
      // Add a marker clusterer to manage the markers.
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}

const hotCityLocations = [
    { lat: 48.856613, lng: 2.352222 },
    { lat: 41.385063, lng: 2.173404 },
 
    ];
  

// if cold then city is selected 
function coldCityMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: { lat: -28.024, lng: 140.887 },
      });
      // Create an array of alphabetical characters used to label the markers.
      const coldCityLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      const markers = coldCityLocations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: coldCityLabels[i % coldCityLabels.length],
        });
      });
      // Add a marker clusterer to manage the markers.
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}

const coldCityLocations = [
    { lat: 51.509597, lng: -0.133199 },
    { lat: 64.211755, lng: -149.493703 },
      
    ];

  
// if hot the beach is clicked 
function hotBeachMap(){
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 1,
            center: { lat: -28.024, lng: 140.887 },
          });
          // Create an array of alphabetical characters used to label the markers.
          const hotBeachLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          // Add some markers to the map.
          // Note: The code uses the JavaScript Array.prototype.map() method to
          // create an array of markers based on a given "locations" array.
          // The map() method here has nothing to do with the Google Maps API.
          const markers = hotBeachLocations.map((location, i) => {
            return new google.maps.Marker({
              position: location,
              label: hotBeachLabels[i % hotBeachLabels.length],
            });
          });
          // Add a marker clusterer to manage the markers.
          new MarkerClusterer(map, markers, {
            imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          });
    }
    const hotBeachLocations = [
        { lat: -25.274399, lng: 133.775131 },
        { lat: 15.870032, lng: 100.992538 },
        ];


//if cold then beach is clicked
function coldBeachMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: { lat: -28.024, lng: 140.887 },
      });
      // Create an array of alphabetical characters used to label the markers.
      const coldBeachLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      const markers = coldBeachLocations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: coldBeachLabels[i % coldBeachLabels.length],
        });
      });
      // Add a marker clusterer to manage the markers.
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}
const coldBeachLocations = [
{ lat: 53.933270, lng: -116.576508 },
{ lat: 36.221011, lng: 138.253337 },
    ];


// if hot - beach - culture is clicked
function hotBeachCulturesMap() {
    const SEA = { lat: 15.870032, lng: 100.992538 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: SEA,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: SEA,
    map: map,
  });

  $('.location').html("SOUTH EAST ASIA!")
}

//if hot - beach - activity is clicked 
function hotBeachActivitiesMap(){
    const aus = { lat: -25.274399, lng: 133.775131 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: aus,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: aus,
    map: map,
  });

  $('.location').html("AUSTRALIA!")
}

// if hot - ciy - culture is clicked
function hotCityCultureMap() {
    const paris = { lat: 48.856613, lng: 2.352222 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: paris,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: paris,
    map: map,
  });

  $('.location').html("PARIS!")
}

// if hot - ciy - activity is clicked
function hotCityActivitiesMap() {
    const Barcelona = { lat: 41.385063, lng: 2.173404 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Barcelona,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Barcelona,
    map: map,
  });

  $('.location').html("BARCELONA!")
}

//if cold - city - culture
function coldCityCultureMap() {
    const london = { lat: 51.509597, lng: -0.133199 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: london,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: london,
    map: map,
  });

  $('.location').html("LONDON!")
}
//if cold - city - activities
function coldCityActivitiesMap() {
    const Alaska = { lat: 64.211755, lng: -149.493703 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Alaska,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Alaska,
    map: map,
  });

  $('.location').html("ALASKA")
}

// if cold- beach - culture 
function coldBeachCultureMap() {
    const Japan = { lat: 36.221011, lng: 138.253337 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Japan,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Japan,
    map: map,
  });

  $('.location').html("JAPAN!")
}
// if cold - beach - activities 
function coldBeachActivitiesMap() {
    const rockies = { lat: 53.933270, lng: -116.576508 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: rockies,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: rockies,
    map: map,
  });

  $('.location').html("THE ROCKIES!")
}


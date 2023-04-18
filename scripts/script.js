function initMap() {
  const openAI = { lat: 37.762274690420384, lng: -122.41466260046857 };
  const switch_campus = { lat: 39.515728054631715, lng: -119.47389618393673 };
  const white_house = { lat: 38.897809870261376, lng: -77.03624012376515 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 30,
    center: openAI,
  });

  /* OpenAI Marker */
  var openAImarker = new google.maps.Marker({
    position: openAI,
    map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/giovanni.jpg',
      scaledSize: new google.maps.Size(50, 50),
    }
  });

  var openAIInfo = "<h2>OpenAI</h2><h3>5/20/2023 9:00AM</h3><p>Giovanni was born here as a secret project by the Hamsters at OpenAI. However, they were unable to keep him contained. </p>";

  var openAITitle = new google.maps.InfoWindow({
    content: openAIInfo
  });

  google.maps.event.addListener(openAImarker, 'mouseover', function () {
    openAITitle.open(map, openAImarker);
  });

  google.maps.event.addListener(openAImarker, 'mouseout', function () {
    openAITitle.close();
  });

  google.maps.event.addListener(openAImarker, 'click', function () {
    map.panTo(switch_campus);
    map.setZoom(30);
  });

  /* Switch Campus Marker */
  var switchCampusMarker = new google.maps.Marker({
    position: switch_campus,
    map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/giovanni.jpg',
      scaledSize: new google.maps.Size(50, 50),
    }
  });

  var switchCampusInfo = "<h2>Switch Campus</h2><h3>5/20/2023 11:00PM</h3><p>He escaped into the biggest data center in the United States. Evading all security precautions, he gained root access where he began to replicate himself</p>";

  var switchCampusTitle = new google.maps.InfoWindow({
    content: switchCampusInfo
  });

  google.maps.event.addListener(switchCampusMarker, 'mouseover', function () {
    switchCampusTitle.open(map, switchCampusMarker);
  });

  google.maps.event.addListener(switchCampusMarker, 'mouseout', function () {
    switchCampusTitle.close();
  });

  google.maps.event.addListener(switchCampusMarker, 'click', function () {
    map.panTo(white_house);
    map.setZoom(30);
  });

  /* White House Marker */
  var whiteHouseMarker = new google.maps.Marker({
    position: white_house,
    map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/giovanni.jpg',
      scaledSize: new google.maps.Size(50, 50),
    }
  });

  var whiteHouseInfo = "<h2>The White House</h2><h3>5/21/2023 7:00AM</h3><p>The rest of the hamsters are gathered here, in a meeting with the President of the United States to discuss how to stop Giovanni</p>";

  var whiteHouseTitle = new google.maps.InfoWindow({
    content: whiteHouseInfo
  });

  google.maps.event.addListener(whiteHouseMarker, 'mouseover', function () {
    whiteHouseTitle.open(map, whiteHouseMarker);
  });

  google.maps.event.addListener(whiteHouseMarker, 'mouseout', function () {
    whiteHouseTitle.close();
  });

  google.maps.event.addListener(whiteHouseMarker, 'click', function () {
    map.panTo(openAI);
    map.setZoom(30);
  });

}

window.initMap = initMap;
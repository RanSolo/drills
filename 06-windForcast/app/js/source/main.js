(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#getWeather').click(getWeather);
  }

  function getWeather(){
    var url='http://api.wunderground.com/api/033d58a77ad08c5b/conditions/q/CA/San_Francisco.json?callback=?'
    $.getJSON(url,receive);
  }


  function receive(data){
    var description = data.current_observation_wind_string;
    var direction = data.current_observation_wind_dir;
    var degrees = data.current_observation_wind_degrees;
    var speed = data.current_observation_wind_mph;
    var gust = data.current_observation_wind_gust_mph;
    var wind = [description, direction, degrees, speed, gust]
      $('h2').text(descrption);
  }

  function receive(data){
    for (i = 0; i < wind; i++){

      $('h2').text(direction);
  }
})();

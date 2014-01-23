(function(){

  'use strict';

  $(document).ready(initialize);
 
  function initialize(){
  
    $('#addZipOpt').click(addZipOpt);
    $('#selectZip').click.on(getForecast);
  }

  function addZipOpt(){
    var $zip = $('#inputZip').val();
    var $opt =  $('<option>');
    $opt.text($zip);
    $opt.val($zip);
    $('#selectZip').append($opt);

  }
  function getForecast(){
    var zipCode = $('#selectZip').val();
    var url = 'http://api.wunderground.com/api/033d58a77ad08c5b/forecast/q/'+ zipCode+ '.json?callback=?';
    $.getJSON(url, receive);
  }
  function receive(data){
    console.log(data);
  }



})();

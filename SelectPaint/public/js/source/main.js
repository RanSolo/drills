(function(){

  'use strict';

  $(document).ready(initialize);
 
  function initialize(){
  
    $('#button').click(addColorOption);
    $('#sb').change(paintDiv);
  }

  function addColorOption(){
    var color = $('#userInput').val();
    var $opt =  $('<option>');
    $opt.val(color.toLowerCase());
    $opt.text(color.toUpperCase());
    $('color').append($opt);
  }
  function paintDiv(){
    var color = $('#sb').val();
    $('#paint').css('background-color', color);
  }




})();

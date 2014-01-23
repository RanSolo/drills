(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-color').click(clickAddColor);
    $('#colors').on('click', '.color', clickSelectColor);

  }
  function clickSelectColor(){
    alert('hey');
  }
  
  function clickAddColor(){
    var colorText = $('#color').val();
    $('#color').val('');
    $('#color').focus();
    
    var $box = $('<div>');
    $box.addClass('color');
    $box.css('background-color', colorText);
    $('#color').prepend($box);
  }
  
  




})();

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-color').click(clickAddColor);
    $('#colors').on('click', '.color', clickSelectColor);

  }
  function clickSelectColor(){
    if($(this).hasClass('selected')){
    } else {
      $('color').removeClass('seleced');
      $(this).addCLass('selected');
    }
  }
  
  function clickAddColor(){
    var color = $('#color-text').val();
    $('#color-text').val('');
    $('#color-text').focus();
    
    var $box = $('<div>');
    $box.addClass('color');
    $box.css('background-color', colorText);
    $('#colors').prepend($box);
  }




})();

(function(){
    'use strict';

    function clickAddColor(){
      var colorText = $('#color').val();
      $('#color').val('');
      $('#color').focus();

      var $box = $('<div>');
      $box.addClass('color');
      $box.css('background-color', colorText);
      $('#colors').prepend($box);
    }

    function initialize(){
      $('#add-color').click(clickAddColor);
    }
    $(document).ready(initialize);
  })();

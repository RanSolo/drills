(function(){

  'use strict';

  $(document).ready(initialize);
  
  function initialize(){
    $('#addOption').click(addToList);
  }
  function addToList(){
    var i = $('option').length;
    var input = $('#colorInput').val();
    var $opt = $('<option>').text(input).val(i);
    $('#selector').append($opt);
    $('#addOption').val('');
    $('#colorInput').focus();
  }

})();

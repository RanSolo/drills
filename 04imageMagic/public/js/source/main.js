(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#button').click(addPhoto);

  }
  function addPhoto(){
    var photo=$('#url').val();
    $('#photobox').append('<img src=' + photo + '>');
    
  }

})();

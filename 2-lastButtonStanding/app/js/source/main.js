function(){

 'use strict';

 $(document).ready(initialize);

 function initialize(){
    $('#on.').click(make2Buttons);
    $('#container').on('click', 'button', dynamicClick);
 }
  
  function make2Buttons(){
    var b2
      var b3 
  var newBox = $('#newbox');
  $(#container').append(b2, b3);
}
  function dynamicClick(){
    switch(this.id){
      case 'two':
        $('#one').detach();
        break;
      case 'three':
        $('two').detach();
    }
  }

})();

(function(context){
  "use strict";

  document.addEventListener('DOMContentLoaded', function(){

    context.elevators = [].slice.call(document.querySelectorAll('.shaft .elevator')).map(function(el, id){
      var e = new Elevator({
	el: el,
	id: id
      });

      e.on('moving', function(event){
	context.onElevatorRequest(e, context.elevators)
      });

      e.on('idle', function(event){
	context.onElevatorIdle(e, context.elevators);
      });

      return e;
    });

    //Object.freeze(elevators);
  });

})(this);
var Project = require('./../js/project.js').projectModule;



$(document).ready(function() {
  $('#bike-form').submit(function(event){
    event.preventDefault();
    var color = $('#color').val();
    var city = $('#city').val();
    var newBike = new Bike(color, city);

    newBike.getBikes();
    
  });
});

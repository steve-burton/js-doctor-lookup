var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var doctor = $('#ailment').val();
    var newDoctor = new Doctor();

    newDoctor.getDoctors();

    $("h5.response").text("<h5>" + newDoctor.doctorName + "</h5>");
  });
});

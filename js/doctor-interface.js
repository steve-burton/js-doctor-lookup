var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    var newDoctor = new Doctor();

    newDoctor.getDoctors();

    $("h5.response").text("<h5>" + newDoctor.doctorList + "</h5>");
  });
});

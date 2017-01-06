var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    var newDoctor = new Doctor(medicalIssue);

    console.log(medicalIssue);
    newDoctor.getDoctors(medicalIssue);

  });
});

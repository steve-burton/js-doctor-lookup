var apiKey = require('./../.env').apiKey;

Doctor = function(medicalIssue) {
  this.doctorMedicalIssue = medicalIssue;
};

Doctor.prototype.getDoctors = function(medicalIssue) {
  var newDoctor = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
      var searchDoctors = (response.data);
      var doctorList = [];
      searchDoctors.forEach(function(doctor) {
        doctorList.push(" " + doctor.profile.first_name + " " + doctor.profile.last_name + "<br>");
      });
      $('h5.response').hide();
      $('h5.response').show();
      $('.result').show();
      $('h5.response').html(doctorList);
    }).fail(function(error){
      $('h5.response').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;

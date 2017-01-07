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
        doctorList.push("<h5>" + doctor.profile.first_name + " " + doctor.profile.last_name + " - " + "<span class='practice'>" + "Practice name: " + doctor.practices[0].name + ", Phone: " + doctor.practices[0].phones[0].number.slice(0, 3) + "-" + doctor.practices[0].phones[0].number.slice(3, 6) + "-" + doctor.practices[0].phones[0].number.slice(6, 10) + " " + doctor.practices[0].phones[0].type + "</span></h5>");
      });
      $('div.response').hide();
      $('div.response').show();
      $('.result').show();
      $('div.response').html(doctorList);
    }).fail(function(error){
      $('div.response').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;

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
        $("h5.response").append(doctor.profile.first_name + " " + doctor.profile.last_name + "<br>");
        $('.result').show();
        // doctorList.push(" " + doctor.profile.first_name + " " + doctor.profile.last_name);
      });

      // $("h5.response").text(doctorList);
    })
    .fail(function(error){
      console.log("fail");
  });
};



exports.doctorModule = Doctor;



// $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

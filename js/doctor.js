var apiKey = require('./../.env').apiKey;

Doctor = function(medicalIssue) {
  this.doctorList = [];
  this.doctorMedicalIssue = medicalIssue;
};
// console.log(medicalIssue);
Doctor.prototype.getDoctors = function(medicalIssue) {
  var newDoctor = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=Toothache&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    var searchDoctors = (response.data.profile);
    console.log(response);
      console.log(searchDoctors);
      searchDoctors.forEach(function(doctor) {
        this.doctorList.push(doctor);
        console.log(this.doctorList);
      })
      .fail(function(error){
      console.log("fail");
    });
  });
};

// Doctor.prototype.getDoctors = function(medicalIssue) {
//   var newDoctor = this;
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=Toothache&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=efe37a8f53f9fc218497c3618bd8dacb')
//    .then(function(result) {
//      result.forEach(function(doctor) {
//        this.doctorList.push(doctor.name);
//      });
//       console.log(newDoctor.doctorList);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };


exports.doctorModule = Doctor;



// $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

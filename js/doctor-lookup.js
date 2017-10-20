var apiKey = require('./../.env').apiKey;

export class DoctorLookup {
  constructor() {
  }

  byLastName(lastName){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=` + lastName + `&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=16dc9d6f9af205b02a71b04cacdc7348`)
    .then(function(response){
      let doctors = response.data[1].profile[0].first_name;
      console.log(doctors);
      doctors.forEach(function(doctor){
        let first_name = doctors.profile.first_name;
        console.log(first_name);
        let last_name = doctor.profile.last_name
        let address = doctor.visit_address.street + doctor.visit_address.city + doctor.visit_address.state;
        let phone_number = doctor.phones.number;
        let website = doctor.practices.website;
        let new_patients = doctor.practices.accepts_new_patients;

        $('#doctorResultsByName').append(`<li><span class="line-header">First Name:</span> ${first_name}<br><span class="line-header">Last Name:</span>  ${last_name}<br> </li><span class="line-header">Address:  ${address}</span><br><span class="line-header">Phone Number: ${phone_number}</span><br><span class="line-header">Website: ${website}</span><br><span class="line-header">Taking new paitients: ${new_patients}<br></li>`);
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }


  byMedicalIssue(medicalIssue){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${`medicalIssue`}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=16dc9d6f9af205b02a71b04cacdc7348`)
    .then(function(response){
      let doctors = response.data;
      console.log(doctors);
      doctors.forEach(function(doctor){
        let address = doctor.visit_address.street + doctor.visit_address.city + doctor.visit_address.state;
        let phone_number = doctor.phones.number;
        let website = doctor.practices.website;
        let new_patients = doctor.practices.accepts_new_patients;
        $('#doctorResultsByIssue').append(`<li><span class="line-header">First Name:</span> ${doctor.profile.first_name}<br><span class="line-header">Last Name:</span>  ${doctor.profile.last_name}<br> </li><span class="line-header">Address:  ${address}</span><br><span class="line-header">Phone Number: ${phone_number}</span><br><span class="line-header">Website: ${website}</span><br><span class="line-header">Taking new paitients: ${new_patients}<br></li>`);
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}

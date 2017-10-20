var apiKey = require('./../.env').apiKey;

export class DoctorLookup {
  constructor() {
  }

  byLastName(lastName){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${lastName}&location=47.185%2C-122.292%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=16dc9d6f9af205b02a71b04cacdc7348`)
    .then(function(response){
      for (var i = 0; i < response.data.length; i++) {
  			$('#doctorResultsByName').append(`<li>Name: ${response.data[i].practices[0].name}<br> Address: ${response.data[i].practices[0].visit_address.city},${response.data[i].practices[0].visit_address.state} <br>Phone Number: ${response.data[i].practices[0].phones[0].number}<br> Website: ${response.data[i].practices[0].website}<br>Accepting New Patients: ${response.data[1].practices[0].accepts_new_patients}</li>`);
		   }
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }

  byMedicalIssue(medicalIssue){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=47.185%2C-122.292%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=16dc9d6f9af205b02a71b04cacdc7348`)
    .then(function(response){
      console.log(response.data.length);
      for (var i = 0; i < response.data.length; i++) {
  			$('#doctorResultsByIssue').append(`<li>Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}<br> Address: ${response.data[i].practices[0].visit_address.city},${response.data[i].practices[0].visit_address.state} <br>Phone Number: ${response.data[i].practices[0].phones[0].number}<br>Accepting New Patients: ${response.data[i].practices[0].accepts_new_patients}<br>Website: ${response.data[i].practices[0].website}</li>`);
		   }
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}

var apiKey = require('./../.env').apiKey;

export class DoctorLookup {
  constructor() {
  }

  byLastName(lastName){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${lastName}&location=47.185%2C-122.292%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=16dc9d6f9af205b02a71b04cacdc7348`)
    .then(function(response){
      if (response.data.length === 0) {
        $('#doctorResultsByIssue').append("There are no doctor's in this area that match with your search.");
      }
      for (var i = 0; i < response.data.length; i++) {
  			$('#doctorResultsByName').append(`<li>
          <span class="bold">Name: </span>${response.data[i].practices[0].name}<br>
          <span class="bold"> Address:</span> ${response.data[i].practices[0].visit_address.city},${response.data[i].practices[0].visit_address.state}<br>
          <span class="bold">Phone Number: </span>${response.data[i].practices[0].phones[0].number}<br>
          <span class="bold">Accepting New Patients:</span> ${response.data[1].practices[0].accepts_new_patients}
          <span class="bold">Website:</span> ${response.data[i].practices[0].website}<br>
          </li>`);
       }
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }

  byMedicalIssue(medicalIssue){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=47.185%2C-122.292%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=16dc9d6f9af205b02a71b04cacdc7348`)
    .then(function(response){
      if (response.data.length === 0) {
        $('#doctorResultsByIssue').append("There are no doctor's in this area that match with your search.");
      }
      for (var i = 0; i < response.data.length; i++) {
  			$('#doctorResultsByIssue').append(`<li>
          <span class="bold">Name: </span>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}<br>
          <span class="bold">Address:</span> ${response.data[i].practices[0].visit_address.city},${response.data[i].practices[0].visit_address.state} <br>
          <span class="bold">Phone Number: </span>${response.data[i].practices[0].phones[0].number}<br>
          <span class="bold">Accepting New Patients: </span>${response.data[i].practices[0].accepts_new_patients}<br>
          <span class="bold">Website:</span> ${response.data[i].practices[0].website}
          </li>`);
		   }
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}

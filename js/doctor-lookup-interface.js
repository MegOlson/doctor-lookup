import { DoctorLookup } from './../js/doctor-lookup.js';

$(document).ready(function(){
  let doctorLookup = new DoctorLookup();
  $(".searchByName").submit(function(e){
    e.preventDefault();
    const lastName = $("input.searchByName").val();
    doctorLookup.byLastName(lastName);
    $(".resultsByName").show();
  });
  $(".searchByIssue").submit(function(e){
    e.preventDefault();
    const medicalIssue = $("input.searchByIssue").val();
    doctorLookup.byMedicalIssue(medicalIssue);
    $(".resultsByIssue").show();
  });
});

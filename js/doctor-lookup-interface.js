import { DoctorLookup } from './../js/doctor-lookup.js';

$(document).ready(function(){
  let doctorLookup = new DoctorLookup();

  $(document).ajaxStart(function(){
    $("#wait").css("display", "block");
  });

  $(document).ajaxComplete(function(){
    $("#wait").css("display", "none");
    $(".resultsByName").show();
  });

  $(".searchByName").submit(function(e){
    e.preventDefault();
    const lastName = $("input.searchByName").val();
    doctorLookup.byLastName(lastName);
    $(".resultsByName").removeClass("hide");
  });
  $(".searchByIssue").submit(function(e){
    e.preventDefault();
    const medicalIssue = $("input.searchByIssue").val();
    doctorLookup.byMedicalIssue(medicalIssue);
    $(".resultsByIssue").removeClass("hide");
  });
});

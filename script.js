function showSurvey() {
  /* Shows the survey form and hides the survey form rendering button to disable unneccessary requests.*/
  document.getElementById("survey-form").style.display = "block";
  document.getElementById("take-survey-button").style.display = "none";
}

/* Shows the confirmation image and hides the survey form to stop unneccessary feedback from being sent.*/
function showConfirmation() {
  document.getElementById("survey-form").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
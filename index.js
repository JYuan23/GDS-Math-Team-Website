var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 
function myFunction() {
  /* Get the text field */
  var copyText = "https://www.google.com/url?q=https://gds-org.zoom.us/j/94606015330?pwd%3DSGdkUTdyODVqZ1d0MS94SlEyWGhRdz09&sa=D&source=hangouts&ust=1602735142908000&usg=AFQjCNHfoH8Bzv9t6mOFcofVPMwYgPHLKA";

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
} 


var type=new Typed(".content2",{
    strings:["Pooja Joshi","I'm a Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}

// Smooth scroll to top when the button is clicked
document.getElementById("scrollButton").addEventListener("click", function() {
  topFunction();
});

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}





// emailjs.sendForm('service_41jzzzo', 'template_g4ag64k', this)
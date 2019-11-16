(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

function whoweshow() {
  document.getElementById("whoweare").classList.remove("hide");
}
function whowehide() {
  document.getElementById("whoweare").classList.add("hide");  
}
function whatweshow() {
  document.getElementById("whatwedo").classList.remove("hide");
}
function whatwehide() {
  document.getElementById("whatwedo").classList.add("hide");  
}
function whyweshow() {
  document.getElementById("whywedo").classList.remove("hide");
}
function whywehide() {
  document.getElementById("whywedo").classList.add("hide");  
}

var userName = sessionStorage.getItem('logUser');

if (userName) {
  document.getElementById("userName").innerText=userName;
  document.getElementById("login-drpdwm").classList.remove("d-none");
  document.getElementById("login-btn").classList.add("d-none");

}

function logout() {
  document.getElementById("login-drpdwm").classList.add("d-none");
  document.getElementById("login-btn").classList.remove("d-none");
  userName="";

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      sessionStorage.clear();
      window.location.assign("/home.html");      
    }
  });
  xhr.open('GET', 'http://localhost:3001/logout');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send();
}
function donate() {
  
  if (userName) {
  	// alert("The Payment Portal is being upgraded.");
    window.location.assign("/paydetails.html");
  }
  else {
    window.location.assign("/login.html");
  }
  
}
// (function () {
//   if (userName) {
//     document.getElementById("maintain").classList.add("d-none");
//   }
// })()

function closeMaintainance() {
  document.getElementById("maintain").classList.add("d-none");
}

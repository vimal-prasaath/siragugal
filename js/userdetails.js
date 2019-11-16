var profile;
(function () {
    if (userName) {
      document.getElementById("user-name").innerText=userName;   
    }
    
    // sessionStorage.removeItem('userDetails');

  })()

  profile = sessionStorage.getItem('userDetails');
  profile=JSON.parse(profile);

  document.getElementById("user_name").value= profile.firstname + ' ' + profile.lastname ;
  document.getElementById("user_email").value= profile.mail_id ;
  document.getElementById("user_phone").value= profile.phoneNumber ;

  function edit() {
  document.getElementById("user_email").removeAttribute("disabled") ;
  document.getElementById("dob").removeAttribute("disabled") ;
  
  document.getElementById("saveUser").classList.remove("d-none");
      
  }
  
  
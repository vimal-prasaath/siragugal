$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


// validation

var password = document.getElementById("password");
var repass = document.getElementById("re-password");
var fname= document.getElementById("fname");
var lname=document.getElementById("lname");
var phone=document.getElementById("phone");
var email = document.getElementById("email");

function signUp() {
  var userDetails = {
    mail_id: '',
    password: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    dob: '2018-07-08'
  };
  userDetails.mail_id = document.getElementById("email").value;
  userDetails.password = document.getElementById("password").value;
  userDetails.firstname = document.getElementById("fname").value;
  userDetails.lastname = document.getElementById("lname").value;
  userDetails.phoneNumber = document.getElementById("phone").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        sessionStorage.setItem("logUser", response["user"]["firstname"]);
        sessionStorage.setItem("userDetails",JSON.stringify(response.user));
        document.getElementById("otp-box").classList.remove("d-none");
        
        // window.location.assign("/home.html");
      }else{
        alert(response['errorMessage']);

      }
      
    }
  });
  xhr.open('POST', '/siragugal/api/user/new.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(userDetails));
}

function validate() {
  var pass=/(?=.*\d)(?=.*[a-zA-Z]).{8,}/;
  var name= /^[a-zA-Z]+$/;
  var phoneno=/^\d{10}$/;
  var flag=1;
  var emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!name.test(fname.value)) {
    // console.log("should not contain n.o and special character");
    fname.previousElementSibling.innerText='Only Alphabets are allowed.';
    fname.previousElementSibling.style.color='#fed136';
    fname.previousElementSibling.style.fontSize ='13px';
    
    flag=0;

  }
  else {
    fname.previousElementSibling.innerText='First Name';
    fname.previousElementSibling.style.color='white';
    
    
  }

  if (!name.test(lname.value)) {
    // console.log("should not contain n.o and special character");
    lname.previousElementSibling.innerText='Only Alphabets are allowed.';
    lname.previousElementSibling.style.color='#fed136';
    lname.previousElementSibling.style.fontSize='13px';
    
    flag=0;

  }
  else {
    lname.previousElementSibling.innerText='Last Name';
    lname.previousElementSibling.style.color='white';
    
    
  }
  if (!emailval.test(email.value)) {
    email.previousElementSibling.innerText="Enter valid E-mail id.";
    email.previousElementSibling.style.color='#fed136';
    email.previousElementSibling.style.fontSize ='13px';
  }
  else {
    email.previousElementSibling.innerText='Email Address';
    email.previousElementSibling.style.color='white';
  }

  if (!phoneno.test(phone.value)) {
    phone.previousElementSibling.innerText='Enter valid Phone Number.';
    phone.previousElementSibling.style.color='#fed136';
    phone.previousElementSibling.style.fontSize='13px';
    
    flag=0;

  }
  else {
    phone.previousElementSibling.innerText='Phone Number';
    phone.previousElementSibling.style.color='white';
    
    
  }

  if (pass.test(password.value)){
    password.previousElementSibling.style.color='white';
    password.previousElementSibling.innerText='Password';
    password.style.bordercolor = "black";
    if(password.value===repass.value)
    {
      console.log("pass");
    }
    else {
      console.log("fail");
      password.style.border="1px solid black";
      repass.style.border="1px solid black";
      flag=0;

    }
  }
  else {
    password.previousElementSibling.style.color='#fed136';
    password.previousElementSibling.innerText='Must contain Minimum 8 char(1 Number & 1 Alphabet).';
    password.previousElementSibling.style.fontSize='13px';

    password.style.border="1px solid black";
    repass.style.border="1px solid black";
    flag=0;
  }
  if (flag==1) {

    signUp();

    // debugger;
    
  }
}

function verifyNewUserOtp() {
  
  // signUp();


  var otpDetails = {
    otp: '',
    newUser: 'Y',
    phoneNumber: '',
    encOtp: '',
    otp_sent_time: '',
  };
  userOtpDetails = sessionStorage.getItem('userDetails');
  userOtpDetails=JSON.parse(userOtpDetails);

  otpDetails.otp = document.getElementById("otp").value;
  otpDetails.phoneNumber = userOtpDetails.phoneNumber;
  otpDetails.encOtp = userOtpDetails.otp;
  otpDetails.otp_sent_time = userOtpDetails.otp_sent_time;
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        
        userOtpDetails.otp_sent_time = response['user']['otp_sent_time'];
        sessionStorage.setItem("userDetails",JSON.stringify(userOtpDetails));
        window.location.assign("/home.html");
      }else{
        alert(response['errorCode']);

      }
      
    }
  });
  xhr.open('POST', '/siragugal/api/user/verifyotp.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(otpDetails));

}

// function validate() {
//   var pass=/(?=.*\d)(?=.*[a-zA-Z]).{8,}/;
//   var name= /^[a-zA-Z]+$/;
//   var phoneno=/^[0-9]+$/;
//   var flag=1;
//   if (!name.test(fname.value)) {
//     // console.log("should not contain n.o and special character");
//     fname.previousElementSibling.innerText='Special characters, n.o are not allowed';
//     fname.previousElementSibling.style.color='red';
//     flag=0;

//   }
//   else {
//     fname.previousElementSibling.innerText='First Name';
//     fname.previousElementSibling.style.color='white';
    
    
//   }
//   if (!name.test(lname.value)) {
//     // console.log("should not contain n.o and special character");
//     lname.previousElementSibling.innerText='Special characters, n.o are not allowed';
//     lname.previousElementSibling.style.color='red';
//     flag=0;

//   }
//   else {
//     lname.previousElementSibling.innerText='Last Name';
//     lname.previousElementSibling.style.color='white';
    
    
//   }
//   if (!phoneno.test(phone.value)) {
//     phone.previousElementSibling.innerText='enter valid phone number';
//     phone.previousElementSibling.style.color='red';
//     flag=0;

//   }
//   else {
//     phone.previousElementSibling.innerText='Phone Number';
//     phone.previousElementSibling.style.color='white';
    
    
//   }

//   if (pass.test(password.value)){
//     password.previousElementSibling.style.color='white';
//     password.previousElementSibling.innerText='Password';
//     password.style.bordercolor = "black";
//     if(password.value===repass.value)
//     {
//       console.log("pass");
//     }
//     else {
//       console.log("fail");
//       password.style.border="1px solid red";
//       repass.style.border="1px solid red";
//       flag=0;

//     }
//   }
//   else {
//     password.previousElementSibling.style.color='red';
//     password.previousElementSibling.innerText='Must contain min 8 chars[1 num and 1 alphabet]';
//     password.style.border="1px solid red";
//     repass.style.border="1px solid red";
//     flag=0;
//   }
//   if (flag==1) {
//     signUp();
//   }
// }

function logIn() {
  var loginDetails = {
    username:'',
    password:'',
  }
  loginDetails.username=document.getElementById("u_phone").value;
  loginDetails.password=document.getElementById("u_pass").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        console.log(response);
        sessionStorage.setItem("logUser", response["user"]["firstname"]);
        sessionStorage.setItem("userid", response["user"]["userId"]);        
        sessionStorage.setItem("userDetails",JSON.stringify(response.user));

        window.location.assign("/home.html");
        return;
      }else{
        if(response["errorCode"]== "OTP_NEEDED") {
          
        }
        alert(response['errorMessage']);
        document.getElementById("u_pass").value="";
        return;
      }
      
    }
  });
  xhr.open('POST', '/siragugal/api/user/login.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(loginDetails));
}

function termsshow() {
  document.getElementById("whoweare").classList.remove("hide");
}
function termshide() {
  document.getElementById("whoweare").classList.add("hide");  
}

function forgetPass() {
  if(!document.getElementById("u_phone").value){
    alert("Enter Phone Number to Reset Password.");
  }
  else {
    sendForgotPassRequest();
  }
}
function displayChangePassword() {
  document.getElementById("otp-box-forget-password").classList.add("d-none");
  document.getElementById("forget-password").classList.remove("d-none");
}

function changePassword(){
  sendChangePasswordRequest();
}

function sendForgotPassRequest(){
  var forgotPasswordDetails = {
    phoneNumber : ''
  }
  forgotPasswordDetails.phoneNumber = document.getElementById('u_phone').value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        console.log(response);
        sessionStorage.setItem("logUser", response["user"]["firstname"]);
        response['user']['phoneNumber'] = forgotPasswordDetails.phoneNumber;
        sessionStorage.setItem("userDetails",JSON.stringify(response.user));

        // window.location.assign("/home.html");
        document.getElementById("otp-box-forget-password").classList.remove("d-none");
        return;
      }else{
        alert(response['errorMessage']);
        return;
      }
      
    }
  });
  xhr.open('POST', '/siragugal/api/user/forgotpassword.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(forgotPasswordDetails));
}


function sendChangePasswordRequest(){
  var changePasswordDetails = {
    phoneNumber : '',
    password: '',
    confirmPassword : '',
    forgot_otp : '',
    isVerified : 'Y'
  }
  var user = JSON.parse(sessionStorage.getItem("userDetails"));
  changePasswordDetails.phoneNumber = user.phoneNumber;
  changePasswordDetails.password = document.getElementById('new-password').value;
  changePasswordDetails.confirmPassword = document.getElementById('re-new-password').value;
  changePasswordDetails.forgot_otp = user.forgot_otp;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        console.log(response);
        window.location.assign("/login.html");
        return;
      }else{
        alert(response['errorMessage']);
        return;
      }
      
    }
  });
  xhr.open('POST', '/siragugal/api/user/changepassword.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(changePasswordDetails));
}

function forgetPassOtp(){
  var body = {
    otp : '',
    newUser : 'N',
    phoneNumber : '',
    encOtp : '',
    otp_sent_time : '',
    forgot_otp : 'Y'
  };

  var user = JSON.parse(sessionStorage.getItem("userDetails"));
  body.phoneNumber = user.phoneNumber;
  body.encOtp = user.otp;
  body.otp_sent_time = user.otp_sent_time;
  body.otp = document.getElementById('otp-forget').value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        console.log(response);
        user.otp_sent_time = response['user']['otp_sent_time'];
        sessionStorage.setItem('userDetails', JSON.stringify(user));
        displayChangePassword();
        return;
      }else{
        alert(response['errorMessage']);
        return;
      }
      
    }
  });
  xhr.open('POST', '/siragugal/api/user/verifyotp.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(body));
}

function resendOtp() {
  var forgotPasswordDetails = {
    phoneNumber : ''
  }

  var userValues = sessionStorage.getItem('userDetails');
  userValues=JSON.parse(userValues);

  forgotPasswordDetails.phoneNumber = userValues.phoneNumber;
    
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function(){
    if(xhr.readyState == 4){
      console.log(xhr.response);
      var response = JSON.parse(xhr.response);
      if(response['statusCode'] == '0'){
        userValues.otp = response['user']['otp'];
        userValues.otp_sent_time = response['user']['otp_sent_time'];
        sessionStorage.setItem("userDetails",JSON.stringify(userValues));
      }else{
        alert(response['errorCode']);
      }
    }
  });
  xhr.open('POST', '/siragugal/api/user/resendotp.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
  xhr.send(JSON.stringify(forgotPasswordDetails));
}
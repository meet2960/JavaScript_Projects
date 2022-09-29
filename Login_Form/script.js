let names, emails, nums, passwords;
function gets() {
  names = regform.fname.value;
  passwords = regform.password.value;
}
// Regustration Form Validation
function validate() {
  /*For Name */
  if (names == "" || names == null) {
    document.getElementById("ename").innerHTML = "Please Enter Name";
    // names.focus();
  } else {
    document.getElementById("ename").innerHTML = "";
  }

  /*For Email */
  emails = regform.email1.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emails)) {
    document.getElementById("eemail").innerHTML = "";
  } else {
    document.getElementById("eemail").innerHTML = "Please Enter Valid Email";
    // emails.focus();
  }

  /*For Number */
  // if(nums == null || isNaN(nums)){
  //     document.getElementById("enumber").innerHTML = "Enter 10 Digit Number";
  // } or
  nums = parseInt(regform.num.value);
  let x = nums.toString();
  console.log("Type of x : " + typeof x);
  if (x == "") {
    document.getElementById("enumber").innerHTML = "Please Enter Number";
    // x.focus();
  } else if (x.length < 10 || x.length >= 11) {
    document.getElementById("enumber").innerHTML = "Enter 10 Digit Number";
    // x.focus();
  } else {
    document.getElementById("enumber").innerHTML = "";
  }
  // console.log("Outside Function Type of X : " + typeof nums);

  /*Password Validation */
  if (passwords == "" || passwords == null) {
    document.getElementById("epassword").innerHTML = "Please Enter Password";
    // passwords.focus();
  } else if (passwords.length < 5) {
    document.getElementById("epassword").innerHTML =
      "Please Enter Password more than 5 Character";
    // passwords.focus();
  } else {
    document.getElementById("epassword").innerHTML = "";
  }

  /*Checkbox Validation */
  if (regform.cbox.checked == false) {
    console.log("Inside Checkbox");
    document.getElementById("echeckbox").innerHTML =
      "Please accept the terms and condition";
  } else {
    document.getElementById("echeckbox").innerHTML = "";
  }
}

// Login Form Validation
let luser, lpass;
function loginvalidate() {
  /*For Username Validation */
  luser = loginform.lusername.value;
  lpass = loginform.lpassword.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(luser)) {
    document.getElementById("leemail").innerHTML = "";
    // document.getElementById("leemail").innerHTML = "Check Username";
  }
  // if(luser == "" || luser == null){
  // }
  else {
    document.getElementById("leemail").innerHTML = "Check Email Address";
  }

  /*For Password Validation */
  if (lpass == "" || lpass == null) {
    document.getElementById("leepassword").innerHTML = "Wrong Password";
  } else {
    document.getElementById("leepassword").innerHTML = "";
  }

  /*For Login Successfully Alert */
  if (luser == "meetghelani43@gmail.com" && lpass == "meet@123") {
    alert("Login Successfully !!! ");
  }
}

/*Single Tab Change Script */
// let reg = document.getElementById("regform");
// let log = document.getElementById("loginform");
// log.style.display = "none";
// function regtolog(){
//     reg.style.display = "none"
//     log.style.display = "block"
// }
// function logtoreg(){
//     reg.style.display = "block"
//     log.style.display = "none"
// }

/*For Multiple Tab Change */

let freg = document.getElementById("formregister");
let flog = document.getElementById("formlogin");
let imgreg = document.getElementById("regimg");
let imglog = document.getElementById("loginimg");
flog.style.display = "none";
imglog.style.display = "none";
function regtologin() {
  if (flog.style.display == "none" && imglog.style.display == "none") {
    flog.style.display = "block";
    imglog.style.display = "block";
    freg.style.display = "none";
    imgreg.style.display = "none";
  } else {
    flog.style.display = "none";
    imglog.style.display = "none";
  }
}

function logintoreg() {
  if (flog.style.display == "block" && imglog.style.display == "block") {
    flog.style.display = "none";
    imglog.style.display = "none";
    freg.style.display = "block";
    imgreg.style.display = "block";
  } else {
    flog.style.display = "none";
    imglog.style.display = "none";
  }
}

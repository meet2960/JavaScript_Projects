let names, emails, countrys, nums, passwords, gen;
function gets() {
  names = regform.fname.value;
  countrys = regform.country.value;
  passwords = regform.password.value;
}
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

  /*For Country */
  if (countrys == "" || countrys == null) {
    document.getElementById("ecountry").innerHTML =
      "Please Enter Valid Country";
    // countrys.focus();
  }
  else{
    document.getElementById("ecountry").innerHTML =
    "";
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
  }
  else{
    document.getElementById("enumber").innerHTML = "";
  }
  // console.log("Outside Function Type of X : " + typeof nums);

  /*Dropdown Validation */
  gen = regform.gendrop.value;
  if (gen == "0") {
    document.getElementById("edrop").innerHTML = "Please Select Gender";
  } else {
    document.getElementById("edrop").innerHTML = "";
  }

  /*Password Validation */
  if (passwords == "" || passwords == null) {
    document.getElementById("epassword").innerHTML = "Please Enter Password";
    // passwords.focus();
  } else if (passwords.length < 5) {
    document.getElementById("epassword").innerHTML =
      "Please Enter Password more than 5 Character";
    // passwords.focus();
  } else {
    document.getElementById("epassword").innerHTML =
      "";
  }

  /*Checkbox Validation */
  if (regform.cbox.checked == false) {
    console.log("Inside Checkbox");
    document.getElementById("echeckbox").innerHTML =
      "Please accept the terms and condition";
  }
  else {
    document.getElementById("echeckbox").innerHTML = "";
  }
}

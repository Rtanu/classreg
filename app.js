function printError(elemId, hintMsg) {
  var errorElem = document.getElementById(elemId);
  if (hintMsg !== "") {
    errorElem.style.display = "block";
    errorElem.innerHTML = hintMsg;
  } else {
    errorElem.style.display = "none";
    errorElem.innerHTML = "";
  }
}



function validateForm() {
  var fname = document.AdmissionForm.fname.value;
  var mname = document.AdmissionForm.mname.value;
  var lname = document.AdmissionForm.lname.value;
  var mobile = document.AdmissionForm.mobile.value;
  var email = document.AdmissionForm.email.value;
  var password = document.AdmissionForm.password.value;
  var age = document.AdmissionForm.age.value;
  var gender = document.AdmissionForm.gender.value;
  var language = document.AdmissionForm.languageSelect.value; // Get the selected language
  var mode = document.AdmissionForm.modeSelect.value; // Get the selected mode
  var agree = document.AdmissionForm.agree;
  var place = document.AdmissionForm.placesSelect.value;
  var password = document.AdmissionForm.password.value;
  var confirmPassword = document.AdmissionForm.confirmPassword.value;
  var passwordError = confirmPasswordError = false;

  var fnameError = mnameError = lnameError = mobileError = emailError = ageError = genderError = passwordError = languageError = modeError = agreeError=placesError = false;




  // Validate first name
  if (fname === "") {
    printError("fnameError", "Please enter your first name");
    fnameError = true;
  } else {
    var regex = /^[a-zA-Z\s]{2,20}$/;
    if (!regex.test(fname)) {
      printError("fnameError", "Please enter a valid first name (2-20 alphabetical characters)");
      fnameError = true;
    } else {
      printError("fnameError", "");
    }
  }

  // Validate middle name
  if (mname === "") {
    printError("mnameError", "Please enter your middle name");
    mnameError = true;
  } else {
    var regex = /^[a-zA-Z\s]{2,20}$/;
    if (!regex.test(mname)) {
      printError("mnameError", "Please enter a valid middle name (2-20 alphabetical characters)");
      mnameError = true;
    } else {
      printError("mnameError", "");
    }
  }

  // Validate last name
  if (lname === "") {
    printError("lnameError", "Please enter your last name");
    lnameError = true;
  } else {
    var regex = /^[a-zA-Z\s]{2,20}$/;
    if (!regex.test(lname)) {
      printError("lnameError", "Please enter a valid last name (2-20 alphabetical characters)");
      lnameError = true;
    } else {
      printError("lnameError", "");
    }
  }

  // Validate mobile number
  if (mobile === "") {
    printError("mobileError", "Please enter your mobile number");
    mobileError = true;
  } else {
    var regex = /^[6-9]\d{9}$/;
    if (!regex.test(mobile)) {
      printError("mobileError", "Please enter a valid 10-digit mobile number");
      mobileError = true;
    } else {
      printError("mobileError", "");
    }
  }

  // Validate email address
  if (email === "") {
    printError("emailError", "Please enter your email address");
    emailError = true;
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(email)) {
      printError("emailError", "Please enter a valid email address");
      emailError = true;
    } else {
      printError("emailError", "");
    }
  }

  // Validate password
  if (password === "") {
    printError("passwordError", "Please enter your Password");
    passwordError = true;
  } else {
    var regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!regex.test(password)) {
      printError("passwordError", "Valid password should contain minimum of 8 characters including an uppercase, a lowercase, a symbol, and a digit");
      passwordError = true;
    } else {
      printError("passwordError", "");
    }
  }
  
  // Validate confirm password
  if (confirmPassword === "") {
    printError("confirmPasswordError", "Please enter your Confirm Password");
    confirmPasswordError = true;
  } else {
    if (password !== confirmPassword) {
      printError("confirmPasswordError", "Passwords do not match");
      confirmPasswordError = true;
    } else {
      printError("confirmPasswordError", "");
    }
  }

  // Validate Gender
  if (gender === "") {
    printError("genderError", "Please select your gender");
    genderError = true;
  } else {
    printError("genderError", "");
  }

  // Validate age
  if (age === "") {
    printError("ageError", "Please enter your age");
    ageError = true;
  } else {
  var regex = /^(1[0-9]|[2-5][0-9]|60)$/;
    if (!regex.test(age)) {
      printError("ageError", "Please enter age between 10 to 60 years");
      ageError = true;
    } else {
      printError("ageError", "");
    }
  }

  //validate language
  if (language === "") {
      printError("languageError", "Please select a language");
      languageError = true;
    } else {
      printError("languageError", "");
  }

  // Validate selected mode of participation
  if (mode === "") {
      printError("modeError", "Please select a mode of participation");
      modeError = true;
  } else {
      printError("modeError", "");
  }
// Valited to check Agree Condition 
  if (!agree.checked) {
    printError("agreeError", "Please agree to the terms and conditions");
    agreeError = true;
  } else {
    printError("agreeError", "");
  }
  
  //validate Location 
  if (place === "" && mode !== "Online") {
    printError("placesError", "Please select the location");
    placesError = true;
  } else {
    printError("placesError", "");
}



  // Check if there are any validation errors
  if (fnameError || mnameError || lnameError || mobileError || emailError || ageError || genderError || languageError || modeError||agreeError||placesError || confirmPasswordError) {
    return false; // Prevent form submission
  } else {
    // Creating a string from input data for preview
    var dataPreview =
      "You've entered the following details:\n" +
      "Your First Name: " + fname + "\n" +
      "Your Middle Name: " + mname + "\n" +
      "Your Last Name: " + lname + "\n" +
      "Your Age: " + age + "\n" +
      "Email Address: " + email + "\n" +
      "Mobile Number: " + mobile + "\n" +
      "Gender: " + gender + "\n";
      "Language: " + language + "\n";
      "Mode: " + mode + "\n";

    // Display input data in a dialog box before submitting the form
    alert(dataPreview);
  }
}

function showValues() {
  var modeSelect = document.getElementById("modeSelect");
  var placesRow = document.getElementById("placesRow");

  if (modeSelect.value === "Offline") {
    placesRow.classList.remove("hidden");
  } else {
    placesRow.classList.add("hidden");
  }
}

// onclick Clear Function 

function clearForm() {
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("age").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("other").checked = false;
  document.getElementById("languageSelect").value = "";
  document.getElementById("modeSelect").value = "";
  document.getElementById("placesSelect").value = "";
  document.getElementById("agree").checked = false;

  // Clear error messages
  printError("fnameError", "");
  printError("mnameError", "");
  printError("lnameError", "");
  printError("mobileError", "");
  printError("emailError", "");
  printError("passwordError", "");
  printError("ageError", "");
  printError("genderError", "");
  printError("languageError", "");
  printError("modeError", "");
  printError("placesError", "");
  printError("agreeError", "");
}

var passwordInput = document.getElementById("password");
var toggleButton = document.getElementById("togglePassword");
var eyeIcon = document.getElementById("eyeIcon");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    
  }
});


document.getElementById('go-to-signup').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('login').style.display = 'none';
    document.getElementById('sign-up').style.display = 'block';
});

document.getElementById('go-to-login').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('login').style.display = 'block';
    document.getElementById('sign-up').style.display = 'none';
});

document.getElementById('signup-form').addEventListener('submit', function(event){
    event.preventDefault();
    const usr = document.getElementById('signup-user').value;
    const email = document.getElementById('signup-email').value;
    const pass = document.getElementById('signup-pass').value;
    let err_msg = "";

    if (usr.length < 5) {
        err_msg += "Username must have at least 5 characters.\n";
    }
    if (!valid(email)) {
        err_msg += "Invalid email address.\n";
    }
    if (pass.length < 6) {
        err_msg += "Password must have at least 6 characters.\n";
    }

    if (err_msg) {
        alert(err_msg);
    } else {
        alert("Sign up successful!");
    }
});

document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();
    const email1 = document.getElementById('log-email').value;
    const pass1 = document.getElementById('log-pass').value;
    let err_msg1 = "";
    if (!valid(email1)) {
        err_msg1 += "Invalid email address.\n";
    }
    if (pass1.length < 6) {
        err_msg1 += "Incorrect Password.\n";
    }
    if (err_msg1) {
        alert(err_msg1);
    } else {
        alert('Login successful!');
    }

   
});

function valid(email) {
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(email);
}

var psw = document.getElementById("signup-pass");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

psw.onfocus = function() {
    document.getElementById("msg").style.display = "block";
}
psw.onblur = function() {
    document.getElementById("msg").style.display = "none";
}
psw.onkeyup = function() {
    var lc = /[a-z]/g;
    if (psw.value.match(lc)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var uc = /[A-Z]/g;
    if (psw.value.match(uc)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var num = /[0-9]/g;
    if (psw.value.match(num)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (psw.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

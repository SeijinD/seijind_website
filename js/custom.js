function validateForm()
{
    var x =  document.getElementById('name').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    x =  document.getElementById('email').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(x)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    x =  document.getElementById('subject').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    x =  document.getElementById('comments').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }

    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();
}

function validateForm2()
{
    var x =  document.getElementById('name').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Το όνομα δεν μπορεί να είναι άδειο.";
        return false;
    }
    x =  document.getElementById('email').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Το email δεν μπορεί να είναι άδειο.";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(x)){
            document.getElementById('status').innerHTML = "Η μορφή του email δεν είναι έγκυρη.";
            return false;
        }
    }
    x =  document.getElementById('subject').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Το θέμα δεν μπορεί να είναι άδειο.";
        return false;
    }
    x =  document.getElementById('comments').value;
    if (x == "") {
        document.getElementById('status').innerHTML = "Το μήνυμα δεν μπορεί να είναι άδειο.";
        return false;
    }

    document.getElementById('status').innerHTML = "Στάλθηκε...";
    document.getElementById('contact-form').submit();
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please fill your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

function checkCookie2() {
    var user=getCookie("username");
    if (user != "") {
        alert("Καλώς ήρθατε ξανά " + user);
    } else {
        user = prompt("Παρακαλώ συμπληρώστε το όνομα σας:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}
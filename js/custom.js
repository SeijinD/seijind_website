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

function loading()
{
    setTimeout(show, 3000);
}

function show()
{
    document.getElementById("loading").className="show";
}

<?php
if(isset($_POST['submit']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['comments'];

    $mailTo = "georgekara2010@yahoo.gr";
    $headers = "From: ".$email;
    $txt = "From: $name \n Email: $email \n Message: \n $message";

    mail($mailTo, $subject, $txt, $headers);
    header("Location:http://www.seijind.eu");
}
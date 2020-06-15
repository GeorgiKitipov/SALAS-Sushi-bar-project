var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function()
{
    modal.style.display = "block";
}
span.onclick = function()
{
    modal.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function()
{
    modal2.style.display = "block";
}
span2.onclick = function()
{
    modal2.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal2) 
    {
        modal2.style.display = "none";
    }
}


var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function()
{
    modal3.style.display = "block";
}
span3.onclick = function()
{
    modal3.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal3) 
    {
        modal3.style.display = "none";
    }
}

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function()
{
    modal4.style.display = "block";
}
span4.onclick = function()
{
    modal4.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal4) 
    {
        modal4.style.display = "none";
    }
}

var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementsByClassName("close5")[0];
btn5.onclick = function()
{
    modal5.style.display = "block";
}
span5.onclick = function()
{
    modal5.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal5) 
    {
        modal5.style.display = "none";
    }
}

var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span6 = document.getElementsByClassName("close6")[0];
btn6.onclick = function()
{
    modal6.style.display = "block";
}
span6.onclick = function()
{
    modal6.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal6) 
    {
        modal6.style.display = "none";
    }
}

var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
var span7 = document.getElementsByClassName("close7")[0];
btn7.onclick = function()
{
    modal7.style.display = "block";
}
span7.onclick = function()
{
    modal7.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal7) 
    {
        modal7.style.display = "none";
    }
}



var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("myBtn8");
var span8 = document.getElementsByClassName("close8")[0];
btn8.onclick = function()
{
    modal8.style.display = "block";
}
span8.onclick = function()
{
    modal8.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal8) 
    {
        modal8.style.display = "none";
    }
}



var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("myBtn9");
var span9 = document.getElementsByClassName("close9")[0];
btn9.onclick = function()
{
    modal9.style.display = "block";
}
span9.onclick = function()
{
    modal9.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal9) 
    {
        modal9.style.display = "none";
    }
}




var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("myBtn10");
var span10 = document.getElementsByClassName("close10")[0];
btn10.onclick = function()
{
    modal10.style.display = "block";
}
span10.onclick = function()
{
    modal10.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal10) 
    {
        modal10.style.display = "none";
    }
}



function noregistration()
{
    alert("To Add this Item to your cart first you must login")
    
}


//Login - Password show --//
function myFunction() 
{
    var x = document.getElementById("password");
    if (x.type === "password") 
    {
      x.type = "text";
    } 
    else 
    {
      x.type = "password";
    }
}
//login password//

function loginBtn()
{
    password1 = document.getElementById("password").value;
    password2 = "SALAS";
    user = document.getElementById("username").value;
    user2 = "TEST1";
    if(password1 == password2 && user == user2)
    {
        window.location.href = ("index.html");
    }
    else
    {
        document.getElementById("message").innerHTML = "Wrong password or User name, please check it and try again !! "
    }
}
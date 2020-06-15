const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const lastname = document.getElementById('lastname');
const phoneNumber = document.getElementById('phone');
const address = document.getElementById("address");

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs()
{
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const lastnameValue = lastname.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const addressValue = address.value.trim();

    if(firstnameValue === '')
    {

        setErrorFor(firstname, "First name cannot be blank");
    }
    else
    {
        serSuccessFor(firstname);
    }

    if(emailValue === '')
    {
        setErrorFor(email, "E-mail cannot be blank");
    }
    else if(!isEmail(emailValue))
    {
        setErrorFor(email, "E-mail is not valide");
    }
    else
    {
        serSuccessFor(email);
    }


    if(lastnameValue === '')
    {
        setErrorFor(lastname, "Last name cannot be blank");
    }
    else
    {
        serSuccessFor(lastname);
    }

    if(phoneNumberValue === '')
    {
        setErrorFor(phoneNumber, "Phone number cannot be blank");
    }
    else 
    {
        serSuccessFor(phoneNumber);
    }

    if(addressValue === '')
    {
        setErrorFor(address, "Address cannot be blank");
    }
    else
    {
        serSuccessFor(address);
    }

    if(firstnameValue !== '' && emailValue !== '' && lastnameValue !== '' && phoneNumberValue !== '' && addressValue !== '')
    {
        window.location.href = ("success.html");
    }
}

function setErrorFor(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function serSuccessFor(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
 

function isEmail(email)
{
    return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
var alert = document.getElementById('alert');
var isValid1=false;
var isValid2=false;
var isValid3=false;
var isValid4=false;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if(isValid1 && isValid2 && isValid3 && isValid4){
        form.submit();
        window.location.href = "page-2.html"
    }
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();

    if(firstnameValue === '') {
        isValid1=false;
        setError(firstname, 'Pole Imję nie zostało wypełnione');

    } else {
        isValid1=true;
        setSuccess(firstname);

    }

    if(lastnameValue === '') {
        isValid2=false;
        setError(lastname, 'Pole Nazwisko nie zostało wypełnione');

    } else {
        isValid2=true;
        setSuccess(lastname);

    }

    if(emailValue === '') {
        isValid3=false;
        setError(email, 'Pole E-mail nie zostało wypełnione');

    } else if (!isValidEmail(emailValue)) {
        isValid3=false;
        setError(email, 'Nie podano poprawnego składniowo adresu e-mail');

    } else {
        isValid3=true;
        setSuccess(email);
    }

};

function valthisform()
{
    var checkboxs=document.getElementsByName("section");
    var checkboxchecked=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            checkboxchecked=true;
            break;
        }
    }
    if(checkboxchecked)
    {
        isValid4=true;
    }
    else
    {
        isValid4=false;
        alert.innerHTML = "Wybór Sekcji jest obowiązkowy";
    }
}
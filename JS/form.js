const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const borndate = document.getElementById('borndate');
const info = document.getElementById('info');
const msg = document.getElementById('message');




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
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
    const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const borndateValue = borndate.value.trim();
    const infoValue = info.value.trim();
    const msgValue = msg.value.trim();




    if(usernameValue === '') {
        setError(username, 'İsim girmek zorunlu !');
    } else {
        setSuccess(username);
    }

    if(lastnameValue === '') {
      setError(lastname, 'Soyisim girmek zorunlu !');
  } else {
      setSuccess(lastname);
  }

    if(emailValue === '') {
        setError(email, 'email girmek zorunlu !');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Geçerli bir email giriniz !');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Şifre girmek zorunlu !');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Şifre en az 8 karakterli olmalı !')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Şifrenizi doğrulayınız !');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Şifre eşleşmiyor !");
    } else {
        setSuccess(password2);
    }


    if(borndateValue === '') {
      setError(borndate, 'Tarih seçmelisiniz !');
    } else {
      setSuccess(borndate);
    }

   if(infoValue === '') {
    setError(info, 'Neden seçmelisiniz !');
   } else {
    setSuccess(info);
   }

   if(msgValue === '') {
    setError(msg, 'Mesajını yazınız !');
   } else {
    setSuccess(msg);
   }



};




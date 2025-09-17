const form = document.querySelector('form');
const name_text = document.querySelector('#name');
const name_error = document.querySelector('#name-text');
const phone = document.querySelector('#phone');
const phone_error = document.querySelector('#phone-text');
const email = document.querySelector('#email');
const email_error = document.querySelector('#email-text');
const message = document.querySelector('#message');
const message_error = document.querySelector('#message-text');
const result = document.querySelector('.result');


form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 2000);
        });
    form.reset();
    document.querySelector('#name-done').style.display ="none";  
    document.querySelector('#email-done').style.display ="none";
    document.querySelector('#phone-done').style.display ="none";
    document.querySelector('#message-done').style.display ="none";
});



  name_text.addEventListener("keyup", (e) => {
  if (name_text.value.trim().length < 5) {
    name_error.textContent = `Name must be at least 5 characters!`;
    name_error.className = "error";
  } else {
    name_error.textContent = "";
    // name_error.className.remove("error");
    document.querySelector('#name-done').style.display ="block";
  }

});

email.addEventListener("keyup", () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      email_error.textContent = "Enter a valid email!";
      email_error.className = "error";
    } else {
      email_error.textContent = "";
    // name_error.className.remove("error");
    document.querySelector('#email-done').style.display ="block";
    }
  });    

  phone.addEventListener("keyup", () => {
    const phonePattern = /^[0-9]{10}$/; // ঠিক 10 digit
    if (!phone.value.match(phonePattern)) {
      phone_error.textContent = "Phone must be 10 digits!";
      phone_error.className = "error";
    } else {
       phone_error.textContent = "";
    // name_error.className.remove("error");
    document.querySelector('#phone-done').style.display ="block";
    }
  });


message.addEventListener("keyup", () => {
    if (message.value.trim().length < 10) {
      message_error.textContent = "Message must be at least 10 characters!";
      message_error.className = "error";
    } else {
       message_error.textContent = "";
    // name_error.className.remove("error");
    document.querySelector('#message-done').style.display ="block";
    }
  });


 
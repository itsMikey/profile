
const msg = document.getElementById('msg');

document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault()
    submitMessage();
});

function setErr(txt) {
    msg.classList = ['has-text-danger'];
    msg.innerText = txt;
}

function submitMessage() {
    const form = document.forms.contact;
    const params = { 
        name: form.user_name.value,
        email: form.email.value,
        msg: form.msg.value
    };
    const formValid = isFormValid(params);

    // hide form and set success msg
    if (formValid.valid) {
        axios.post('https://send-personal-email.azurewebsites.net/api/sendEmail?code=Fttp5K96jjpkvEdGsdQrPyRaZ0DjwVvEDLy8z6AuwPgbpGE8i/cJ1A==', params)
          .then((res) => {
            if (res.data === "Thank you, your message has been received" && res.status === 200) {
                form.classList = ["is-hidden"];
                msg.classList = ['is-size-5'];
                msg.innerText = res.data;
            } else {
                setErr(res.data);
            }
          })
          .catch(function (err) {
                setErr(err.msg);
          });
    } else {
        setErr(formValid.invalidParams.join(", "));
    }
}
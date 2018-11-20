const msg=document.getElementById('msg');const spinner=document.getElementById('loader');const form=document.forms.contact;function toggleElement(el,visibility='show'){if(visibility==='show'){el.classList.remove('is-hidden')}else if(visibility==='hide'){el.classList.add('is-hidden')}}
function setErr(txt){toggleElement(spinner,'hide');toggleElement(form,'show');msg.classList.add('has-text-danger');msg.innerText=txt}
function submitMessage(){const params={name:form.user_name.value,email:form.email.value,msg:form.msg.value};const formValid=isFormValid(params);if(formValid.valid){axios.post('https://send-personal-email.azurewebsites.net/api/sendEmail?code=Fttp5K96jjpkvEdGsdQrPyRaZ0DjwVvEDLy8z6AuwPgbpGE8i/cJ1A==',params).then((res)=>{if(res.data==="Thank you, your message has been received"&&res.status===200){toggleElement(form,'hide');toggleElement(spinner,'hide');msg.classList.add('is-size-5');msg.innerText=res.data}else{setErr(res.data)}}).catch(function(err){setErr(err.msg)})}else{setErr(formValid.invalidParams.join(", "))}}
document.getElementById("submitBtn").addEventListener("click",function(event){event.preventDefault();toggleElement(spinner,'show');toggleElement(form,'hide');submitMessage()})
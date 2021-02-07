async function checkResponse(response) {
  const status = document.querySelector(".feedback-footer-status");
  if(response.type === "success") {
    status.style.color = "black";
    status.innerText = response.message;
    document.forms["clientForm"].reset();
  } else if(response.type === "error"){
    status.innerText = response.message;
    status.style.color = "red";
  }
}

async function sendData(event) {
  event.preventDefault();
  const data = {
    userName: document.forms["clientForm"].elements['userName'].value,
    email: document.forms["clientForm"].elements['email'].value,
    subject: document.forms["clientForm"].elements['subject'].value,
    message: document.forms["clientForm"].elements['message'].value
  };


  await fetch('/', {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
      .then(data => data.json())
      .then(res => checkResponse(res));
}

const sendFormBtn = document.querySelector('.feedback-btn');
sendFormBtn.addEventListener('click', sendData)

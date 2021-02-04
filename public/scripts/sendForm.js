async function checkResponse(response) {
  if(response.type === "success") {
    console.log("OK")
    document.forms["clientForm"].reset();
  }
  alert(response.message);
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
  }).then(data => data.json())
      .then(res => checkResponse(res));
}


// var element = {
//   password: document.querySelector("#password"),
//   email: document.querySelector("#email"),
//   submit: document.querySelector("#submitUserInfo"),
// };


// let loginButton = element.submit.addEventListener("click", (a) => {
//   a.preventDefault();
//   fetch("http://localhost:5678/api/users/login", {
//       method: "POST",
//       headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//       email: element.email.value,
//       password: element.password.value,
//       }),
//       })
//       .then((response) => response.json())
//       .then((data) => {
//           sessionStorage.setItem("Token", data.token);

//           if (data.message || data.error) {
//               alert("Error in username or password");
//           } else {
//               sessionStorage.setItem("isConnected", JSON.stringify(true));
//               window.location.replace("index.html");
//           }
//       })
// });

var form = document.querySelector('.login-form');

form.addEventListener('submit', async (event) => {
   event.preventDefault();
   var userLoginCredential = {
      email: event.target.querySelector("[name=email").value,
      password: event.target.querySelector("[name=password]").value,
   };
   console.log(userLoginCredential);

   var userLoginAPI = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userLoginCredential),
   }
   var response = await fetch('http://localhost:5678/api/users/login', userLoginAPI);
   var loginCommand = await response.json();
   if (response.ok) {
      window.sessionStorage.setItem('token', loginCommand.token);
      location.href = 'index.html';
   } else {
      alert('Error in username or password');
   }
}
); 



  










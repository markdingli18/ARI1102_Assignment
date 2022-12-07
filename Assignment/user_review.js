//user_review

let users = [];

const addUser = (ev) => {

  const result = validateForm();
  if (!result){
  ev.preventDefault(); //to stop the form submitting
}
  let user = {
    id: Date.now(),
    name: document.getElementById('name').value,
    message: document.getElementById('message').value,
    //date
    createdAt: new Date()

  }

  //for display purposes only
  console.warn('added', {
    user
  });

    $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3002/user-reviews",
    data:user,

    success: function(result) {
       console.log('ok');
       fetchData();
    },
    error: function(result) {
       console.log('error');
    }
  });

  //saving to localStorage
  localStorage.setItem('MyUserList', JSON.stringify(users));
}

  document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn_save').addEventListener('click', addUser);
});

function fetchData() {

  fetch('http://127.0.0.1:3002/user-reviews')
    .then(response => {

      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data => {

      console.log(data.userReviews);

      const html = data.userReviews.map(userReview => {
        return `
        <body>
    <div id="user_body">
      <div id="user">

          <div id="OUTPUT">
            <h4>Name:</h4>
            <p>${userReview.name}</p>

            <h4>Message:</h4>
            <p>${userReview.message}</p>

            <h4>Date/Time:</h4>
            <p>${userReview.createdAt}</p>
          </div>

      </div>
    </div>
    </body>
    <br><br>
        `
      }).join('');

      console.log(html);

      document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => {
      console.log(error);
    });
}

//Validations
function validateForm() {

  var regexFullName = new RegExp(/^(?![ .]+$)[a-zA-Z .]{2,}$/);
  var regexMessage = new RegExp(/^(?![ .]+$)[a-zA-Z .,!'"():;]{10,}$/);

  let name = document.forms["form"]["name"].value;
  let message = document.forms["form"]["message"].value;

  if (name == "" || message =="") {
    alert("Fields must be filled out!");
    ev.preventDefault(); //stop from submitting
    return false;
  }

  if(!regexFullName.test(name)){
    alert("Must contain at least 2 non space characters and no symbols for Name & Surname!");
    ev.preventDefault(); //stop from submitting
    return false;
  }

  if(!regexMessage.test(message)){
    alert("Must contain at least 10 non space characters for Comment!");
    ev.preventDefault(); //stop from submitting
    return false;
  }
return true;
}

fetchData();

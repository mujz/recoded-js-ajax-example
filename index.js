const baseUrl = 'https://reqres.in/api';

fetch(`${baseUrl}/users/2`).then(function(response) {
  return response.json();
}).then(function(json) {
  const user = json.data;
  const userFirstNameH1 = document.getElementById('user-first-name')

  userFirstNameH1.innerText = `${user.first_name} ${user.last_name}`;
})

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('name-input');

  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      console.log(input.value);
    }
  });
});

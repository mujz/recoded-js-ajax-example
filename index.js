const url = 'https://randomuser.me/api/';

fetch(url).then(function(response) {
  return response.json();
}).then(function(json) {
  const user = json.results[0];
  const userFirstNameH1 = document.getElementById('user-first-name')

  userFirstNameH1.innerText = `${user.name.first} ${user.name.last}`;
})

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('name-input');

  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      console.log(input.value);
    }
  });
});

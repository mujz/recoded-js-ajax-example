const url = 'https://randomuser.me/api/';

fetch(url).then(function(response) {
  return response.json();
}).then(function(json) {
  const user = json.results[0];
  const userFirstNameH1 = document.getElementById('user-first-name')

  userFirstNameH1.innerText = `${user.name.first} ${user.name.last}`;
})

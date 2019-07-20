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

  input.addEventListener('keyup', async function(event) {
    if (event.keyCode === 13) {
      const data = {
        first_name: input.value
      }
      try {
        let response = await fetch(`${baseUrl}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          console.log('OK')
        } else {
          console.error('Response failed with status ' + response.status);
        }
      } catch(err) {
        console.error('caught the error', err,)
      }
    }
  });
});

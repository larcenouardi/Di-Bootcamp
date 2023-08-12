fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('user-data').textContent = JSON.stringify(data);
  })
  .catch(error => console.log(error));
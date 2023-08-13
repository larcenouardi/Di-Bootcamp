document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#registerForm');
    const loginForm = document.querySelector('#loginForm');
  
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const lastName = document.querySelector('#last_name').value;
      const email = document.querySelector('#email').value;
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, last_name: lastName, email, username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        showMessage(data, 'register');
      } else {
        showMessage(data, 'error');
      }
    });
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        showMessage(data, 'login');
      } else {
        showMessage(data, 'error');
      }
    });
  
    function showMessage(message, type) {
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
  
      if (type === 'register') {
        messageElement.style.color = 'green';
      } else if (type === 'login') {
        messageElement.style.color = 'blue';
      } else {
        messageElement.style.color = 'red';
      }
  
      document.body.appendChild(messageElement);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        showMessage(data, 'login');
      } else {
        showMessage(data, 'error');
      }
    });
  
    function showMessage(message, type) {
      const messageElement = document.createElement('p');
      if (type === 'login') {
        messageElement.textContent = `${message}, `;
        messageElement.style.color = 'blue';
      } else {
        messageElement.textContent = message;
        messageElement.style.color = 'red';
      }
  
      document.body.appendChild(messageElement);
    }
  });
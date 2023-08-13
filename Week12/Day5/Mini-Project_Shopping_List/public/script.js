document.getElementById('addItemForm').addEventListener('submit', addItem);

function addItem(event) {
  event.preventDefault();

  const itemInput = document.getElementById('item');
  const amountInput = document.getElementById('amount');

  const item = itemInput.value;
  const amount = amountInput.value;

  const newItem = { item, amount };

  fetch('/addItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
  .then(response => response.json())
  .then(data => {
    displayShoppingList(data);
  });

  itemInput.value = '';
  amountInput.value = '';
}

function displayShoppingList(shoppingList) {
  const shoppingListContainer = document.getElementById('shoppingList');
  shoppingListContainer.innerHTML = '';

  shoppingList.forEach(item => {
    const listItem = document.createElement('p');
    listItem.textContent = `${item.item} - ${item.amount}`;
    shoppingListContainer.appendChild(listItem);
  });
}
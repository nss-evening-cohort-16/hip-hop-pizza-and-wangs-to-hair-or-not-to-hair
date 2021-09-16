// BASIC MENU BUTTONS
const mainMenuButtons = () => {
  document.querySelector('#store').innerHTML += '<div><button id="view-orders-button" class="btn btn-success">View Orders</button></div>';
  document.querySelector('#store').innerHTML += '<div><button id="create-order-button" class="btn btn-info">Create an Order</button></div>';
  document.querySelector('#store').innerHTML += '<div><button id="view-revenue-button" class="btn btn-danger">View Revenue</button></div>';
};

// ITEM DETAILS PAGE BUTTONS
const itemDetailsButtons = () => {
  document.querySelector('#add-button').innerHTML += '<button id="add-item-button" class="btn btn-success">Add Item</button>';
  document.querySelector('#add-button').innerHTML += '<button id="go-to-payment-button" class="btn btn-info">Go To Payment</button>';
};

export { mainMenuButtons, itemDetailsButtons };

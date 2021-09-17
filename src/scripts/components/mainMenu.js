// BASIC MENU BUTTONS
const mainMenuBuilder = (user) => {
  document.querySelector('#store').innerHTML += `<h1>Welcome, ${user.displayName}</h1>`;
  document.querySelector('#store').innerHTML += '<div><button id="view-orders-button" class="btn btn-success">View Orders</button></div>';
  document.querySelector('#store').innerHTML += '<div><button id="create-order-button" class="btn btn-info">Create an Order</button></div>';
  document.querySelector('#store').innerHTML += '<div><button id="view-revenue-button" class="btn btn-danger">View Revenue</button></div>';
};

export default mainMenuBuilder;

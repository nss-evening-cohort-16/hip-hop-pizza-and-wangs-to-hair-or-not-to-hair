// BASIC MENU BUTTONS
const viewOrdersButton = () => {
  const domString = '<button id="view-orders-button" class="btn btn-success">View Orders</button>';
  document.querySelector('#main-buttons').innerHTML = domString;
};

const createOrderButton = () => {
  const domString = '<button id="create-order-button" class="btn btn-info">Create an Order</button>';
  document.querySelector('#main-buttons').innerHTML = domString;
};

const viewRevenueButton = () => {
  const domString = '<button id="view-revenue-button" class="btn btn-danger">View Revenue</button>';
  document.querySelector('#main-buttons').innerHTML = domString;
};

// // ITEM DETAILS PAGE
// const addItemButton = () => {
//   const domString = '<button id="add-item-button" class="btn btn-success">Add Item</button>';
//   document.querySelector('#store').innerHTML = domString;
// };

// const goToPaymentButton = () => {
//   const domString = '<button id="go-to-payment-button" class="btn btn-info">Go To Payment</button>';
//   document.querySelector('#store').innerHTML = domString;
// };

// // SUBMIT ORDER PAGE
// // This is the button on page 5 of the figma prototype. I changed the name to Submit because Create Order was already used and Submit made more sense to me.
// const submitOrderButton = () => {
//   const domString = '<button id="submit-order-button" class="btn btn-success">Submit Order</button>';
//   document.querySelector('#store').innerHTML = domString;
// };

// // SUBMIT ITEM PAGE
// // This is the button on page 6 of the figma prototype. I change the name to Submit because Create Item was already used and Submit made more sense to me.
// const submitItemButton = () => {
//   const domString = '<button id="submit-item-button" class="btn btn-success">Submit Item</button>';
//   document.querySelector('#store').innerHTML = domString;
// };

// // CLOSE ORDER PAGE
// const closeOrderButton = () => {
//   const domString = '<button id="close-order-button" class="btn btn-success">Close Order</button>';
//   document.querySelector('#store').innerHTML = domString;
// };

export { viewOrdersButton, createOrderButton, viewRevenueButton };

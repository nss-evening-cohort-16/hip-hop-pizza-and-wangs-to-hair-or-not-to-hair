import clearDom from '../views/clearDom';

const showOrders = (array) => {
  clearDom();

  document.querySelector('#store').innerHTML = '';
  array.forEach((order) => {
    document.querySelector('#store').innerHTML += `<div class="card">
    <div class="card-body">
        <h4 class="card-title">Name: ${order.customer_name}</h4>
        <hr>
        <h5 class="card-text bold">${order.order_closed ? '<span class="badge bg-danger">closed</span>' : '<span class="badge bg-success">open</span>'}</h5>
        <hr>
        <p class="card-text">Phone: ${order.customer_phone}</p>
        <hr>
        <p class="card-text">Email: ${order.customer_email}</p>
        <hr>
        <p class="card-text">Order Type: ${order.order_type}</p>
        <hr>
        <button class="btn btn-outline-secondary" id="details-order-btn--${order.firebaseKey}">Details</button>
        <button class="btn btn-info" id="edit-order-btn--${order.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete-order-btn--${order.firebaseKey}">Delete</button>
    </div>
</div>`;
  });
};

export default showOrders;

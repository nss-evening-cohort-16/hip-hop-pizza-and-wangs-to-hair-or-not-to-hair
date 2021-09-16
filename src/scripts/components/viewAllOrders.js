const sampleData = [
  {
    firebaseKey: '-MTpcli73mfiIqW0lpPe',
    customer_name: 'Joe Gibbs',
    order_closed: false,
    customer_email: 'joe@email.com',
    customer_phone: 5555551284,
    item_total: 25,
    date: '9/13/2021',
    payment_type: 'Credit',
    tip_total: 5,
    type: 'Phone'
  },
  {
    firebaseKey: '-MTpcli9kmjpvbdr-ckb',
    customer_name: 'Elle Lawrence',
    order_closed: true,
    cutomer_email: 'elle@email.com',
    customer_phone: 5555551238,
    item_total: 10,
    date: '9/12/2021',
    payment_type: 'Cash',
    tip_total: 3,
    type: 'In-Person'
  },
  {
    firebaseKey: '-MTpcliA_-GtWZHpb8sf',
    customer_name: 'Austin Parker',
    order_closed: true,
    cutomer_email: 'austin@email.com',
    customer_phone: 5555557234,
    item_total: 15,
    date: '9/11/2021',
    payment_type: 'Check',
    tip_total: 4,
    type: 'In-Person'
  },
  {
    firebaseKey: '-MTpcliCeUeUNMpZ-Kog',
    customer_name: 'Derek Malone',
    order_closed: false,
    cutomer_email: 'derek@email.com',
    customer_phone: 5555551734,
    item_total: 40,
    date: '9/10/2021',
    payment_type: 'Debit',
    tip_total: 10,
    type: 'Phone'
  },
  {
    firebaseKey: '-MTpcliDmrp15A1WIE4U',
    customer_name: 'Dr T',
    order_closed: true,
    cutomer_email: 'drt@email.com',
    customer_phone: 5555551274,
    item_total: 30,
    date: '9/13/2021',
    payment_type: 'Credit',
    tip_total: 15,
    type: 'Phone'
  },
  {
    firebaseKey: '-MTpcliGnhDSsyvILIoJ',
    customer_name: 'Aja',
    order_closed: true,
    cutomer_email: 'aja@email.com',
    customer_phone: 5555551237,
    item_total: 65,
    date: '9/12/2021',
    payment_type: 'Mobile',
    tip_total: 30,
    type: 'In-Person'
  },
  {
    firebaseKey: '-MTpclihMGDRrywIkjor',
    customer_name: 'Trinity',
    order_closed: false,
    cutomer_email: 'trinity@email.com',
    customer_phone: 5555558234,
    item_total: 5,
    date: '9/11/2021',
    payment_type: 'Debit',
    tip_total: 1,
    type: 'In-Person'
  }
];

const showOrders = () => {
  sampleData.forEach((order) => {
    document.querySelector('#app').innerHTML += `<div class="card">
    <div class="card-body">
        <h4 class="card-title">Name: ${order.customer_name}</h4>
        <hr>
        <p class="card-text">Order Closed: ${order.order_closed}</p>
        <hr>
        <p class="card-text">Phone: ${order.customer_phone}</p>
        <hr>
        <p class="card-text">Email: ${order.customer_email}</p>
        <hr>
        <p class="card-text">Order Type: ${order.type}</p>
        <hr>
        <button class="btn btn-outline-secondary" id="details-order-btn--${order.firebaseKey}">Details</button>
        <button class="btn btn-info" id="edit-order-btn--${order.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete-order-btn--${order.firebaseKey}">Delete</button>
    </div>
</div>`;
  });
};

export default showOrders;

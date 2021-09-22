import clearDom from '../views/clearDom';

const revenue = (array) => {
  const firstOrderDate = `${new Date(array.first_order_date).getMonth()}/${new Date(array.first_order_date).getDate()}/${new Date(array.first_order_date).getFullYear()}`;
  const lastOrderDate = `${new Date(array.last_order_date).getMonth()}/${new Date(array.last_order_date).getDate()}/${new Date(array.last_order_date).getFullYear()}`;

  clearDom();
  document.querySelector('#store').innerHTML = `
    <div class="card">
  <div class="card-body">
    <h2 class="card-title">REVENUE</h2>
    <h4 class="card-title">TOTAL REVENUE: $${array.item_total} </h4>
    <hr>
    <p class="card-text">DATE RANGE: ${`${firstOrderDate} - ${lastOrderDate}`} </p>
    <hr>
    <p class="card-text">TOTAL TIPS: $${array.tip_total}</p>
    <hr>
    <p class="card-text">TOTAL CALL IN ORDERS: </p>
    <p class="card-text">TOTAL WALK IN ORDERS: </p>
    <hr>
    <p class="card-text">PAYMENT TYPES: </p>
    <p class="card-text">CASH: </p>
    <p class="card-text">CREDIT: </p>
    <p class="card-text">MOBILE: </p>
  </div>
</div>`;
};

export default revenue;

import clearDom from '../views/clearDom';

const revenue = (array) => {
  const firstOrderDate = `${new Date(array.first_order_date).getMonth()}/${new Date(array.first_order_date).getDate()}/${new Date(array.first_order_date).getFullYear()}`;
  const lastOrderDate = `${new Date(array.last_order_date).getMonth()}/${new Date(array.last_order_date).getDate()}/${new Date(array.last_order_date).getFullYear()}`;

  clearDom();
  document.querySelector('#store').innerHTML = `
    <div class="card rev-card">
  <div class="card-body">
    <h2 class="card-title rev-title">REVENUE</h2>
    <h4 class="card-title rev-total">TOTAL REVENUE: $${array.item_total} </h4>
    <p class="card-text rev-range">DATE RANGE: ${`${firstOrderDate} - ${lastOrderDate}`} </p>
    <p class="card-text rev-tips">TOTAL TIPS: $${array.tip_total}</p>
    <div class="rev-orders">
      <p class="card-text">TOTAL CALL IN ORDERS: ${array.total_call_ins}</p>
      <p class="card-text">TOTAL WALK IN ORDERS: ${array.total_walk_ins}</p>
    </div>
    <div class="rev-payment">
      <p class="card-text">PAYMENT TYPES: </p>
      <p class="card-text">CASH: ${array.cash_payment}</p>
      <p class="card-text">CHECK: ${array.check_payment}</p>
      <p class="card-text">DEBIT: ${array.debit_payment}</p>
      <p class="card-text">CREDIT: ${array.credit_payment}</p>
      <p class="card-text">MOBILE: ${array.mobile_payment}</p>
    </div>
  </div>
</div>`;
};

export default revenue;

import clearDom from '../views/clearDom';

const revenue = (array) => {
  clearDom();
  console.warn(array.first_order_date);
  document.querySelector('#store').innerHTML = `
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">REVENUE</h3>
    <h3 class="card-title">TOTAL REVENUE: $${array.item_total} </h3>
    <p class="card-text">DATE RANGE:${`${array.first_order_date.getMonth()}/${array.first_order_date.getDate()}/${array.first_order_date.getFullYear()} - `} </p>
    <p class="card-text">TOTAL TIPS: $${array.tip_total}</p>
    <p class="card-text">TOTAL CALL IN ORDERS ${array.type}</p>
    <p class="card-text">PAYMENT TYPES:</p>
    <p class="card-text">CASH - </p>
    <p class="card-text">CREDIT - </p>
    <p class="card-text">MOBILE - </p>
  </div>
</div>`;
};

export default revenue;

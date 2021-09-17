const revenue = (order) => {
  document.querySelector('#store').innerHTML = `
    <div class="card">
  <div class="card-body">
    <h3 class="card-title">REVENUE</h3>
    <h3 class="card-title">TOTAL REVENUE: ${order.item_total} </h3>
    <p class="card-text">DATE RANGE: </p>
    <p class="card-text">TOTAL TIPS: ${order.tip_total}</p>
    <p class="card-text">TOTAL CALL IN ORDERS ${order.type}</p>
    <p class="card-text">PAYMENT TYPES:</p>
    <p class="card-text">CASH - </p>
    <p class="card-text">CREDIT - </p>
    <p class="card-text">MOBILE - </p>
  </div>
</div>`;
};

export default revenue;

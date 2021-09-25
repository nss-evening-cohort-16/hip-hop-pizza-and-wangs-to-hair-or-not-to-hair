import { getSingleOrder } from '../helpers/data/ordersData';
import { calcRevenue } from '../helpers/data/paymentData';
import clearDom from '../views/clearDom';

const showItems = (orderFireKey, array) => {
  const totalItemPrice = calcRevenue(array, 'item_price');
  clearDom();
  document.querySelector('#store').innerHTML = `
  <h2>Order Total: $${Number(totalItemPrice)}</h2>
  <div class="items-container" id="item-card-container"></div>
  `;
  array.forEach((obj) => {
    document.querySelector('#item-card-container').innerHTML += `
     
    <div class="card" style="width: 18rem;">
    <div class="card-body item-style">
    <h5 class="card-item-name">${obj.item_name}</h5>
    <h4 class="card-item-price">$${obj.item_price}</h4>
    <hr>
    <i class="fas fa-edit btn btn-info" id="edit-item-btn--${obj.firebaseKey}--${orderFireKey}"></i>
    <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${obj.firebaseKey}--${orderFireKey}"></i>
    </div>
    </div>
    </div>
  `;
  });
  getSingleOrder(orderFireKey).then((orderObj) => {
    document.querySelector('#add-button').innerHTML = `${orderObj.order_closed ? '' : `<button class="btn btn-info btn-lg mb-4" id="add-item-btn--${orderObj.firebaseKey}">Add Another Item</button>`}`;
    document.querySelector('#add-button').innerHTML += `${orderObj.order_closed ? '' : `<button class="btn btn-success btn-lg mb-4" id="go-to-payment-btn--${orderObj.firebaseKey}">Go To Payment</button>`}`;
  });
};

export default showItems;

import { getSingleOrder } from '../helpers/data/ordersData';
import clearDom from '../views/clearDom';

const showItems = (orderFireKey, array) => {
  clearDom();
  array.forEach((obj) => {
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-item-name">${obj.item_name}</h5>
        <h4 class="card-item-price">${obj.item_price}</h4>
        <hr>
        <i class="fas fa-edit btn btn-info" id="edit-item-btn--${obj.firebaseKey}--${orderFireKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${obj.firebaseKey}--${orderFireKey}"></i>
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

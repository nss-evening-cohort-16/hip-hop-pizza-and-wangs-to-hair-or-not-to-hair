import addItemForm from '../forms/addItemForm';
import closeOrderForm from '../forms/closeOrderForm';
import addOrderForm from '../forms/addOrderForm';
import { createOrders, getOrders, getSingleOrder } from '../../helpers/data/ordersData';
import showOrders from '../viewAllOrders';
import getItems from '../../helpers/data/itemsData';
import showItems from '../viewOrderDetails';
import { calcTipTotal, getClosedOrders } from '../../helpers/data/paymentData';
// import revenue from '../revenueView';

const buttonEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }

    if (e.target.id.includes('details-order-btn')) {
      getItems().then(showItems);
    }

    if (e.target.id.includes('go-to-payment-btn')) {
      closeOrderForm();
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }

    if (e.target.id.includes('view-orders-button')) {
      getOrders().then(showOrders);
    }

    if (e.target.id.includes('create-order-button')) {
      addOrderForm();
    }

    // BUTTON EVENT THAT CALLS CLOSED ORDERS FOR REVENUE
    if (e.target.id.includes('view-revenue-button')) {
      getClosedOrders().then(calcTipTotal);
      // calcTipTotal(getClosedOrders()).then(console.warn);
      console.warn(getClosedOrders());
    }
  });
};

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const orderObj = {
        customer_name: document.querySelector('#customer-name').value,
        customer_phone: document.querySelector('#customer-phone').value,
        customer_email: document.querySelector('#customer-email').value,
        timestamp: Date.now(),
        item_total: 0,
        payment_type: '',
        tip_total: 0,
        order_type: document.querySelector('input[name="order-type"]:checked').value,
        order_closed: false
      };
      createOrders(orderObj).then((orderArray) => showOrders(orderArray));
    }
    // CREATE ITEM
    if (e.target.id.includes('submit-item-button')) {
      e.preventDefault();
      const itemObj = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value
      };
      console.warn(itemObj);
    }
  });
};

const domEvents = () => {
  buttonEvents();
  // Button Events

  // Form Events
  formEvents();
  // Dom Events
};

export default domEvents;

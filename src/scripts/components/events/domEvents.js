import addItemForm from '../forms/addItemForm';
import closeOrderForm from '../forms/closeOrderForm';
import addOrderForm from '../forms/addOrderForm';
import { getOrders, getSingleOrder } from '../../helpers/data/ordersData';
import showOrders from '../viewAllOrders';
import getItems from '../../helpers/data/itemsData';
import showItems from '../viewOrderDetails';

// BUTTON EVENTS
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

    if (e.target.id.includes('view-revenue-button')) {
      console.warn('revenue clicked');
    }
  });
};

// FORM EVENTS

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const orderObj = {
        customer_name: document.querySelector('#customer-name').value,
        customer_phone: document.querySelector('#customer-phone').value,
        customer_email: document.querySelector('#customer-email').value,
        timestamp: Date.now()
      };
      console.warn(orderObj);
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
  formEvents();
};

export default domEvents;

import addItemForm from '../forms/addItemForm';
import closeOrderForm from '../forms/closeOrderForm';
import addOrderForm from '../forms/addOrderForm';
import {
  createOrders,
  deleteOrder,
  getOrders,
  getSingleOrder
} from '../../helpers/data/ordersData';
import showOrders from '../viewAllOrders';
import {
  getItems, createItem, getSingleItem, updateItem
} from '../../helpers/data/itemsData';
import showItems from '../viewOrderDetails';

// BUTTON EVENTS
const buttonEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // LAUNCHES THE ADD NEW ITEM FORM
    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }
    // LAUNCHES THE ITEM FORM TO UPDATE
    if (e.target.id.includes('edit-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((itemObj) => addItemForm(itemObj));
    }
    // SHOWS ITEMS CARDS
    if (e.target.id.includes('details-order-btn')) {
      getItems().then(showItems);
    }
    // LAUNCHES THE CLOSE ORDER FORM
    if (e.target.id.includes('go-to-payment-btn')) {
      closeOrderForm();
    }
    // LAUNCHES THE EDIT ORDER FORM
    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }
    // CLICK EVENT FOR DELETING AN ORDER
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this order?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(showOrders);
      }
    }
    // CLICK EVENT FOR SHOWING ALL ORDERS
    if (e.target.id.includes('view-orders-button')) {
      getOrders().then(showOrders);
    }
    // CLICK EVENT FOR LAUNCHING CREATE ORDER FORM
    if (e.target.id.includes('create-order-button')) {
      addOrderForm();
    }
    // CLICK EVENT FOR SHOWING REVENUE PAGE
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
      createItem(itemObj).then((itemArray) => showItems(itemArray));
    }
    // UPDATE ITEM
    if (e.target.id.includes('update-item')) {
      e.preventDefault();
      const itemObj = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value
      };
      updateItem(itemObj).then((itemArray) => showItems(itemArray));
    }
  });
};

const domEvents = () => {
  buttonEvents();
  formEvents();
};

export default domEvents;

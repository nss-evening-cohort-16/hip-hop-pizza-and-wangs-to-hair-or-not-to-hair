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
import { getItems, createItem } from '../../helpers/data/itemsData';
import showItems from '../viewOrderDetails';
import { getClosedOrders, revenueCalculations } from '../../helpers/data/paymentData';
import revenue from '../revenueView';

// BUTTON EVENTS
const buttonEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // LAUNCHES THE ADD NEW ITEM FORM
    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }
    // LAUNCHES THE ITEMS(ORDER DETAILS) PAGE
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
      getClosedOrders().then((tips) => revenue(revenueCalculations(tips)));
      // calcTipTotal(getClosedOrders()).then(console.warn);
      // console.warn(getClosedOrders());
    }
  });
};

// FORM EVENTS

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    const dateOpened = new Date();

    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const orderObj = {
        customer_name: document.querySelector('#customer-name').value,
        customer_phone: document.querySelector('#customer-phone').value,
        customer_email: document.querySelector('#customer-email').value,
        date_opened: dateOpened,
        item_total: 0,
        payment_type: '',
        tip_total: 0,
        order_type: document.querySelector('input[name="order-type"]:checked').value,
        order_closed: false
      };
      console.warn(dateOpened);
      createOrders(orderObj).then((orderArray) => showOrders(orderArray));
    }
    // CREATE ITEM
    if (e.target.id.includes('submit-item-button')) {
      e.preventDefault();
      const itemObj = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value
      };
      createItem(itemObj).then((termArray) => showItems(termArray));
    }
  });
};

const domEvents = () => {
  buttonEvents();
  formEvents();
};

export default domEvents;

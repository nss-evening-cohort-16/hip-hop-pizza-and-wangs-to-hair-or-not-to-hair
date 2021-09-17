import addItemForm from '../forms/addItemForm';
import closeOrderForm from '../forms/closeOrderForm';
import addOrderForm from '../forms/addOrderForm';

const buttonEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }

    if (e.target.id.includes('go-to-payment-btn')) {
      closeOrderForm();
    }

    if (e.target.id.includes('view-orders-button')) {
      console.warn('view orders clicked');
    }

    if (e.target.id.includes('create-order-button')) {
      addOrderForm();
    }

    if (e.target.id.includes('view-revenue-button')) {
      console.warn('revenue clicked');
    }
  });
};

const domEvents = () => {
  buttonEvents();
  // Button Events

  // Form Events

  // Dom Events
};

export default domEvents;

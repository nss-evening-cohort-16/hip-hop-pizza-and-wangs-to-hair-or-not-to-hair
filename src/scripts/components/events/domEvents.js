import addItemForm from '../forms/addItemForm';
import closeOrderForm from '../forms/closeOrderForm';

const buttonEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }

    if (e.target.id.includes('go-to-payment-btn')) {
      closeOrderForm();
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

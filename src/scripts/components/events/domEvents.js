// import showOrders from '../viewAllOrders';
import addOrderForm from '../forms/addOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Button Events
    if (e.target.id.includes('view-orders-button')) {
      console.warn('view orders clicked');
    }

    if (e.target.id.includes('create-order-button')) {
      addOrderForm();
    }

    if (e.target.id.includes('view-revenue-button')) {
      console.warn('revenue clicked');
    }
    // Form Events

    // Dom Events
  });
};

export default domEvents;

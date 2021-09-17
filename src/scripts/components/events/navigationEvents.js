import getOrders from '../../helpers/data/ordersData';
import addOrderForm from '../forms/addOrderForm';
import mainMenuBuilder from '../mainMenu';
import showOrders from '../viewAllOrders';

const navigationEvents = (user) => {
  // RETURN TO MAIN MENU (CLICKING ON RESTAURANT NAME)
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('navbar-home')) {
      mainMenuBuilder(user);
    }
    // VIEW ORDERS BUTTON
    if (e.target.id.includes('view-orders')) {
      getOrders().then(showOrders);
    }

    // CREATE ORDERS BUTTON
    if (e.target.id.includes('create-new')) {
      addOrderForm();
    }
  });
};

export default navigationEvents;

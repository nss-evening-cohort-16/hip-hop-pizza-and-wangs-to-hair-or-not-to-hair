import { getOrders } from '../../helpers/data/ordersData';
import { revenueCalculations } from '../../helpers/data/paymentData';
import getClosedOrders from '../../helpers/data/getClosedOrders';
import addOrderForm from '../forms/addOrderForm';
import mainMenuBuilder from '../mainMenu';
import revenue from '../revenueView';
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

    // VIEW REVENUE BUTTON
    if (e.target.id.includes('view-revenue')) {
      getClosedOrders().then((closedOrdersArray) => revenueCalculations(closedOrdersArray).then(revenue));
    }
  });
};

export default navigationEvents;

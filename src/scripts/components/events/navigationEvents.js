import addOrderForm from '../forms/addOrderForm';
import mainMenuBuilder from '../mainMenu';

const navigationEvents = (user) => {
  // RETURN TO MAIN MENU (CLICKING ON RESTAURANT NAME)
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('navbar-home')) {
      mainMenuBuilder(user);
    }
    // VIEW ORDERS BUTTON

    // CREATE ORDERS BUTTON
    if (e.target.id.includes('create-new')) {
      addOrderForm();
    }
  });
};

export default navigationEvents;

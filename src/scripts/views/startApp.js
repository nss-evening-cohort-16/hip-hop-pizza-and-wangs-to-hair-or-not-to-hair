import mainMenuBuilder from '../components/mainMenu';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import revenue from '../components/revenueView';
import domEvents from '../components/events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents();
  mainMenuBuilder(user);
  revenue();
  console.warn(user);
};

export default startApp;

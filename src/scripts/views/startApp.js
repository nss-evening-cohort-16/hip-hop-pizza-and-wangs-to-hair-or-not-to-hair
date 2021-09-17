import mainMenuBuilder from '../components/mainMenu';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../components/events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  mainMenuBuilder(user);
  console.warn(user);
};

export default startApp;

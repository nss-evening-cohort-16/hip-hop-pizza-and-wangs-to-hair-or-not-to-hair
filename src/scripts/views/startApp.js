import mainMenuBuilder from '../components/mainMenu';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  mainMenuBuilder(user);
  navigationEvents(user);
};

export default startApp;

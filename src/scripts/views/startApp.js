import mainMenuBuilder from '../components/mainMenu';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  mainMenuBuilder(user);
  console.warn(user);
};

export default startApp;

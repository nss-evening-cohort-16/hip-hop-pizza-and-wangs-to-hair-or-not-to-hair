import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;

import logo from '../../assets/images/hhpw-record.png';
import signIn from '../helpers/auth/signIn';

const homeLoggedOut = () => {
  const domString = '<div><button id="google-auth" class="btn btn-danger">LOGIN</button></div>';
  const frontPageLogo = `
    <div class="frontPage">
      <img class ="frontPageLogo" src='${logo}' alt="Hip Hop Pizza Logo" width="400" height="400" class="d-inline-block align-text-top">
      
    </div>
  `;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#app').innerHTML += frontPageLogo;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default homeLoggedOut;

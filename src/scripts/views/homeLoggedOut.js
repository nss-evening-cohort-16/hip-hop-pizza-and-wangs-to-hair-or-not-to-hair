import logo from '../../assets/images/hhpw-record.png';
import signIn from '../helpers/auth/signIn';

const homeLoggedOut = () => {
  const domString = `
  <div class ="frontPage">
      <button id="google-auth" class="btn btn-danger">LOGIN</button></div>
    <div>
      <img class ="frontPageLogo" src='${logo}' alt="Hip Hop Pizza Logo" width="400" height="400" class="d-inline-block align-text-top">
    </div>
  </div>
  `;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default homeLoggedOut;

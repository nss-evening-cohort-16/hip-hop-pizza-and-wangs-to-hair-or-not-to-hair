import logo from '../../assets/images/hhpw-record.png';

const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar navbar-dark" style="background-color: #464442;">
    <div class="container-fluid">
    <a class="navbar-brand" id="navbar-home" href="#">
    <img src="${logo}" alt="pizza" width="50" height="50" class="d-inline-block align-text-top">
    Hip Hop Pizza & Wangs
  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"></a>
          </li>
          <li class="nav-item">
            <a id="view-orders" class="nav-link" href="#">View Orders</a>
          </li>
            <a id="create-new" class="nav-link" href="#">Create Order</a>
          </li>
          </li>
            <a id="view-revenue" class="nav-link" href="#">View Revenue</a>
          </li>
        </ul>
        <div id='logout-button'></div>
      </div>
    </div>
  </nav>
      `;
};

export default navBar;

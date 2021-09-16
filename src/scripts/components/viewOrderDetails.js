const showItems = (array) => {
  array.forEach((obj) => {
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-item-name">${obj.item_name}</h5>
        <h4 class="card-item-price">${obj.item_price}</h4>
        <hr>
        <i class="fas fa-edit btn btn-info" id="update-item-btn"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn"></i>
        </div>
    </div>
  `;
  });
//   document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Another Item</button>';
//   document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="go-to-payment-btn">Go To Payment</button>';
};

export default showItems;

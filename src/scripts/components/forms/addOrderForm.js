import clearDom from '../../views/clearDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `<form id="add-order-form" class="mb-4 submit-vocab-form">
    <h3>Create an Order</h3>
    <div class="form-group">
      <label for="customer-name">Name</label>
      <input type="text" class="form-control" id="customer-name" placeholder="Enter Customer's Name" value="${obj.customer_name || ''}" required>
    </div>
    <div class="form-group">
      <label for="customer-phone">Phone Number</label>
      <input type="number" class="form-control" id="customer-phone" placeholder="Enter Customer's Phone Number" value="${obj.customer_phone || ''}" required>
    </div>
    <div class="form-group">
    <label for="customer-email">Email Address</label>
    <input type="email" class="form-control" id="customer-email" placeholder="Enter Customer's Email Address" value="${obj.customer_email || ''}" required>
    </div>
    <div>
    <input type="radio" id="in-person" name="order-type" value="In-Person"
         checked>
    <label for="in-person">In-Person</label>
    </div>
    <div>
    <input type="radio" id="phone" name="order-type" value="Phone">
    <label for="phone">Phone</label>
    </div>
    <button type="submit" 
    id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}"
    class="btn btn-success">Submit Entry</button>
  </form>`;
};

export default addOrderForm;

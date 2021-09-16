const addOrderForm = (obj = {}) => {
  document.querySelector('#app').innerHTML = `<form id="submit-vocab-form" class="mb-4 submit-vocab-form">
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
    <button type="submit" 
    id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}"
    class="btn btn-success">Submit Entry</button>
  </form>`;
};

export default addOrderForm;

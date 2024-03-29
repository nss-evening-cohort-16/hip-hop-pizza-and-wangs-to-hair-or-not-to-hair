import clearDom from '../../views/clearDom';

const addItemForm = (orderId, obj = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
      <form id="add-item-form" class="mb-4">
      <h3>Add an Item</h3>
        <div class="form-group">
          <label for="itemName">Item Name</label>
          <input type="text" class="form-control" id="itemName" placeholder="Name" value="${obj.item_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="itemPrice">Item Price</label>
          <input type="number" class="form-control" id="itemPrice" placeholder="Price" value="${obj.item_price || ''}" required>
        </div>
        <div class="form-button">
            <button id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}--${orderId}` : `submit-item-button--${orderId}`}" class="btn btn-success">Submit Item</button>
        </div>
      </form>`;
};

export default addItemForm;

import clearDom from '../../views/clearDom';

const addItemForm = (obj) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
      <form id="add-item-form" class="mb-4">
        <div class="form-group">
          <label for="itemName">Item Name</label>
          <input type="text" class="form-control" id="itemName" placeholder="Name" value="${obj.item_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="itemPrice">Item Price</label>
          <input type="text" class="form-control" id="itemPrice" placeholder="Price" value="${obj.price || ''}" required>
        </div>
        <div class="form-button">
            <button id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="btn btn-success">Submit Item</button>
        </div>
      </form>`;
};

export default addItemForm;

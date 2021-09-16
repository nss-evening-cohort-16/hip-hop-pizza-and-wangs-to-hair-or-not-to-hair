const addItemForm = () => {
  document.querySelector('#form-container').innerHTML = `
      <form id="add-item-form" class="mb-4">
        <div class="form-group">
          <label for="itemName">Item Name</label>
          <input type="text" class="form-control" id="itemName" placeholder="Name" required>
        </div>
        <div class="form-group">
          <label for="itemPrice">Item Price</label>
          <input type="text" class="form-control" id="itemPrice" placeholder="Price" required>
        </div>
        <div class="form-button">
            <button id="submit-item-button" class="btn btn-success">Submit Item</button>
        </div>
      </form>`;
};

export default addItemForm;

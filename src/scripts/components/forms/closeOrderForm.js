const closeOrderForm = () => {
  document.querySelector('#form-container').innerHTML = `
      <form id="close-order-form" class="mb-4">
        <div class="form-group">
          <label for="paymentType">Payment Type</label>
          <select name="paymentType" class="form-control" id="paymentType" required>
            <option value="Cash">Cash</option>  
            <option value="Credit">Credit</option>        
            <option value="Debit">Debit</option>
            <option value="Check">Check</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div class="form-group">
          <label for="tipAmount">Tip Amount</label>
          <input type="number" class="form-control" id="tipAmount" placeholder="Price" required>
        </div>
        <div class="form-button">
            <button id="close-order-button" class="btn btn-success">Close Order</button>
        </div>
      </form>`;
};

export default closeOrderForm;

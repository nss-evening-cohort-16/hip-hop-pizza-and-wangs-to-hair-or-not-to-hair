// Button Events

// Form Events

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const orderObj = {
        customer_name: document.querySelector('#customer-name').value,
        customer_phone: document.querySelector('#customer-phone').value,
        customer_email: document.querySelector('#customer-email').value,
        timestamp: Date.now()
      };
      console.warn(orderObj);
    }
    // CREATE ITEM
    if (e.target.id.includes('submit-item-button')) {
      e.preventDefault();
      const itemObj = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value
      };
      console.warn(itemObj);
    };
  });
};

// Dom Events

export default formEvents;

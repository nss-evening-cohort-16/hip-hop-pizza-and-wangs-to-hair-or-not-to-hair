import { deleteItem, getItems } from './itemsData';
import { deleteOrder } from './ordersData';

const deleteAllItems = (orderId) => new Promise((resolve, reject) => {
  getItems(orderId).then((orderItemsArray) => {
    const deleteItems = orderItemsArray.map((item) => deleteItem(item.firebaseKey));
    Promise.all([...deleteItems]).then(() => resolve(deleteOrder(orderId)));
  }).catch(reject);
});

export default deleteAllItems;

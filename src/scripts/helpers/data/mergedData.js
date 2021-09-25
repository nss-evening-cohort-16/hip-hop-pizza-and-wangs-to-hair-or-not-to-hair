import { deleteItem, getItems } from './itemsData';
import { deleteOrder } from './ordersData';

const deleteAllOrderItems = (orderId) => new Promise((resolve, reject) => {
  getItems(orderId).then((orderItemsArray) => {
    const deleteItems = orderItemsArray.map((item) => deleteItem(item.firebaseKey));
    Promise.all([...deleteItems]).then(() => resolve(deleteOrder(orderId)));
  }).catch(reject);
});

// const updateOrderItemTotals = async (array, firebaseKey) => {
//   const itemTotals = await createItem(itemObj);
//   const calcItemTotals = await updateOrder();
//   return { ...itemTotals, calcItemTotals };
// };

export default deleteAllOrderItems;

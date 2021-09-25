import { deleteItem, getItems } from './itemsData';
import { deleteOrder } from './ordersData';
import { calcRevenue } from './paymentData';

const deleteAllOrderItems = (orderId) => new Promise((resolve, reject) => {
  getItems(orderId).then((orderItemsArray) => {
    const deleteItems = orderItemsArray.map((item) => deleteItem(item.firebaseKey));
    Promise.all([...deleteItems]).then(() => resolve(deleteOrder(orderId)));
  }).catch(reject);
});

const getItemTotals = async (array, firebaseKey) => {
  const itemTotals = await getItems(firebaseKey);
  const calcItemTotals = await calcRevenue(array, 'item.price');
  return { ...itemTotals, calcItemTotals };
};

export { deleteAllOrderItems, getItemTotals };

import getClosedOrders from './getClosedOrders';
import { getItems } from './itemsData';

const orderItemsTotal = async () => {
  const closedOrders = await getClosedOrders();
  const itemPromiseArray = closedOrders.map((items) => getItems(items.firebaseKey));
  const itemPromise = await Promise.all(itemPromiseArray).then((items) => {
    const closedItems = [];
    items.forEach((item) => {
      closedItems.push(...item);
    });
    return closedItems;
  });
  return itemPromise;
};

export default orderItemsTotal;

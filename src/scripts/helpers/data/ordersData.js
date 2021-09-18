import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR ORDERS

const dbUrl = firebaseConfig.databaseURL;

// GET ORDERS
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
  console.warn(getOrders);
});

// CREATE ORDERS
const createOrders = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          getOrders(orderObj).then((orderArray) => resolve(orderArray));
        });
    }).catch((error) => reject(error));
});

export { getOrders, createOrders };

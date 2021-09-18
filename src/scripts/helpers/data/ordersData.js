import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR ORDERS

const dbUrl = firebaseConfig.databaseURL;

// GET ORDERS
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE ORDERS
const createOrders = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          getOrders().then((orderArray) => resolve(orderArray));
        });
    }).catch((error) => reject(error));
});

// GET SINGLE ORDER
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export { getOrders, getSingleOrder, createOrders };

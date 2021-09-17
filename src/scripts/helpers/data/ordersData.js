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

export default getOrders;

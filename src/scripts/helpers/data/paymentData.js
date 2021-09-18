import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getClosedOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="order_closed"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getClosedOrders;

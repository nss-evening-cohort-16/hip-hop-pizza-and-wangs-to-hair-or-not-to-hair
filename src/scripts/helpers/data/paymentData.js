import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getClosedOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="order_closed"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const calcTipTotal = (array) => {
  let tipTotal;

  array.forEach((item) => {
    console.warn(item.tip_total);
    tipTotal += item.tip_total;
  });
  console.warn(tipTotal);
  return tipTotal;
};

export { getClosedOrders, calcTipTotal };

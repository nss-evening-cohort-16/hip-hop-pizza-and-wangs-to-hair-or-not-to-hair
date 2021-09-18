import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getClosedOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="order_closed"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const calcTotalRevenue = (array) => (array.reduce((a, b) => (a + b.item_total), 0));

const calcTipTotal = (array) => (array.reduce((a, b) => (a + b.tip_total), 0));
// REDUCE FUNCTION ABOVE DOES WHAT CODE BELOW DOES
//   let tipTotal = 0;
//   array.forEach((item) => {
//     console.warn(item.tip_total);
//     tipTotal += item.tip_total;
//   });
//   return tipTotal;

const revenueCalculations = (array) => {
  const revenueData = {
    item_total: calcTotalRevenue(array),
    tip_total: calcTipTotal(array)
  };
  return revenueData;
  // NEED TO CONTINUE FUNCTIONS TO UPDATE AND TO CREATE KEYS TO PUSH INFO INTO SO IT CAN BE PASSED TO REVENUE PAGE
};

export {
  getClosedOrders, calcTipTotal, calcTotalRevenue, revenueCalculations
};

import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// PROMISE PULLING CLOSED ORDERS
const getClosedOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="order_closed"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CALCULATES TOTAL REVENUE FROM CLOSED ORDERS
const calcTotalRevenue = (array) => (array.reduce((a, b) => (a + b.item_total), 0));

// CALCULATES TOTAL TIP EARNINGS FROM CLOSED ORDERS
const calcTipTotal = (array) => (array.reduce((a, b) => (a + b.tip_total), 0));
// REDUCE FUNCTION ABOVE DOES WHAT CODE BELOW DOES
//   let tipTotal = 0;
//   array.forEach((item) => {
//     console.warn(item.tip_total);
//     tipTotal += item.tip_total;
//   });
//   return tipTotal;

// FINDS THE EARLIEST ORDER DATE CLOSED ORDERS
const firstDate = (array) => {
  const dates = array.map((x) => x.date_opened);
  // dates.sort((a, b) => (a > b));
  const date = dates.shift();
  console.warn('Parsed?', date);
  return date;
};
  // const sortedDates = dates.sort((a, b) => (Date.parse(a) > Date.parse(b)));
  // console.warn(sortedDates);
  // return sortedDates;

// FINDS THE OLDEST ORDER DATE CLOSED ORDERS
// const oldestDate = (array) => (array.reduce((prev, cur) => (Date.parse(prev) < Date.parse(cur) ? prev : cur)));

const revenueCalculations = (array) => {
  const revenueData = {
    item_total: calcTotalRevenue(array),
    first_order_date: firstDate(array),
    // last_order_date: oldestDate(array),
    tip_total: calcTipTotal(array)
  };
  console.warn(revenueData);
  return revenueData;
  // NEED TO CONTINUE FUNCTIONS TO UPDATE AND TO CREATE KEYS TO PUSH INFO INTO SO IT CAN BE PASSED TO REVENUE PAGE
};

export {
  getClosedOrders, calcTipTotal, calcTotalRevenue, revenueCalculations
};

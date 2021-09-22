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

// const tallyCounter = (array, condition) => {

// };

// FINDS THE EARLIEST ORDER DATE CLOSED ORDERS
const firstDate = (array) => {
  const sorter = (a, b) => (new Date(a.date_opened).getTime() - new Date(b.date_opened).getTime());
  const sortedArray = array.sort(sorter);
  // CAN USE TO FIND THE NEWEST DATE
  // const lastIndex = sortedArray[sortedArray.length - 1];
  return sortedArray[0].date_opened;
  // const date = dates.shift();
};

// FINDS THE OLDEST ORDER DATE CLOSED ORDERS
const oldestDate = (array) => {
  const sorter = (a, b) => (new Date(a.date_closed).getTime() - new Date(b.date_closed).getTime());
  const sortedArray = array.sort(sorter);
  return sortedArray[sortedArray.length - 1].date_closed;
};

const revenueCalculations = (array) => {
  const revenueData = {
    item_total: calcTotalRevenue(array),
    first_order_date: firstDate(array),
    last_order_date: oldestDate(array),
    tip_total: calcTipTotal(array)
    // total_call-ins: tallyCounter(array, )
  };

  return revenueData;
  // NEED TO CONTINUE FUNCTIONS TO UPDATE AND TO CREATE KEYS TO PUSH INFO INTO SO IT CAN BE PASSED TO REVENUE PAGE
};

export {
  getClosedOrders, calcTipTotal, calcTotalRevenue, revenueCalculations
};

import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ITEMS

const getItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="order_Id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CREATE ITEMS

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, body)
        .then(() => {
          getItems(itemObj.order_Id).then((itemArray) => resolve(itemArray));
        });
    }).catch(reject);
});

const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItems().then(resolve))
    .catch(reject);
});

// GET SINGLE ITEM

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE ITEM
const deleteItem = (firebaseKey, orderFireKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItems(orderFireKey).then((itemArray) => resolve(itemArray));
    })
    .catch(reject);
});

export {
  getItems,
  createItem,
  getSingleItem,
  deleteItem,
  updateItem,
};

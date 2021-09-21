import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ITEMS

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json`)
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
          getItems().then((itemArray) => resolve(itemArray));
        });
    }).catch(reject);
});

// GET SINGLE ITEM

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE ITEM

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItems().then(resolve);
    })
    .catch(reject);
});

export {
  getItems,
  createItem,
  getSingleItem,
  deleteItem
};

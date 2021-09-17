import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/item_details.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getItems;

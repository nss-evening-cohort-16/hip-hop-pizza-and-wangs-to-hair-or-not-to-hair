const clearDom = () => {
  document.querySelector('#main-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
};

export default clearDom;

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
      <div id="main-buttons"></div>
      <div id="form-container"></div>
      <div id="store"></div>
      <div id="view"></div>
      <div id="add-button"></div>
  </div>`;
};

export default domBuilder;

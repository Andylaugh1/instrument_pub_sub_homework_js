const PubSub = require('../helpers/pub_sub.js')

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.displayEvent = function () {
  PubSub.subscribe('InstrumentFamily:ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function (instrumentFamily) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = 'The instrument family is ' + instrumentFamily.name + ',' + instrumentFamily.description + 'some examples of instruments in this family are ' + instrumentFamily.instruments;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
}

module.exports = InstrumentInfoView;

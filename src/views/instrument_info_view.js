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
  const infoParagraph2 = document.createElement('p');
  infoParagraph.textContent = 'The instrument family is ' + instrumentFamily.name;
  infoParagraph2.textContent = instrumentFamily.description;
  const instrumentList = this.createList(instrumentFamily.instruments);
  console.log(instrumentList);

  this.container.innerHTML = '';

  this.container.appendChild(infoParagraph);
  this.container.appendChild(infoParagraph2);
  this.container.appendChild(instrumentList);
};

InstrumentInfoView.prototype.createList = function (instrumentFamily) {
  const instrumentList = document.createElement('ul');

  for (let instrument of instrumentFamily) {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    instrumentList.appendChild(listItem);
  }
  return instrumentList;
}

module.exports = InstrumentInfoView;

const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelectView = function (element) {
  this.element = element;
};

InstrumentSelectView.prototype.setUpInstrumentView = function () {
  PubSub.subscribe('InstrumentFamilies:ready', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });

};

InstrumentSelectView.prototype.populate = function (instrumentFamilyData) {
  instrumentFamilyData.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamily.name;
    option.value = index;
    this.element.appendChild(option);
  })
}
module.exports = InstrumentSelectView;

const PubSub = require('../helpers/pub_sub');

Const InstrumentSelectView = function (element) {
  this.element = element;
};

InstrumentSelectView.prototype.setUpInstrumentView = function () {
  PubSub.subscribe('InstrumentFamilies:ready', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  })
}
module.exports = InstrumentSelectView

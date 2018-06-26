const InstrumentSelectView = require('./views/instrument_select_view.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentFamiliesDropdown = new InstrumentSelectView(selectElement);
  instrumentFamiliesDropdown.setUpInstrumentView();

  const instrumentFamiliesDataSource = new InstrumentFamilies();
  instrumentFamiliesDataSource.setUpEvent();

  const instrumentInfoDiv = document.querySelector('div#instrument-family-info');
  const instrumentFamilyData = new InstrumentInfoView(instrumentInfoDiv);
  instrumentFamilyData.displayEvent();

});

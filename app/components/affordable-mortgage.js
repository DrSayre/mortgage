import Ember from 'ember';

export default Ember.Component.extend({
  selectedFreq: {
    id: 0
  },
  paymentSchedule: [
    {freqName: 'Weekly', id: 4.333},
    {freqName: 'Bi-Weekly', id: 2.167},
    {freqName: 'Twice a Month', id: 2},
    {freqName: 'Monthly', id: 1}
  ],
	housePrice: function() {
    var income = this.get('income');
    var saved = this.get('saved');
    var freq = this.get('selectedFreq').id;
    var rate = this.get('rate');
    if ((income === undefined) || (!income)) {
      income = 0;
    }
    if (isNaN(income)) {
      income = 0;
    }
    if ((saved === undefined) || (!saved)) {
      saved = 0;
    }
    if (isNaN(saved)) {
      saved = 0;
    }
    var c = parseFloat(rate/12);
    var payment = (income * freq)/4;
    var housePrice = (((payment * (Math.pow((1 + c), 180) - 1)/(c*Math.pow((1 + c),180)))) + parseFloat(saved)).toFixed(2);
    if (isNaN(housePrice)) {
      return 0;
    }
    return housePrice;
  }.property('income', 'saved', 'selectedFreq.id')
});

import DS from 'ember-data';

export default DS.Model.extend({
  fifteenYearFixed: DS.attr('number'),
  rateDate: DS.attr('date'),
  percentRate: Ember.computed('fifteenYearFixed', function() {
  	return this.get('fifteenYearFixed') * 100;
  })
});

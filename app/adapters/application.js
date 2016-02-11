import DS from 'ember-data';
// import ActiveModelAdapter from 'active-model-adapter';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1'
});

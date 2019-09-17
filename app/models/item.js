import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  src: DS.attr('string'),
});

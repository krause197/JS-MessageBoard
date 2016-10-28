import DS from 'ember-data';

export default DS.Model.extend({
  anwser: DS.attr(),
  author: DS.attr(),
  score: DS.attr()
});

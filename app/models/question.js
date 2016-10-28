import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  tags: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});

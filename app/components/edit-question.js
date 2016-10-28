import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },

    edit(question) {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes'),
        tags: this.get('tags'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});

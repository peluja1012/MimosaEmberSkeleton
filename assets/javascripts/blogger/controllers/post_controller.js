import Ember from 'ember';

var PostController = Ember.ObjectController.extend({
  /* feature posts-edit:start */
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
  /* feature posts-edit:end */
});

export default PostController;

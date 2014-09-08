import Ember from 'ember';

var Router = Ember.Router.extend();

Router.map(function() {
  /* feature about */
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

export default Router;

import Ember from 'ember';
import App from 'app';
import posts from '../data/posts';

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});
import Ember from 'ember';
import App from 'app';
import posts from '../data/posts';

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

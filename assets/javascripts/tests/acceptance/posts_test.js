import Ember from 'ember';
import startApp from 'tests/helpers/start_app';

var App;

window.module('Acceptances - Posts', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

window.test("displays all recent posts", function() {
  expect(1);

  visit('/posts');

  andThen(function() {
    var header = find('thead:contains("Recent Posts")');
    var posts = find('tbody > tr', header.closest('table'));

    equal(posts.length, 2, "There are two recent posts.");
  });
});

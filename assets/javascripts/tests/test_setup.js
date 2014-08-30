import Ember from 'ember';
import EmberQUnit from 'vendor/ember-qunit/main';
import startApp from 'tests/helpers/start_app';

export default function() {
  var App = startApp();
  window.setResolver(Ember.DefaultResolver.create({ namespace: App }));
}

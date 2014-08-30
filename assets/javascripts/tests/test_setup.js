import Ember from 'ember';
import startApp from 'tests/helpers/start_app';

export default function() {
  var App = startApp();
  setResolver(Ember.DefaultResolver.create({ namespace: App }));
}

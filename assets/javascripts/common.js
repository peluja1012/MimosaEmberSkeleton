requirejs.config({
  baseUrl:  "/javascripts",
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    'showdown': {
      exports: 'Showdown'
    }
  },
  paths: {
    'app': 'blogger/app',
    'jquery': 'vendor/jquery/jquery',
    'handlebars': 'vendor/handlebars/handlebars',
    'ember': 'vendor/ember/ember',
    'showdown': 'vendor/showdown/showdown',
    'moment': 'vendor/moment/moment'
  }
});

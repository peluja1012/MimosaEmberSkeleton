require(['common'], function() {

  require(['app', 'templates'], function(App) {
    window.App = App['default'].create();
  });
});

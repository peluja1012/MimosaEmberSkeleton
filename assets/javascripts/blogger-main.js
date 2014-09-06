require(['common'], function() {
  require(['app', 'blogger/modules', 'templates'], function(App, modules) {
    App = App['default'] || App;
    window.Blogger = App.createWithMixins(modules);
  });
});

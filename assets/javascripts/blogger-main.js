require(['common'], function() {
  require(['app', 'blogger/modules'], function(App, modules) {
    App = App['default'] || App;
    window.Blogger = App.createWithMixins(modules);
  });
});

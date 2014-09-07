QUnit.config.autostart = false;

require.config(Mimosa.EmberTest.requireConfig);

require(['ember'], function(Ember) {
  require({ 'baseUrl': '/ember-test' }, ['vendor/ember-qunit/main'], function(EmberQUnit) {
    EmberQUnit.globalize();

    require({ 'baseUrl': '/js' }, ['tests/create_test_app', '../testem'], function(testApp) {
      testApp = testApp['default'] || testApp;
      setResolver(Ember.DefaultResolver.create({ namespace: testApp() }));

      require(Mimosa.EmberTest.specFiles, function() {
        QUnit.start();
      });
    });
  });
});

QUnit.config.autostart = false;

require.config(window.MIMOSA_TEST_REQUIRE_CONFIG);

// requirejs kung-fu incoming

// because ember qunit wants ember around
// and ember is in the app, so bring it in
// CONFIG
// config.emberTest.emberPath
require(['ember'], function(Ember) {

  // change baseUrl to point to .mimosa/testemQUnit to
  // to pull in ember-qunit, tests assets not in app
  require.config({"baseUrl": "/js2"});

  // pull in ember qunit
  require(['ember-qunit/main'], function(equnit) {

    // ensure ember-qunit is attached to window
    equnit.globalize();

    // point back at the app for all other things
    require.config({"baseUrl": "/js"});

    // CONFIG
    // config.emberTest.testAppFactory
    // config.emberTest.testPrerequisitePaths (shown here as being empty)
    require(['tests/test_app', 'templates', '../testem'], function(testApp) {
      testApp = testApp['default'] || testApp;
      setResolver(Ember.DefaultResolver.create({ namespace: testApp() }));

      require(window.MIMOSA_TEST_SPECS, function() {
        QUnit.start();
      });
    });
  });
});

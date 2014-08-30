QUnit.config.autostart = false;

require.config(window.MIMOSA_TEST_REQUIRE_CONFIG);

// requirejs kung-fu incoming

// because ember qunit wants ember around
// and ember is in the app, so bring it in
require(['ember'], function() {

  // change baseUrl to point to .mimosa/testemQUnit to
  // to pull in ember-qunit, tests assets not in app
  require.config({"baseUrl": "/js2"});

  // pull in ember qunit
  require(['ember-qunit/main'], function(equnit) {

    // ensure ember-qunit is attached to window
    equnit.globalize();

    // point back at the app for all other things
    require.config({"baseUrl": "/js"});

    // test-setup, templates, testem
    require(['tests/create_test_app', 'templates', '../testem'], function(testApp) {

      var App = (testApp['default'] || testApp)();
      setResolver(Ember.DefaultResolver.create({ namespace: App }));

      require(window.MIMOSA_TEST_SPECS, function(module) {
        QUnit.start();
      });
    });
  });
});


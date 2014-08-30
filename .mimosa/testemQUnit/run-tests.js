QUnit.config.autostart = false;

require.config(window.MIMOSA_TEST_REQUIRE_CONFIG);

require(['app', 'templates', '../testem'], function() {
  require(['tests/test_setup'], function(testSetup) {
    testSetup['default']();

    require(window.MIMOSA_TEST_SPECS, function(module) {
      QUnit.start();
    });
  });
});

window.MIMOSA_TEST_REQUIRE_CONFIG = {
  "baseUrl": "/js",
  "paths": {
    "app": "blogger/app",
    "jquery": "vendor/jquery/jquery",
    "handlebars": "vendor/handlebars/handlebars",
    "ember": "vendor/ember/ember",
    "lodash": "vendor/lodash/lodash.compat",
    "showdown": "vendor/showdown/showdown",
    "moment": "vendor/moment/moment"
  },
  "shim": {
    "handlebars": {
      "exports": "Handlebars"
    },
    "ember": {
      "deps": [
        "handlebars",
        "jquery"
      ],
      "exports": "Ember"
    },
    "showdown": {
      "exports": "Showdown"
    }
  }
};
window.MIMOSA_TEST_SPECS = [
  "tests/acceptance/posts_test",
  "tests/unit/controllers/posts_test"
];
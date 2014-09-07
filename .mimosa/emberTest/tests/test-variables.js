window.Mimosa = window.Mimosa || {};

window.Mimosa.EmberTest = {
  requireConfig: {
  "baseUrl": "/js",
  "paths": {
    "app": "blogger/app",
    "jquery": "vendor/jquery/jquery",
    "handlebars": "vendor/handlebars/handlebars",
    "ember": "vendor/ember/ember",
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
},
  specFiles: [
  "tests/acceptance/posts_test",
  "tests/unit/controllers/posts_test"
]
};

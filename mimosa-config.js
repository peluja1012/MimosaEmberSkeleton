exports.config = {
  minMimosaVersion:"2.3.1",
  modules: [
    // misc
    'jshint',
    'bower',

    // ember-specific stuff
    'ember-module-import@0.2.0',
    //'ember-test',

    // compilers
    'es6-module-transpiler',
    'copy',
    'ember-handlebars@2.0.0',
    'sass',
    'stream-copy',

    // server support
    'live-reload',
    'server',
    'server-reload',

    // packaging
    'combine',
    'minify-js',
    'minify-css',
    'minify-img',
    'require@3.0.0',
    'web-package',
    'handlebars-on-window',
    'fix-rjs-ember',

    'defeature'

  ],
  sass: {
    // want to use node-sass rather than ruby compiler
    lib: require('node-sass')
  },
  require: {
    optimize: {
      overrides: {
        paths: {
          // want to use ember.prod for packaging
          ember: 'vendor/ember/ember.prod'
        }
      }
    }
  },
  emberHandlebars: {
    emberPath: "ember",
    helpers:["blogger/helpers/helpers"]
  },
  emberModuleImport: {
    apps: [{
      namespace: "blogger",
      manifestFile: "modules",
      additional: ["router"]
    }]
  },
  //emberTest: {
  //  apps: [{
  //    testLocation: 'tests',
  //    testAppFactory: 'create_test_app',
  //    stylesheetPaths: [
  //      '/public/stylesheets/vendor.css',
  //      '/public/stylesheets/blogger.css'
  //    ]
  //  }]
  //},
  template: {
    nameTransform: /.*\/templates\//,
    writeLibrary: false,
  },
  combine: {
    folders:[{
      folder: "stylesheets/vendor",
      output: "stylesheets/vendor.css"
    }]
  },
  bower: {
    copy: {
      mainOverrides: {
        showdown: ["compressed/showdown.js"],
        bootstrap: ["dist/css/bootstrap.css", "dist/js/bootstrap.js"]
      }
    }
  },
  server: {
    views: {
      compileWith: "handlebars",
      extension: "hbs"
    }
  }
};

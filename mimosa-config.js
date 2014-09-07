exports.config = {
  minMimosaVersion:"2.3.1",
  modules: [
    // misc
    'jshint',
    'bower',

    // ember specific stuff
    'ember-module-import',
    'ember-test',

    // compilers
    'es6-module-transpiler',
    // 'esperanto' // try this at some point instead of es6 mod transpiler
    'copy',
    'ember-handlebars',
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
    'require',
    'web-package',
    'handlebars-on-window',
    'fix-rjs-ember'
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
  emberTest: {
    apps: [{
      testLocation: 'tests',
      testAppFactory: 'create_test_app',
      stylesheetPaths: [
        '/public/stylesheets/vendor.css',
        '/public/stylesheets/blogger.css',
        'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css'
      ]
    }]
  },
  template: {
    nameTransform: /.*\/templates\//,
    writeLibrary: false,
  },
  combine: {
    folders:[{
      folder:"stylesheets/vendor",
      output:"stylesheets/vendor.css"
    }]
  },
  bower: {
    copy: {
      mainOverrides: {
        showdown:["compressed/showdown.js"]
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

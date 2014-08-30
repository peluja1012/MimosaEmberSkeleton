exports.config = {
  minMimosaVersion:"2.3.1",
  modules: [
    // misc
    'jshint',
    'bower',

    // compilers
    'ember-module-import',
    'es6-module-transpiler',
    'copy',
    'ember-handlebars',
    'sass',
    'stream-copy',

    // server support
    'live-reload',
    'server',
    'server-reload',

    // testing
    'testem-qunit',

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
  },
  testemQUnit: {
    executeDuringWatch: false,
    safeAssets: ['testem.json', 'runner.html', 'run-tests.js', 'ember-qunit']
  }
};

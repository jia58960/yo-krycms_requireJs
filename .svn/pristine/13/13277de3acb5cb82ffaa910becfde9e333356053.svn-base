 require.config({
    // baseUrl: "../bower_components",
    paths: {
    // lib
    angular: '../bower_components/angular/angular',
    jquery: '../bower_components/jquery/jquery',
    domReady: 'domReady',
    ngResource: '../bower_components/angular-resource/angular-resource',
    ngCookies: '../bower_components/angular-cookies/angular-cookies',
    ngSanitize: '../bower_components/angular-sanitize/angular-sanitize',
    ngAnimate: '../bower_components/angular-animate/angular-animate',
    uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
    'ui.bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
    // 'ui.bootstrap.tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    select2:'../js/select2/select2.min',
    'ui.select2':'../bower_components/angular-ui-select2/src/select2',
    tinymce: '../bower_components/tinymce/tinymce.min',
    'ui.tinymce':'../bower_components/angular-ui-tinymce/src/tinymce',
    ngMoment:'../bower_components/angular-moment/angular-moment',
    moment:'../bower_components/moment/moment',
    //Form Uitilities
    rcDisabled:'../bower_components/angularjs-utilities/src/modules/rcDisabled',
    rcForm: '../bower_components/angularjs-utilities/src/modules/rcForm',
    rcWizard: '../bower_components/angularjs-utilities/src/modules/rcWizard',
    rcMailgun: '../bower_components/angularjs-utilities/src/modules/rcMailgun',
    toaster: '../bower_components/AngularJS-Toaster/toaster'
  },
    
  shim: {
    angular: {
      deps: [ 'jquery'],
      exports: 'angular'
    },
    select2:{
      deps:['jquery']
    },
    uiRouter:{
      deps:['angular']
    },
    ngResource:{
      deps:['angular']
    },
    ngSanitize:{
      deps:['angular']
    },
    ngAnimate:{
      deps:['angular']
    },
    'ui.bootstrap.tpls': {
      deps: ['angular']
    },
    'ui.bootstrap': {
      deps: ['angular']
    },
    'ui.select2': {
      deps: ['angular']
    },
    'ui.tinymce':{
     deps: ['angular']
    },
    ngMoment:{
      deps:['angular','moment']
    },
    rcForm: {
      deps:['angular','moment']
    },
    rcDisabled: {
      deps:['angular','moment']
    },
    rcWizard:{
      deps:['angular','moment']
    },
    rcMailgun: {
      deps:['angular','moment']
    },
    toaster: {
      deps:['angular','ngAnimate']
    }
  },
   deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
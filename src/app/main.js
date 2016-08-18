/**
 * Configure module loading using RequireJS
 */

'use strict';

require.config({
  // Aliases for vendor javascript libraries
  paths: {
    angular: '../../bower_components/angular/angular',
    uiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router',
    angularAnimate: '../../bower_components/angular-animate/angular-animate',
    jQuery: '../../bower_components/jquery/dist/jquery',
    domReady: '../../bower_components/domReady/domReady',
  },
  // Angular does not support AMD out of the box so requires a shim
  shim: {
    angular: {
      exports: 'angular',
    },
    uiRouter: {
      deps: ['angular']
    },
    angularAnimate: {
      deps: ['angular']
    }
  },
  // Bootstrap the application manually
  deps: ['./bootstrap']
})

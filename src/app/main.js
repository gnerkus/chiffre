/**
 * Configure module loading using RequireJS
 */

'use strict';

require.config({
  // Aliases for vendor javascript libraries
  paths: {
    angular: '../libs/angular/angular',
    uiRouter: '../libs/angular-ui-router/release/angular-ui-router',
    angularAnimate: '../libs/angular-animate/angular-animate',
    jQuery: '../libs/jquery/dist/jquery',
    domReady: '../libs/domReady/domReady',
    lodash: '../libs/lodash/dist/lodash',
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

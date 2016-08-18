define([
  'angular',
  'app/app.config'
], function(angular, config) {
  'use strict';

  // Main module of the application
  return angular
          .module('chiffre', [
            uiRouter, ngAnimate
          ])
          .config(config);
});

define([
  'angular',
  'app.config',
  './calc/calc.controller'
], function(angular, config, calcCtrl) {
  'use strict';

  // Main module of the application
  return angular
          .module('chiffre', [
            'ui.router', 'ngAnimate'
          ])
          .config(config)
          .controller('CalcController', calcCtrl);
});

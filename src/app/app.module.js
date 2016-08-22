define([
  'angular',
  'app.config',
  // Load calculator module
  './calc/calc.controller',
  './calc/phone-input.directive',
  './calc/currency-input.directive',
  // Load profile module
  './profile/profile.controller',
  './profile/profile.service',
  './profile/autotab.directive',
  // Load settings module
  './settings/settings.service',
  './settings/settings.controller',
], function(angular, config, calcCtrl, phoneDir, curDir, profCtrl, profSvc, autoDir, setSvc, setCtrl) {
  'use strict';

  // Main module of the application
  return angular
          .module('chiffre', [
            'ui.router', 'ngAnimate'
          ])
          .config(config)
          .factory('ProfileService', profSvc)
          .factory('SettingsService', setSvc)
          .controller('CalcController', calcCtrl)
          .controller('ProfileController', profCtrl)
          .controller('SettingsController', setCtrl)
          .directive('phoneInput', phoneDir)
          .directive('currencyInput', curDir)
          .directive('autoTabTo', autoDir);
});

define([
  'angular',
  'app.config',
  // Load calculator module
  './calc/calc.controller',
  './calc/phone-input.directive',
  // Load profile module
  './profile/profile.controller',
  './profile/profile.service',
  // Load settings module
  './settings/settings.service',
  './settings/settings.controller',
], function(angular, config, calcCtrl, phoneDir, profCtrl, profSvc, setSvc, setCtrl) {
  'use strict';

  // Main module of the application
  return angular
          .module('chiffre', [
            'ui.router', 'ngAnimate'
          ])
          .config(config)
          .controller('CalcController', calcCtrl)
          .controller('ProfileController', profCtrl)
          .directive('phoneInput', phoneDir)
          .controller('SettingsController', setCtrl)
          .factory('ProfileService', profSvc)
          .factory('SettingsService', setSvc);
});

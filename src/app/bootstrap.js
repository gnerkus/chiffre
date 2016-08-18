require([
  'angular',
  'app.module',
  'uiRouter',
  'angularAnimate',
], function(angular, app, uiRouter, ngAnimate) {
  'use strict';

  // Bootstrap application when the DOM is ready
  require(['domReady!'], function (document) {
    angular.bootstrap(document, [app.name]);
  });
});

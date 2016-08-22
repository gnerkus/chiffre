define([], function() {
  function config($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/calc');

    /* Dynamic app router */
    // This defines the solution for problem spec 1
    $stateProvider
      .state('app', {
        url: '/{module:string}?{additional:string}',
        // Load controller based on params
        controllerProvider: function($stateParams) {
          return loadComponent($stateParams, 'controller');
        },
        // Load page template based on params
        templateUrl: function($stateParams) {
          return loadComponent($stateParams, 'template');
        },
        resolve: {
          additional: function($stateParams) {
            var addData = [];
            if ($stateParams.additional) {
              addData = [
                {
                  entityId: 1,
                  entityType: 'digit'
                }
              ];
            }

            return addData;
          }
        }
      });
  }

  config.inject = ['$stateProvider'];

  return config;
});

function loadController(module) {
  // This assumes the 'module' corresponds to a controller's name
  var controller = null;

  if (module) {
    var ctrlName = module.toLowerCase().replace(module[0], module[0].toUpperCase());
    controller = ctrlName + 'Controller';
  } else {
    controller = 'MainController';
  }

  return controller;
}

function loadTemplate(module) {
  // This assumes the module corresponds to a template's name
  // Templates are named according to the modules they belong to.
  // For example, calc.template.html
  var template = null;

  if (module) {
    var tempName = module.toLowerCase();
    template = 'app/' + tempName + '/' + tempName + '.template.html';
  } else {
    template = 'app/main/main.template.html';
  }

  return template;
}

function loadComponent(params, componentType) {
  var module = params.module;

  switch(componentType) {
    case 'controller':
      return loadController(module);

    case 'template':
      return loadTemplate(module);

    default:
      throw Error('Please specify a component to load')
      break;
  }
}

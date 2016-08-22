define([
  'angular',
], function (angular) {
  'use strict';

  return function() {
    function linkFunc(scope, iElement, iAttributes, ngModelCtrl) {
      if (!ngModelCtrl) return;

      ngModelCtrl.$formatters.push(function modelFormatter(modelValue) {
        return parseInt(modelValue.replace(/\D/g, ''));
      });

      // Called when the model is changed from the input element
      ngModelCtrl.$parsers.push(function inputFormatter(viewValue) {
        // Sanitize value
        var sanitValue = (viewValue + '').replace(/\D/g, '');
        var figureLen = sanitValue.length;
        var currencyPos = figureLen + 2;

        var chars = {
          0: '0',
          1: '0',
          2: '.',
          5: ',',
          8: ',',
          currencyPos: '$'
        }
        var formattedValue = '';

        for (var i = 0; i <= figureLen + 2; i++) {
          formattedValue = ((sanitValue[figureLen + 2 - i] || '') + (chars[i] || '')) + formattedValue;
        }

        iElement.val(formattedValue);

        return formattedValue;
      });

      ngModelCtrl.$validators.phone = function(modelValue, viewValue) {
        if (modelValue) {
          return modelValue.match(/\d/g).length > 0;
        } else {
          return false;
        }
      }
    }

    return {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc,
    };
  };
});

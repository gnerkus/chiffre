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

        var chars = {0: '(', 3: ') ', 6: ' - '};
        sanitValue = sanitValue.slice(0, 10);
        var formattedValue = '';

        for (var i = 0; i < sanitValue.length; i++) {
          formattedValue += (chars[i] || '') + sanitValue[i];
        }

        iElement.val(formattedValue);

        return formattedValue;
      });

      ngModelCtrl.$validators.phone = function(modelValue, viewValue) {
        if (modelValue) {
          return modelValue.match(/\d/g).length === 10;
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

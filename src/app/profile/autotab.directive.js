define([
  'angular'
], function(angular) {
  'use strict';

  return function() {
    function linkFunc(scope, iElement, iAttrs) {
      iElement.bind('keyup', function(e) {
        // Move to the next input when the maximum character length has been reached
        if (this.value.length === this.maxLength) {
          var nextInput = document.getElementById(iAttrs.autoTabTo);
          if (nextInput) {
            nextInput.focus();
          }
        }

        // Move to the previous input when the character length is 0
        if (this.value.length <= 0) {
          var prevInput = document.getElementById(iAttrs.autoTabFrom);
          if (prevInput) {
            prevInput.focus();
          }
        }
      });
    }

    return {
      restrict: 'A',
      link: linkFunc
    }
  }
});

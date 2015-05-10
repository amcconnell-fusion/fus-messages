(function () {

  'use strict';

  angular.module('fusionMessages').directive('fusMessages', fusMessages);

  function fusMessages() {
    return {
      template: '<div ng-messages="inputModelErrors" ng-show="isVisible"></div>',
      require: ['^form'],
      scope: true,
      transclude: true,
      link: function (scope, element, attrs, ctrls, transclude) {
        scope.inputModel = scope.$eval(attrs['fusMessages']);
        scope.inputModelErrors = scope.$eval(attrs['fusMessages']).$error;
        scope.isVisible = false;

        scope.$watchCollection(showMessages, toggleVisible);

        transclude(function (clone) {
          var directiveEl = element.find('div')[0];
          angular.element(directiveEl).append(clone);
        });

        // Show ngMessages only when this input is dirty or when the
        // form has been submitted.
        function showMessages () {
          var formController = ctrls[0];
          return formController.$submitted || scope.inputModel.$dirty;
        }

        function toggleVisible(isVisible) {
          scope.isVisible = isVisible;
        }
      }
    }
  }

})();
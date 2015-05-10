(function () {
  'use strict';

  angular.module('fusionMessages').directive('fusMessagesDefaults', fusMessagesDefaults);

  function fusMessagesDefaults () {
    return {
      restrict: 'A',
      controller: function ($scope, $attrs) { // TODO ngInject
        this.defaultMessages = $scope.$eval($attrs['fusMessagesDefaults']);
      }
    }
  }

})();
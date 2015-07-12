'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('timeline',function() {
    return {
        templateUrl:'client/scripts/directives/timeline/timeline.ng.html',
        restrict: 'E',
        replace: true,
    }
  });

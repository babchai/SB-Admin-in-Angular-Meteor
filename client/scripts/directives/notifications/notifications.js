'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('notifications',function(){
		return {
        templateUrl:'client/scripts/directives/notifications/notifications.ng.html',
        restrict: 'E',
        replace: true,
    	}
	});



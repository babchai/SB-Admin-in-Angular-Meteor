'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'client/scripts/directives/header/header-notification/header-notification.ng.html',
        restrict: 'E',
        replace: true,
    	}
	});



'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('header',function(){
		return {
        templateUrl:'client/scripts/directives/header/header.ng.html',
        restrict: 'E',
        replace: true,
    	}
	});



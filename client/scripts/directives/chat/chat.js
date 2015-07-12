'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('chat',function(){
		return {
        templateUrl:'client/scripts/directives/chat/chat.ng.html',
        restrict: 'E',
        replace: true,
    	}
	});



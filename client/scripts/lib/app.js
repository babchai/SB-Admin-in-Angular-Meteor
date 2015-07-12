angular.module('sbAdminApp',[
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngCookies',
  'ngAnimate',
  'ngSanitize',
  'toggle-switch',

  'oc.lazyLoad'
]);


angular.module("sbAdminApp").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $location.path("/dashboard");
    }
  });
}]);

angular.module("sbAdminApp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'client/views/dashboard/main.ng.html',
        
      })
      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'client/views/dashboard/home.ng.html',
      })
      .state('dashboard.form',{
        templateUrl:'client/views/form.ng.html',
        url:'/form'
      })
      .state('dashboard.blank',{
        templateUrl:'client/views/pages/blank.ng.html',
        url:'/blank'
      })
      .state('login',{
        templateUrl:'client/views/pages/login.ng.html',
        url:'/login'
      })
      .state('dashboard.chart',{
        templateUrl:'client/views/chart.ng.html',
        url:'/chart',
        controller:'ChartCtrl'
    })
      .state('dashboard.table',{
        templateUrl:'client/views/table.ng.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'client/views/ui-elements/panels-wells.ng.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'client/views/ui-elements/buttons.ng.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'client/views/ui-elements/notifications.ng.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'client/views/ui-elements/typography.ng.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'client/views/ui-elements/icons.ng.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'client/views/ui-elements/grid.ng.html',
       url:'/grid'
   })

    $urlRouterProvider.otherwise("/dashboard");
  }]);
'use strict';

// angular.js main app initialization
var app = angular.module('example359', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/index.html', activetab: 'Home', controller: HomeCtrl }).
        when('/policy', {
          templateUrl: 'pages/policy.html',
          controller: PolicyCtrl,
          activetab: 'policy'
        }).
        when('/about', {
          templateUrl: 'pages/about.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
        when('/contact', {
          templateUrl: 'pages/contact.html',
          controller: ContactCtrl,
          activetab: 'contact'
        }).
        when('/bio2', {
          templateUrl: 'pages/steph.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
        when('/bio', {
          templateUrl: 'pages/jaci.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
        //handle the contact info
        $scope.message = {
            'name': '',
            'email': '',
            'phone': '',
            'title': '',
            'text': ''
          };
          $scope.save = function () {
            $http.post('sendemail.php', $scope.message)
            .success(
              function(data){
                $scope.success = true;
                $scope.process = false;
                $scope.response = data.replace(/\ /g, '&nbsp;&nbsp;').replace(/\n/g, '<br/>') //format response
              })
            .error(
              function(data){
                $scope.response = data
              })
          }
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);

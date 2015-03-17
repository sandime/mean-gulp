/**
 * Created by SHERRI on 3/17/15.
 */
angular.module('app.routes', ['ngRoute']);
config (function($routeProvider, $locationprovider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/pages/home.html',
            controller: 'mainController',
            controllerAs: 'main'
        });
    $locationProvider.html5Mode(true);
});
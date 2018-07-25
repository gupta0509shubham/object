var objectApp = angular.module('objectApp',
    [

    'ui.router',
    'objectApp.object'

    ]);

objectApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/object');

    $stateProvider

        .state('object', {
            url: '/object',
            views: {
                "" : {
                    "templateUrl" : '/static/app/components/object/views/object.html',
                    "controller": 'objectController',
                    "controllerAs": '$objectCtrl'
                }
            }
        })
});

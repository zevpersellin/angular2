'use strict';

angular.module('myApp.form', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/form', {
            templateUrl: 'form/form.html',
            controller: 'Form1Ctrl'
        });
    }])

    .controller('Form1Ctrl', [function() {

    }]);
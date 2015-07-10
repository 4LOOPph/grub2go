'use strict';

var url1 = 'slider.html';

angular.module('starter')
    .directive('dhanslider', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../../templates/directives/' + url1
        }
    });

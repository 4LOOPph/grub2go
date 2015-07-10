'use strict';

angular.module('starter')
    .factory('DataFactory', function($http) {
        var DataFactory = {};

        DataFactory.Menu = function() {
            return $http.get('js/values/menu.json').then(function(data) {
                return data;
            });
        };

        DataFactory.Map1 = function() {
            return $http.get('js/values/map1.json').then(function(data) {
                return data;
            });
        };

        DataFactory.Submenu = function() {
            return $http.get('js/values/submenu.json').then(function(data) {
                return data;
            });
        };
        
        DataFactory.Details = function() {
            return $http.get('js/values/details.json').then(function(data) {
                return data;
            });
        };
        DataFactory.Map2 = function() {
            return $http.get('js/values/map2.json').then(function(data) {
                return data;
            });
        };
        return DataFactory;
    });

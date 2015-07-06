'use strict';

var DataFactory = function($http) {
    var DataFactory = {};

    DataFactory.categories = function() {
        return $http.get('js/values/category.json').success(function(res) {
            return res;
        });
    };

    DataFactory.directories = function() {
        return $http.get('js/values/directory.json').success(function(res) {
            return res;
        });
    };

    return DataFactory;
};


angular.module('starter').factory('DataFactory', DataFactory);

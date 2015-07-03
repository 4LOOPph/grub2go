'use strict';

var DataFactory = function($http, $filter) {
    var DataFactory = {};

    DataFactory.categories = function() {
        return $http.get('js/values/category.json').success(function(res) {
            return res;
        });
    };

    DataFactory.directories = function(categoryid) {
        return $http.get('js/values/directory.json').success(function(res) {
            var data = $filter('filter')(res, {
                categoryid: categoryid
            });
            return data;
        });
    };

    return DataFactory;
};


angular.module('starter').factory('DataFactory', DataFactory);

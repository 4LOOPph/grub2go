'use strict';

angular.module('starter')
    .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [{
            title: 'Mcdonald',
            img: 'img/thumbnails/mcdo.png',
            id: 1
        }, {
            title: 'Jolibee',
            img: 'img/thumbnails/jollibee.jpg',
            id: 2
        }, {
            title: 'Pizza Hut',
            img: 'img/thumbnails/pizzahut.png',
            id: 3
        }, {
            title: 'Chingkee Tea',
            img: 'img/thumbnails/chingkee.png',
            id: 4
        }, {
            title: 'KFC',
            img: 'img/thumbnails/kfc.png',
            id: 5
        }, {
            title: 'Starbucks',
            img: 'img/thumbnails/starbucks.png',
            id: 6
        }];
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {

});

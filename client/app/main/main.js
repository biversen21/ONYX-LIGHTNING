'use strict';

angular.module('onyxLightningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: 'app/main/main.html'
          },
          'map@main': {
            templateUrl: 'app/map/map.html',
            controller: 'MapCtrl'
          }
        },
        controller: 'MainCtrl as vm',
        resolve: {
          ResolvedThings: ResolvedThings
        }
      });

      //////////////

      function ResolvedThings(MainFactory){
        return MainFactory.get()
          .then(function (response){
              return response.data;
          });
      }
  });
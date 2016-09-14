// function Router ($routeProvider) {
//       $routeProvider
//         .when('/user/:id', 
//         {
//           templateUrl: 'js/app/views/user.html',
//           controller: 'UserController as ctrl',
//           resolve: {
//             user: ['$route', 'UserService', function ($route, UserService) {
//               return UserService.getUser($route.current.params.id);
//             }]
//           }
//         });
//     }

// Router.$inject = ['$routeProvider'];

// angular
//     .module('app', ['ngRoute'])
//     .config(Router);

angular
  .module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/user/:id', {
        templateUrl: 'js/app/views/user.html',
        controller: 'UserController as ctrl',
        resolve: {
          user: function($route, UserService) {
            debugger;
            return UserService.getUser($route.current.params.id);
          }
        }
      });
  });



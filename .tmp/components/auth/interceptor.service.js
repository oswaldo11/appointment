'use strict';

(function () {

  function authInterceptor($rootScope, $q, $cookies, $injector, Util) {
    var state;
    var loader = document.getElementsByClassName('loader-center');
    return {
      // Add authorization token to headers

      request: function request(config) {
        if ($('body').hasClass('loaded')) {
          loader[0].style.display = 'block';
        }
        config.headers = config.headers || {};
        if ($cookies.get('token') && Util.isSameOrigin(config.url)) {
          config.headers.Authorization = 'Bearer ' + $cookies.get('token');
        }
        return config;
      },
      response: function response(_response) {
        setTimeout(function () {
          loader[0].style.display = 'none';
        }, 500);

        return _response;
      },

      // Intercept 401s and redirect you to login
      responseError: function responseError(response) {
        loader[0].style.display = 'none';
        if (response.status === 401) {
          (state || (state = $injector.get('$state'))).go('login');
          // remove any stale tokens
          $cookies.remove('token');
        }
        return $q.reject(response);
      }
    };
  }

  angular.module('eventsMongoApp.auth').factory('authInterceptor', authInterceptor);
})();
//# sourceMappingURL=interceptor.service.js.map

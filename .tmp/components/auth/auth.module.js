'use strict';

angular.module('eventsMongoApp.auth', ['eventsMongoApp.constants', 'eventsMongoApp.util', 'ngCookies', 'ui.router']).config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map

'use strict';

angular.module('eventsMongoApp').directive('sidebar', function () {
  return {
    templateUrl: 'components/sidebar/sidebar.html',
    restrict: 'E',
    controller: 'SidebarController',
    controllerAs: 'side'
  };
});
//# sourceMappingURL=sidebar.directive.js.map

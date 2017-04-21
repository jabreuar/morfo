'use strict';

angular.module('morfo.version', [
  'morfo.version.interpolate-filter',
  'morfo.version.version-directive'
])

.value('version', '0.1');

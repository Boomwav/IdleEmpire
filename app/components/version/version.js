'use strict';

angular.module('IdleEmpire.version', [
  'IdleEmpire.version.interpolate-filter',
  'IdleEmpire.version.version-directive'
])

.value('version', '0.1');

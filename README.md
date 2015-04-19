# angular-deckbrew
Angular service for the https://deckbrew.com API

## Dependencies

ngResource

## Installation

### Bower

``` bower install brewdeck --save ```

### Manual
Copy 'brewdeck.js' to your project directory, include via HTML script tag or build process.

### Usage

```javascript
angular.module('test-app').controller('TestCtrl', function($scope, brewdeck) {
  $scope.searchParams = {
    name: 'elf',
    color: 'red'
  };
  
  $scope.cards = brewdeck.search($scope.searchParams);
});
```

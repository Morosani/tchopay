app.config(function ($stateProvider) {

    $stateProvider.state('checkout', {
        url: '/checkout',
        templateUrl: 'js/iframe/iframe.html',
        controller: 'iframeCtrl'
    });

});

app.controller('iframeCtrl', function ($scope, AuthService, $state) {


});
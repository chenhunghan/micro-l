function onClientLoad() {
    var keyword = 'javascript'
    gapi.client.load('youtube', 'v3', function() {
        gapi.client.setApiKey('AIzaSyDG4OKT4eGlYFtpCmfKM8jGs42ge7qM--s');
        var request = gapi.client.youtube.search.list({
            q: keyword + '|javascript|step-by-step|tutorial|beginners|how -music -song',
            part: 'snippet',
            type: 'video',
            safeSearch: 'moderate',
            videoDuration: 'short',
            videoEmbeddable: true,
            relevanceLanguage: 'eng',
            maxResults: 10
            //https://developers.google.com/youtube/v3/docs/search/list#request-body
        });
        request.execute(function(response) {

            angular.module('app', ['ngAnimate', 'ui.bootstrap'])
            angular.module('app').controller('MainCtrl', MainCtrl)

            function MainCtrl($scope) {
                $scope.items = response.items
            };

            angular.element(document).ready(function() {
                angular.bootstrap(document, ['app']);
            });
        });
    });




}
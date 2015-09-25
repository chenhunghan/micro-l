function onClientLoad() {
    gapi.client.load('youtube', 'v3', function() {
        gapi.client.setApiKey('AIzaSyDG4OKT4eGlYFtpCmfKM8jGs42ge7qM--s');
        var request = gapi.client.youtube.search.list({
            q: 'hello world',
            part: 'snippet'

        });
        request.execute(function(response) {
            var responseString = JSON.stringify(response, '', 2);
            document.getElementById('response').innerHTML += responseString;
        });
    });
}
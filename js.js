var newTabs = [window.open("https://facebook.com", "_blank"), window.open("https://youtube.com", "_blank") ];

var spotify = document.getElementById('spotify');
var youtube = document.getElementById('youtube');

console.log(spotify)
console.log(youtube)

spotify.addEventListener('click', function() {
    newTabs[0].focus()
})
youtube.addEventListener('click', function() {
    newTabs[1].focus()
})
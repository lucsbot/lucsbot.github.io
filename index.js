const title = document.getElementById("title");
const text = document.getElementById("text");
$.get("https://lucsbot-2a46d8c3d1b2.herokuapp.com/" + window.location.search, function(data) {
    window.location.href = data;
});
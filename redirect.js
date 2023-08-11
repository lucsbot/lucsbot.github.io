const title = document.getElementById("title");
const text = document.getElementById("text");
$.get("http://3.133.177.183/redirect" + window.location.search, function(data) {
    title.innerHTML = data.title;
    text.innerHTML = data.text;
});
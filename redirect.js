$.get("https://lucsbot-2a46d8c3d1b2.herokuapp.com/redirect" + window.location.search, function(data) {
    console.log(data);
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("text").innerHTML = data.text;
});
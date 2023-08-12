$.get("https://lucsbot-2a46d8c3d1b2.herokuapp.com/" + window.location.search, function(data) {
    console.log(data);
    if (data.url) {
        window.location.href = data.url;
    } else {
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("text").innerHTML = data.text;
    }
});
function hasState() {
    for (cookie of decodeURIComponent(document.cookie).split(';')) {
        while (cookie[0] == ' ') {
            cookie = cookie.substring(1);
        };
        if (cookie.indexOf("state=") == 0) {
            return cookie.substring(6, cookie.length);
        };
    }
    return null;
};
const cookie = hasState();
const query = new URLSearchParams(window.location.search);
if (query.get("state")) {
    const d = new Date();
    d.setTime(d.getTime() + 86400000);
    document.cookie = `state=${query.get("state")};expires=${d.toUTCString()};path=/`;
    $.get("https://lucsbot-2a46d8c3d1b2.herokuapp.com/" + window.location.search, function(data) {
        console.log(data);
        if (data.url) {
            window.location.href = data.url;
        } else {
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("text").innerHTML = data.text;
        };
    });
} else if (cookie) {
    $.get("https://lucsbot-2a46d8c3d1b2.herokuapp.com/" + cookie, function(data) {
        console.log(data);
        if (data.url) {
            window.location.href = data.url;
        } else {
            document.cookie = `state=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("text").innerHTML = data.text;
        };
    });
};
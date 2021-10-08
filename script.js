function getAddress() {

    $.get("https://ipinfo.io", function(response) {
        var ip = response.ip;

        if(ip !== "185.94.6.154") {
            window.location.replace("https://richi.ourcrew.eu/alpha-web/");
        }
    }, "json")
}
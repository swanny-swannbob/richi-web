function getAddress() {

    $.get("https://ipinfo.io", function(response) {
        var ip = response.ip;

        if(ip !== "--- (My IP Censored)") {
            window.location.replace("https://richi.ourcrew.eu/alpha-web/");
        }
    }, "json")
}

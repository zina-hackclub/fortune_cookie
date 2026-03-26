

let phrases;
$.getJSON("static/phrases.json", function (data) {
    phrases = data.phrases;
});
const get_phrase = () => phrases[ Math.floor(Math.random() * phrases.length) ]

$("#cookie").on("click", async function () {
    $("#phrase").html("&nbsp;");
    $(this).css("animation-name", "open");
    await new Promise(r => setTimeout(r, 1200));
    $(this).css("animation-name", "");
    $("#phrase").text(get_phrase);
});

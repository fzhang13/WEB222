// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

var videoDisplay = function(){
    var videoContainer = document.querySelector("#video");
    videoContainer.innerHTML= "<video width='" + video.width + "'" + " height='" + video.height + "' controls>" +
    "<source src='" + video.source[0].src + "'" + " type='" + video.source[0].type + "' />" +
    "<source src='" + video.source[1].src + "'" + " type='" + video.source[1].type + "' />" +
    "<source src='" + video.source[2].src + "'" + " type='" + video.source[2].type + "' />" + 
    "Your Browser doesn't support video type</video><figcaption>Bear Video</figcaption>"
};

window.onload= function(){
    videoDisplay();
};
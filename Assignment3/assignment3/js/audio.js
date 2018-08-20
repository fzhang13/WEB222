// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

var audioDisplay = function(){
    var audioContainer = document.querySelector("#audio-file")
    audioContainer.innerHTML = "<audio controls><source src='" + audio.source[0].src + "'" + "/>"+
    "<source src='" + audio.source[1].src + "'" + "/>"+
    "Your browser does not support the audio tag used.</audio><figcaption>Sample audio</figcaption>";
};

window.onload = function(){
    audioDisplay();
};
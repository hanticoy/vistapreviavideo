async function playVideo(videoElem) {
    try {
        await videoElem.play();

    } catch (err) {
        console.log('error')
    }
}

function fnOnMouseOver(videoElem) {
    if (videoElem.paused) {
        
        playVideo(videoElem);
    } else {
        videoElem.pause();
    }
}
function fnOnMouseOut(obj) {
    let video = document.getElementById("myVideoPlayer");
    video.pause();
    video.currentTime = 0;
}
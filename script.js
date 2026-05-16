// Get the video element
const videoPlayer = document.getElementById("video-player");

// List of videos
const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4",
    "videos/video6.mp4",
    "videos/video7.mp4",
    "videos/video8.mp4",
    "videos/video9.mp4",
    "videos/video10.mp4"
];

// Current video index
let currentVideo = 0;

// Buttons
const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");


// FUNCTION:
// Load a video using its index
function loadVideo(index) {

    videoPlayer.src = videos[index];

    videoPlayer.play();

}


// FORWARD BUTTON
forwardButton.addEventListener("click", () => {

    currentVideo++;

    // If past last video, go back to first
    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }

    loadVideo(currentVideo);

});


// BACK BUTTON
backButton.addEventListener("click", () => {

    currentVideo--;

    // If before first video, go to last
    if (currentVideo < 0) {
        currentVideo = videos.length - 1;
    }

    loadVideo(currentVideo);

});
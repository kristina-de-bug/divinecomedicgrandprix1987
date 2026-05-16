const videoPlayer = document.getElementById("video-player");

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

let currentVideo = 0;

const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");

function loadVideo(index) {
    videoPlayer.src = videos[index];
    videoPlayer.play();
}

function handleForward(e) {
    e.preventDefault();
    currentVideo = (currentVideo + 1) % videos.length;
    loadVideo(currentVideo);
}

function handleBack(e) {
    e.preventDefault();
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    loadVideo(currentVideo);
}

// Register both touch and click for maximum compatibility
forwardButton.addEventListener("touchend", handleForward, { passive: false });
forwardButton.addEventListener("click", handleForward);

backButton.addEventListener("touchend", handleBack, { passive: false });
backButton.addEventListener("click", handleBack);

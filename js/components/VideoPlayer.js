/*
    js/components/VideoPlayer.js
    ----------------------------
    Wraps a <video> element with hover-to-play behavior
    and a fallback image if the video fails to load.
*/

export class VideoPlayer {

    constructor(videoUrl, fallbackImageUrl) {
        this.videoUrl = videoUrl;
        this.fallbackImageUrl = fallbackImageUrl;
    }

    render() {
        const videoWrapper = document.createElement("div");
        videoWrapper.classList.add("video-wrapper");

        const videoElement = document.createElement("video");
        videoElement.classList.add("combo-video");
        videoElement.src = "/PilebunkerLoops/" + this.videoUrl; // Hardcodes video element to find videos
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.playsInline = true;
        videoWrapper.appendChild(videoElement);

        videoWrapper.addEventListener("mouseenter", () => { // When mouse hovers, play video
            videoElement.play().catch(() => {});
        });
        videoWrapper.addEventListener("mouseleave", () => { // When mouse leaves hover, pause
            videoElement.pause();
            videoElement.currentTime = 0;
        });

        videoElement.addEventListener("error", () => {
            videoWrapper.removeChild(videoElement);
            if (this.fallbackImageUrl)
            {
                const img = document.createElement("img");
                img.src = this.fallbackImageUrl;
                videoWrapper.appendChild(img);
            }
        })
        return videoWrapper;
    }
}

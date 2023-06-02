const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContent('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContent('2d');
const faceDetector = new window.FaceDetector();

// write a function that will populate uers videos.

async function populateVideo () {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height: 720}
    });
    video.srcObject = stream;
    await video.play();
    //size the canvases to be the same size as the video

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.

}


populateVideo();
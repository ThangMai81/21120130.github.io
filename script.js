// var video = document.getElementById('video');
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var video = document.querySelector("myVideo");
myVideo.addEventListener("timeupdate", function () {
  context.drawImage(myVideo, 0, 0, myVideo.videoWidth, myVideo.videoHeight);
  canvas.crossOrigin = "anonymous";
  var frame = canvas.toDataURL("image.png");
  // console.log(frame);
  // Do something with the frame...
  image = new MarvinImage();
  image.load(frame, function () {
    var imageOut = new MarvinImage(image.getWidth(), image.getHeight());

    // Edge detection
    Marvin.prewitt(image, imageOut);
    Marvin.invertColors(imageOut, imageOut);
    Marvin.thresholding(imageOut, imageOut, 220);
    imageOut.draw(canvas);
  });
});

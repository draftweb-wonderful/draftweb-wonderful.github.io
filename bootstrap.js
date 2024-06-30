document.getElementById('video-timestamp-select').addEventListener('change', function() {
    var video = document.getElementById('vid_fractal');
    var selectedValue = this.value;
    video.currentTime = selectedValue;
    video.play();
});

function showExample(exampleNumber) {
    // This is where you can add logic to load and display different examples
    // For now, it simply shows an alert with the example number
    alert("Showing example " + exampleNumber);
}

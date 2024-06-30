$(document).ready(function() {
    var current_cmd_idxs = {
        "fractal": 1
    };

    var vid_start_times = {
        "fractal": {
            1: 0,
            2: 2,
            3: 4,
            4: 6,
            5: 8,
            6: 10,
            7: 12,
            8: 14,
            9: 16,
            10: 18
        }
    };

    var vid_end_times = {
        "fractal": {
            1: 2,
            2: 4,
            3: 6,
            4: 8,
            5: 10,
            6: 12,
            7: 14,
            8: 16,
            9: 18,
            10: 20
        }
    };

    function playSeg(vid, start_time, end_time) {
        vid.currentTime = start_time;
        vid.play();

        var pausing_function = function() {
            if (this.currentTime >= end_time) {
                this.pause();
                this.removeEventListener("timeupdate", pausing_function);
            }
        };

        vid.addEventListener("timeupdate", pausing_function);
    }

    $('select').on('change', function() {
        var desired_cmd_idx = parseInt(this.value);
        var current_cmd_idx = current_cmd_idxs["fractal"];

        var vid = $("#vid_fractal")[0];
        var start_time = vid_start_times["fractal"][desired_cmd_idx];
        var end_time = vid_end_times["fractal"][desired_cmd_idx];
        playSeg(vid, start_time, end_time);

        current_cmd_idxs["fractal"] = desired_cmd_idx;
    });
});

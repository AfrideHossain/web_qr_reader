const attendence_history = document.getElementById("attendence_history");
const camera = document.getElementById("camera");

let scanner = new Instascan.Scanner({ video: camera });
Instascan.Camera.getCameras()
    .then((cameras) => {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        }
        else {
            console.error("No cameras found");
        }
    })
    .catch((e) => {
        console.error(e);
    });
    // attendence_history.innerHTML += "<p class='st_list_item'>" + data + "</p>";

scanner.addListener('scan', function (data) {
    attendence_history.innerHTML += "<p class='st_list_item'>" + data + "</p>";
    // console.log(content);
});
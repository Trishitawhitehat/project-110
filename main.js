Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ygF9T4jEh/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!')
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The meaning of this emoji is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
            console.log(results);
            document.getElementById("result_emoji_name").innerHTML = results[0].label;
            speak();
            if(results[0].label == "Victory" ) {
                document.getElementById("update_emoji").innerHTML = "&#9996;";
            }
            if(results[0].label == "Amazing") {
                document.getElementById("update_emoji").innerHTML = "&#128076;";
            }
            if(results[0].label == "Best") {
                document.getElementById("update_emoji").innerHTML = "&#128077;";
            }
            if(results[0].label == "Bad") {
                document.getElementById("update-emoji").innerHTML = "&#128078;";     
            }
            if(results[0].label == "Yo") {
                document.getElementById("update_emoji").innerHTML = "&#129304;"; 
            }
            if(results[0].label == "Call") {
                document.getElementById("update_emoji").innerHTML = "&#129305;";
            }
            if(results[0].label == "Pinky Promise") {
                document.getElementById("update_emoji").innerHTML = "&#9757;";
            }
            if(results[0].label == "Hi or Bye") {
                document.getElementById("update_emoji").innerHTML = "&#128075;";
            }
            if(results[0].label == "Finger Heart") {
                document.getElementById("update_emoji").innerHTML = "&#129310;";
            }

        }
    }

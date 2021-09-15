var speechRecognition=window.webkitSpeechRecognition;
var Recognition=new speechRecognition();
function startSelfie() {
  document.getElementById("textbox").innerHTML="";
  Recognition.start();
  
}

Recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="Take my selfie.") {
      console.log("take my selfie.")
      speak();
    }
}
function speak() {
  var synth= window.speechSynthesis;
  speech_data="Taking your selfie in five seconds";
  var utterThis=new SpeechSynthesisUtterance(speech_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}
camera=document.getElementById("camera");
Webcam.set({
  width: 320,
  height: 240,
  image_format: 'png',
  png_quality: 90
});


function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save() {
  link=document.getElementById("link");
  image=document.getElementById("selfie_image").src;
  link.href=image;
  link.click();
}
let PersonName  = prompt('Please enter your name:');
let PersonEmail = prompt('Please enter your Email-Id:');
if(PersonName != null){
    document.getElementById('personName').innerText = PersonName;        
    document.getElementById('personEmail').innerText = PersonEmail;        
}
let image = document.querySelector(".Profile--Image");
let inputFiles = document.querySelector("#input-file");
inputFiles.addEventListener("change", () => {
  image.src = URL.createObjectURL(inputFiles.files[0]);
});
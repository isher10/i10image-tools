function compressImage(){

let fileInput = document.getElementById("upload");
let sizeInput = document.getElementById("size").value;

if(fileInput.files.length === 0){
alert("Please upload an image");
return;
}

let file = fileInput.files[0];
let reader = new FileReader();

reader.onload = function(e){

let img = new Image();
img.src = e.target.result;

img.onload = function(){

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

let quality = 0.9;

let dataUrl = canvas.toDataURL("image/jpeg",quality);

let download = document.getElementById("download");

download.href = dataUrl;
download.download = "compressed-image.jpg";
download.style.display = "inline-block";
download.innerText = "Download Image";

}

}

reader.readAsDataURL(file);

}

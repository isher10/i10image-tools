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
function convertToJPG() {

const fileInput = document.getElementById("upload");
const downloadLink = document.getElementById("download");

if(fileInput.files.length === 0){
alert("Please upload an image first");
return;
}

const file = fileInput.files[0];
const img = new Image();
const reader = new FileReader();

reader.onload = function(e){

img.src = e.target.result;

img.onload = function(){

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

const jpg = canvas.toDataURL("image/jpeg",0.9);

downloadLink.href = jpg;
downloadLink.download = "converted-image.jpg";
downloadLink.style.display = "inline-block";
downloadLink.innerText = "Download JPG";

}

}

reader.readAsDataURL(file);

}
function convertToPNG() {

const fileInput = document.getElementById("upload");
const downloadLink = document.getElementById("download");

if(fileInput.files.length === 0){
alert("Please upload an image first");
return;
}

const file = fileInput.files[0];
const img = new Image();
const reader = new FileReader();

reader.onload = function(e){

img.src = e.target.result;

img.onload = function(){

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img,0,0);

const png = canvas.toDataURL("image/png");

downloadLink.href = png;
downloadLink.download = "converted-image.png";
downloadLink.style.display = "inline-block";
downloadLink.innerText = "Download PNG";

}

}

reader.readAsDataURL(file);

}
const uploadInput = document.getElementById("upload");
const previewImage = document.getElementById("previewImage");

if(uploadInput){

uploadInput.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

previewImage.src = e.target.result;
previewImage.style.display = "block";

}

reader.readAsDataURL(file);

}

});

}

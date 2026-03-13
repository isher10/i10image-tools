let imageInput=document.getElementById("imageInput")
let image=document.getElementById("image")

let cropper

imageInput.onchange=function(e){

let file=e.target.files[0]

let reader=new FileReader()

reader.onload=function(event){

image.src=event.target.result

if(cropper){
cropper.destroy()
}

cropper=new Cropper(image,{
aspectRatio:35/45,
viewMode:1
})

}

reader.readAsDataURL(file)

}

zoomIn.onclick=function(){
cropper.zoom(0.1)
}

zoomOut.onclick=function(){
cropper.zoom(-0.1)
}

rotate.onclick=function(){
cropper.rotate(90)
}

download.onclick=function(){

let canvas=cropper.getCroppedCanvas({
width:300,
height:380
})

let link=document.createElement("a")

link.download="passport-photo.png"

link.href=canvas.toDataURL()

link.click()

}

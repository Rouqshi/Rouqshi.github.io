document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");
   for(const Image of images){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response =>Response.json())
    .then(data => {
    Image.src = data.message
    Image.width =100;
    Image.height =100;
    })
   }
    

}) 
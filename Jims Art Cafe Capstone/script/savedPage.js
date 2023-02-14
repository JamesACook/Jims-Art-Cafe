savedImages = JSON.parse(localStorage.getItem("savedI"))
container = document.getElementById("savedImagesContainer")

//onload function to check if nothing saved and display a message and remove clear button
function savedLoad(){
    if (savedImages.length == 0){
        let newImage = document.createElement("p"); 
        newImage.innerText = "You have no saved items."
        container.appendChild(newImage);
        clearAll = document.getElementById("clear")
        clearAll.style = "display:none;"
    }

//for each saved item get the artwork image and append to list
    savedImages.forEach((item) => { 
        let newImage = document.createElement("img"); 
        newImage.ID = item
        newImage.src = `./artworks/${item}`
        newImage.style = "max-width: 400px;"
        container.appendChild(newImage);
           
    })
}

//for the delte saved items button a function to set the storage array back to []
function clearSaved(){
    savedImages = [];
    localStorage.setItem("savedI", JSON.stringify(savedImages));
    window.location.reload();
}


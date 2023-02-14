// So we begin here with setting the page from the SS set when choosing in index

let artObjects = JSON.parse(sessionStorage.getItem("page"))

//for the save option we have an empty array
let savedImages = []

//onload we checked if run befor and set local storage accordingly
function galleryLoad() {
    if (localStorage.getItem("hasCodeRunBefore") === null) {// if not run before
       localStorage.setItem("savedI", JSON.stringify(savedImages));// set up "savedI" in the LS stringified
       localStorage.setItem("hasCodeRunBefore", true); //set to run before
    } else { //if has run before we fill the images array from the LS:
        savedImages = JSON.parse(localStorage.getItem("savedI"));//Get objects from localStorage and assign to the array 'book'
        };
}


//we get our necessary elements to add the details from their IDs:
let metaTitle = document.getElementById("metaTitle")
let title = document.getElementById("title")
let artwork = document.getElementById("artwork")
let details = document.getElementById("details")
let secondPara = document.getElementById("secondPara")

//we then set those details from the stored artObjects variable we gathered from SS
metaTitle.innerText = artObjects.metaTitle
title.innerText = artObjects.title
artwork.src = `./artworks/${artObjects.artwork}`
artwork.alt = artObjects.alt
details.innerHTML= artObjects.details
secondPara.innerHTML = artObjects.secondPara


// we then added the buttons for like and save with also getelement by ID 
const like = document.getElementById('like');
const save = document.getElementById('save');


//If like is clicked we checked current stae and swap it and the CSS as required
function likeImage(){
    if (like.innerHTML == "Like"){
    like.innerHTML = 'Liked <span style = "color:red;">&#10084;</span>'
 
}
    else {like.innerHTML = "Like"}      
}

//If save is clicked we change text to saved and update the array of saved images. 
//It cannot be saved again to avoid errors. 
//We give the alert as required by the task by taking the length of the array.
function saveImage(){
    if (save.innerHTML == "Save"){
    save.innerHTML = "Saved";  
    saveUrl = artObjects.artwork;
    savedImages.push(saveUrl);
    localStorage.setItem("savedI", JSON.stringify(savedImages))    
    alert (`You now have ${savedImages.length} saved images`)}
}
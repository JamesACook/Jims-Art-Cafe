// JS Script for homepage


// Function called with XX arguments passed whenever choose an item from menu sets the session storage page
function setFiller(XX){
    sessionStorage.setItem("page", JSON.stringify(XX));
} 

// Here we have a factory function to create the Artworks details for the SS and html tags and so on.
class Artwork{
    constructor(metaTitle, title, artwork, alt, details, secondPara) { 
    this.metaTitle = metaTitle; 
    this.title = title;
    this.artwork = artwork;
    this.alt = alt;
    this.details = details;
    this.secondPara = secondPara;
    }
};

//Then we create the objects and add whichever is selecteed into the SS
let LP = new Artwork(
    "LVNG Pickering Digital Art by Jim on a Square Plate",
    "LVNG Pickering",
    "LvngPickering.jpg",
    "LVNG Pickering digital art",
    "The artist recently moved back to Pickering with his family. He has illustrated a famous train at the heritage railway, the towns main landmark and tourist attraction. The church overlooks the town and the fine castle ruins silhouette the skyline and the rings are related to the name evolving from 'Pike Ring'. The LVNG is partly a nod to the young in a quaint Yorkshire town and also to put the art in it's digital zeitgeist. It is a font reminiscent of the rail heyday and the likes seen on the side of train carriages e.g. GNER. Is it loving, is it living or like a train is it leaving? The ambiguity is deliberate as the viewer is left to ponder...",
    "",
)

let OF = new Artwork(
    "ONLY Filey Digital Art by Jim on a Square Plate",
    "ONLY Filey",
    "OnlyFiley.jpg",
    "ONLY Filey digital art",
    "The artist spent a year working on a major project in Filey and grew very fond of the place, the people and the enormous sandy beach with it's famous 'brigg' shown in dark pink. A former Butlins mecca with a grand crescent the small town by the sea has it's own special charm. Tongue in cheek like a lot of Yorkshire towns this poster is a humble but proud answer to the style of another east coast resort, Miami. Sipping Martinis overlooking the bay at this Yorkshire paradise is perhaps the ultimate lifestyle destination - for the truly discerning.",
    "It was this design that really launched the signature style, which might best be described as a lego head in a top hat? It's got a rule of thirds thing going on like many of the best scenes and it's great for artists to have a motif, should they want to become recognisable. An earlier version of the work had the sea in contours and a plainer font. After playing with fonts on YORK Mix Jim went back and made modifications to this font with the rounder O, long Y and underline as the style evolved. He was slightly inspired by the 'Stranger Things' typography and his youth watching Quadrophenia and so on. He is always influenced by the work he did with a major artist for The Savoy, the UK home of art deco which is a favourite era of Jim's. Playing with fonts like this is classic modernism in a post-modern era in which Filey is quite rightly front and centre!",
)

let YM = new Artwork(
    "YORK Mix Digital Art by Jim on a Square Plate",
    "YORK Mix",
    "YorkMix.jpg",
    "YORK Mix digital art",
    "Any series from Yorkshire would eventually include York, a tremendously historic city (Roman and Viking especially). Difficult to do justice in a one but nobody can doubt the latter significance of Rowntree's and Terry's sweets and chocolate factories and their benevolent owners. So the colours are borrowed from cocoa and fruit pastilles with a Kit-Kat K and some othe notable images e.g. Cliffords Tower, The Minster, Cocoa Works. The artist is not sure if it is finished it was the last piece he worked on in lockdown before becoming distracted though started it in 2019 hence the MMXIX and he wanted an I in there as mix is a word that is associated with sweets e.g. Yorkshire Mixtures and this style of digital collage. It's likely to be the only one that gets it's name in the big banner of the signature style and that is probably fitting.",
    "",
)

let WS = new Artwork(
    "Whitby Saviour Digital Art by Jim on a Square Plate",
    "Whitby Saviour",
    "WhitbySaviour.jpg",
    "Whitby Saviour digital art",
    "This is a pop art reproduction of one of the more famous photos in Whitby of the coxswain Henry Freeman, the only survivor of the 1861 lifeboat disaster. So he was a saviour but also a pioneer by wearing his own saviour a cork lifejacket (pictured). Invented by a member of the RNLI only about 20 years earlier. It was his first trip aboard and he had worn the cork jacket whereas the rest of the crew resisted and kept wearing the old ballast filled belts. Experience does not always pay! A lesson for employers not giving inexperience a chance.. Like Jim's other pop arts he often uses halftoning instead of very crude photostat and more pleasing accurate colours and subtle opaque imaging in the backdrop to add levels of interest and visual appeal. We have served it on a board for a little more buoyancy!",
    'Read more about Henry Freeman <a id ="henry" href="https://rnli.org/about-us/our-history/timeline/1861-whitby-lifeboat-disaster" target="_blank">here</a>.'
)

let VW = new Artwork(
    "Venice Wknd Digital Art by Jim on a Square Plate",
    "Venice Wknd",
    "VeniceWknd.jpg",
    "Venice Wknd digital art",
    "The artist honeymooned in Venice and was able to gather many photos to work from and be inspired by the experience. A monochrome foreground of a San Marco square approach sits in contrast to a collaged sky again using favourite east coast colours and presenting a pseudo landscape with heroes, plot and intrigue while striking the eyes and psyche of the viewer.",
    ''
)

let RN = new Artwork(
    "Resolution Digital Art by Jim on a Square Plate",
    "Resolution",
    "Resolution.jpg",
    "Resolution digital art",
    "Jim often stays in Whitby and spent some days photoing landmarks and arcitecture and repurposing others to create a series of 4 what he called 'poppographs' with white and a thin black border. This might have become a signature style too. This was his favourite of the 4 working with the birds that fly around him on the coastal path, the rail connection, the swing bridge, the statue at the Abbey and a Resolution carving on a monument. Then some modernist plays on triangles. Again here popped onto a slate at his sampling pop-out cafe but like a picture frame with the texture coming through set off nicely. The creations are digital they are supposed to be somewhat transient interpretations more than masterpieces and celebrate all that is creative and disruptive in the post-plastic, new-reality cyberspace melting pot.",
    ''
)

let MM = new Artwork(
    "Mondrian Made Digital Art by Jim on a Square Plate",
    "Mondrian Made",
    "MondrianMade.jpg",
    "Mondrian Made digital art",
    "Something a bit different to his usual the artist re-interpreted the entire made.com website into one Mondrian inspired canvas (sadly made.com recently went bust). Wanting a pricey rug but instead using his digital printer and framing experience for some DIY decor. It sits nicely above his 30's style cocktail cabinet. Guests have commented they could stare at it for hours. Again it's taking a pop or abstract modern art favourite and giving it post-modern sensibilities or refinements. Mondrian's idea to take everything back to black and white grids and the 3 primary colours was bold and striking and in many ways forerunning a digital world. Not surprising it appeals to top coders like Jim! Or that Jim decided to systematically update it for web 3.1!",
    ''
)

let LW = new Artwork(
    "Lifeboat Warhola Digital Art by Jim on a Square Plate",
    "Lifeboat Warhola",
    "LifeboatWarhola.jpg",
    "Lifeboat Warhola digital art",
    "Something a bit different to his usual the artist re-interpreted the entire made.com website into one Mondrian inspired canvas (sadly made.com recently went bust). Wanting a pricey rug but instead using his digital printer and framing experience for some DIY decor. It sits nicely above his 30's style cocktail cabinet. Guests have commented they could stare at it for hours. Again it's taking a pop or abstract modern art favourite and giving it post-modern sensibilities or refinements. Mondrian's idea to take everything back to black and white grids and the 3 primary colours was bold and striking and in many ways forerunning a digital world. Not surprising it appeals to top coders like Jim! Or that Jim decided to systematically update it for web 3.1!",
    ''
)

//END

//Putting these items here and anopther JS file for the page meant 0 errors in the console when references were undefined etc
//This was not necessarily instinctive but worked and made sense once split into two js files.


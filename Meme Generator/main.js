// https://api.imgflip.com/get_memes
// {
//     "success": true,
//     "data": {
//        "memes": [
//           {
//              "id": "61579",
//              "name": "One Does Not Simply",
//              "url": "https://i.imgflip.com/1bij.jpg",
//              "width": 568,
//              "height": 335,
//              "box_count": 2
//           },
//           {
//              "id": "101470",
//              "name": "Ancient Aliens",
//              "url": "https://i.imgflip.com/26am.jpg",
//              "width": 500,
//              "height": 437,
//              "box_count": 2
//           }
//           // probably a lot more memes here..
//        ]
//     }
//  }
const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);

const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-titlt");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};

const generateMeme = () => {
  fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

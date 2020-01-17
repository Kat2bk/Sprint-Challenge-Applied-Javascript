// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    console.log(response);
    Array.from(response.data.articles).forEach(item => {
        Object.entries(response.data.articles).forEach(item => {
            displayCards.append(createArticles(item))
        });
    })
  .catch(error => {
    console.log("error loading axios", error);
  });

const displayCards = document.querySelector(".cards-container");

function createArticles(obj) {
  const mainCard = document.createElement("div");
  const mainHeadline = document.createElement("div");
  const mainAuthor = document.createElement("div");
  const ImgContainer = document.createElement("div");
  const ImgUrl = document.createElement("img");
  const mainName = document.createElement("span");

  mainCard.append(mainHeadline);
  mainCard.append(mainAuthor);
  mainAuthor.append(ImgContainer);
  ImgContainer.append(ImgUrl);
  mainName.append(mainAuthor);

  mainCard.classList.add("card");
  mainHeadline.classList.add("headline");
  mainAuthor.classList.add("author");
  ImgContainer.classList.add("img-container");
  ImgUrl.classList.add("img");
  mainName.classList.add("span");

  ImgUrl.setAttribute("src", obj.data.articles.authorPhoto);
  mainHeadline.textContent = obj.data.articles.headline;
  mainName.textContent = obj.data.articles.authorName;

  return mainCard;
}

})

const baseURL = 'http://localhost:3000';
const favoritesURL = `${baseURL}/favorites`;
const $divContainer = document.querySelector('.container');
const $searchForm = document.querySelector('.search-form');

const queryParams = new URLSearchParams(window.location.search);

const searchBaseURL = "http://newsapi.org/v2/top-headlines?country=us";
const api_key = "&apiKey=e5d29336262c4ceb8cb14b81d892adce"
// const api_key = "&apiKey=5afa4eb9d42144bd9419a4ec2683f5a1"
// const api_key = "&apiKey=6603667d30cd4006969dd06dd9fa0d79";

const categoryKey = queryParams.get('category');
const keywordKey = queryParams.get('q');

let searchURL = searchBaseURL + "&category=" + categoryKey + "&q=" + keywordKey + api_key;

showingResultsText(keywordKey, categoryKey);

function showingResultsText(keyword, category){
    $message = document.getElementById("results-message");
    if (keyword === null && category === null) {
        $message.innerText = "Enter a search above";
    }
    else if (keyword.length === 0 && category !== null) {
        $message.innerText = `Showing trending news stories in "${category}":`;
    }
    else {
    $message.innerText = `Showing results for "${keyword}" in "${category}":`;
    }
}

document.addEventListener('click', activateCarousel);

let timer;

function activateCarousel(event) {
    if (event.target === document.getElementById("on-button")) {
        carouselCards();
        console.log("Autoscroll turned on!")
    }
    if (event.target === document.getElementById("off-button")) {
        clearInterval(timer);
        console.log("Autoscroll turned off!")
    }
}

function carouselCards() {
    timer = setInterval(function() {
      const $parentContainer = document.querySelector('.container');
      const $divCard = $parentContainer.querySelectorAll('.item');
      $divCard.forEach((card) => {
          card.classList.toggle('sliding-now');
      })
      setTimeout(function() {
        $parentContainer.appendChild($divCard[0]);
      }, 5000);

    }, 5000);
  }

fetch(searchURL)
        .then(response => response.json())
        .then(filtered_articles => displayStories(filtered_articles.articles))
        .then(addingEventListeners);


function displayStories(story) {
    story.forEach(showStory);
    if (story.length === 0 && (keywordKey != null && categoryKey != null)) {
        noResults(story);
    }
    const loadingGif = document.querySelector('.loading');
    loadingGif.remove();
};

function noResults(){
    const $storyCard = document.createElement("div");
    $storyCard.className = "item";
    $storyCard.id = "no-results-found-card";

    const $title = document.createElement('h2');
    $title.textContent = "No Results Found";

    const $description = document.createElement('p');
    $description.textContent = "Whoops! Try another search!";

    $storyCard.append($title, $description);
    $divContainer.appendChild($storyCard);
}

function showStory(story) {
    const $storyCard = document.createElement("div");
    $storyCard.className = "item";

    const $title = document.createElement('h2');
    $title.textContent = story.title;

    const $description = document.createElement('p');
    $description.textContent = story.description;

    const $image = document.createElement('img');
    if (story.urlToImage ==  null) {
        $image.src = "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"
        $image.alt = "No image available"
    }
    else {
        $image.src = story.urlToImage
        $image.alt = story.title
    }

    const $linkToStory = document.createElement('a');
    $linkToStory.setAttribute('href', story.url);
    $linkToStory.setAttribute('target', '_blank');
    $linkToStory.innerText = "Read full story";
    
    const $FavoritesButton = document.createElement('button');
    $FavoritesButton.className = "button";
    $FavoritesButton.id = "favorites-button";
    $FavoritesButton.textContent = "Add to My Feed";


    $storyCard.append($title, $description, $image, $linkToStory, $FavoritesButton);
    $divContainer.appendChild($storyCard);
};

function addingEventListeners() {
    const $cards = document.getElementsByClassName('item');

    Array.from($cards).forEach(card => {
        card.addEventListener('click', (event) => {
            const storyCardDiv = event.target.parentNode;

            const $title = storyCardDiv.querySelector('h2').innerText;
            const $description = storyCardDiv.querySelector('p').innerText;
            const $imageLink = storyCardDiv.querySelector('img').src;
            const $storyLink = storyCardDiv.querySelector('a').href;
            
            const savedStory = {
                title: $title,
                description: $description,
                link_to_image: $imageLink,
                link_to_story: $storyLink
            }

            fetch(favoritesURL, {
                method: 'POST', 
                body: JSON.stringify(savedStory),
                headers: {
                    "Content-Type": "application/json", 
                    Accept: "application/json"
                } 
            })
                .then(response => response.json())
        })
    })
};



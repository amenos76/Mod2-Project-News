const $divContainer = document.querySelector('.container');
const $searchForm = document.querySelector('.search-form')

const queryParams = new URLSearchParams(window.location.search)

const baseURL = "http://newsapi.org/v2/top-headlines?country=us"
// const api_key = "&apiKey=e5d29336262c4ceb8cb14b81d892adce"
const api_key = "&apiKey=5afa4eb9d42144bd9419a4ec2683f5a1"

const categoryKey = queryParams.get('category')
const keywordKey = queryParams.get('q')

let searchURL = baseURL + "&category=" + categoryKey + "&q=" + keywordKey + api_key

showingResultsText(keywordKey, categoryKey)

function showingResultsText(keyword, category){
    $message = document.getElementById("results-message")
    if (keyword === null && category === null) {
        $message.innerText = "Enter a search above"
    }
    else if (keyword.length === 0 && category !== null) {
        $message.innerText = `Showing trending news stories in "${category}":`
        console.log(keyword)
    }
    else {
    $message.innerText = `Showing results for "${keyword}" in "${category}":`
    }
}

document.addEventListener('click', activateCarousel)

function activateCarousel(event){
    if (event.target === document.getElementById("on-button")) {
        carouselCards()
        console.log("Autoscroll turned on!")
    }
    if (event.target === document.getElementById("off-button")) {
        console.log("Autoscroll turned off!")
    }
}

function carouselCards() {
    setInterval(function() {
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
        .then(filtered_articles => displayStories(filtered_articles.articles));


function displayStories(story) {
    story.forEach(showStory)
    if (story.length === 0 && (keywordKey != null && categoryKey != null)) {
        noResults(story)
    }
    const loadingGif = document.querySelector('.loading')
    loadingGif.remove()
};

function noResults(){
    const $storyCard = document.createElement("div")
    $storyCard.className = "item";
    $storyCard.id = "no-results-found-card"

    const $title = document.createElement('h2')
    $title.textContent = "No Results Found"

    const $description = document.createElement('p')
    $description.textContent = "Whoops! Try another search!"

    $storyCard.append($title, $description)
    $divContainer.appendChild($storyCard)
}

function showStory(story) {
    const $storyCard = document.createElement("div")
    $storyCard.className = "item";

    const $title = document.createElement('h2')
    $title.textContent = story.title

    const $description = document.createElement('p')
    $description.textContent = story.description

    const $image = document.createElement('img')
    $image.src = story.urlToImage
    $image.alt = story.title

    const $linkToStory = document.createElement('a')
    $linkToStory.setAttribute('href', story.url)
    $linkToStory.setAttribute('target', '_blank')
    $linkToStory.innerText = "Read full story"
    

    $storyCard.append($title, $description, $image, $linkToStory)
    $divContainer.appendChild($storyCard)
};
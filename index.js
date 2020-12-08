const $divContainer = document.querySelector('.container');

document.addEventListener('click', activateCarousel)

let timer;

function activateCarousel(event){
    if (event.target === document.getElementById("on-button")) {
        carouselCards()
        console.log("Autoscroll turned on!")
    }
    if (event.target === document.getElementById("off-button")) {
        console.log(timer)
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

fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(articles => displayStories(articles))
    .then(addingEventListeners);

function displayStories(story) {
    story.forEach(showStory)

    const loadingGif = document.querySelector('.loading')
    loadingGif.remove()
};

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

    const $FavoritesButton = document.createElement('button')
    $FavoritesButton.className = "button"
    $FavoritesButton.id = "favorites-button"
    $FavoritesButton.textContent = "Add to My Feed"
    

    const storyKeyValues = {
        title: story.title, 
        description: story.description, 
        link_to_image: story.urlToImage, 
        link_to_story: story.url }

    $storyCard.append($title, $description, $image, $linkToStory, $FavoritesButton)
    $divContainer.appendChild($storyCard)
};



// const storyKeyValues = {
//     title: story.title, 
//     description: story.description, 
//     link_to_image: story.urlToImage, 
//     link_to_story: story.url }

// fetch('https://localhost:3000/favorites', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(
//      {title: "example", description: "example", link_to_image: "example", link_to_story: "example"}),
// })

const baseURL = 'http://localhost:3000';
const favoritesURL = `${baseURL}/favorites`;


// fetch(favoritesURL)
//     .then(response => response.json())
//     .then(favorites => console.log(favorites))

function addingEventListeners() {
    const $cards = document.getElementsByClassName('item')

    Array.from($cards).forEach(card => {
        card.addEventListener('click', (event) => {
            // console.log(event.target.parentNode);
            const storyCardDiv = event.target.parentNode
            const title = storyCardDiv.firstChild
            console.log(title)
            const description = storyCardDiv.nextChild
            console.log(description)
            
        })
    })
}



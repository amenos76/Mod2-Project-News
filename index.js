const $divContainer = document.querySelector('.container');


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

document.addEventListener('click', addToFavorites)

function addToFavorites(event){
    if (event.target === document.getElementById("favorites-button")) {

    }
}

// card carousel feature

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

  // end cardcarousel feature

fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(articles => displayStories(articles));

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

    let storyKeyValues = {
        title: story.title, 
        description: story.description, 
        link_to_image: story.urlToImage, 
        link_to_story: story.url }

    $storyCard.append($title, $description, $image, $linkToStory, $FavoritesButton)
    $divContainer.appendChild($storyCard)
};


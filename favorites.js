const baseURL = 'http://localhost:3000';
const favoritesURL = `${baseURL}/favorites`;
const $divContainer = document.querySelector('.container');

document.addEventListener('click', activateCarousel);

let timer;

function activateCarousel(event){
    if (event.target === document.getElementById("on-button")) {
        carouselCards();
        console.log("Autoscroll turned on!");
    }
    if (event.target === document.getElementById("off-button")) {
        clearInterval(timer);
        console.log("Autoscroll turned off!");
    }
};

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
  };

fetch(favoritesURL)
    .then(response => response.json())
    .then(favorite_articles => displayStories(favorite_articles));

function displayStories(story) {
    story.forEach(showStory);
    if (story.length === 0) {
        noResults(story);
    }
    const loadingGif = document.querySelector('.loading');
    loadingGif.remove();
};

function noResults(){
    const $storyCard = document.createElement("div");
    $storyCard.className = "item";
    $storyCard.id = "nothing-saved-card";

    const $title = document.createElement('h2');
    $title.textContent = "You don't have anything saved yet";

    const $description = document.createElement('p');
    $description.textContent = "You can save articles by clicking Add To My Feed on any article!";

    $storyCard.append($title, $description);
    $divContainer.appendChild($storyCard);
};

function showStory(story) {
    const $storyCard = document.createElement("div");
    $storyCard.className = "item";

    const $title = document.createElement('h2');
    $title.textContent = story.title;

    const $description = document.createElement('p');
    $description.textContent = story.description;

    const $image = document.createElement('img');
    if (story.link_to_image ==  null) {
        $image.src = "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"
        $image.alt = "No image available"
    }
    else {
        $image.src = story.link_to_image
        $image.alt = story.title
    }

    const $linkToStory = document.createElement('a');
    $linkToStory.setAttribute('href', story.link_to_story);
    $linkToStory.setAttribute('target', '_blank');
    $linkToStory.innerText = "Read full story";

    const $DeleteButton = document.createElement('button');
    $DeleteButton.className = "button";
    $DeleteButton.id = "delete-button";
    $DeleteButton.textContent = "Remove From My Feed";

    $DeleteButton.addEventListener('click', (event) => {
        $storyCard.remove()
        fetch(`${favoritesURL}/${story.id}`, {
            method: "DELETE"
        })
    })

    $storyCard.append($title, $description, $image, $linkToStory, $DeleteButton);
    $divContainer.appendChild($storyCard);
};





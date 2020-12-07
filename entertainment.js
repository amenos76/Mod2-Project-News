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

fetch("http://localhost:3000/entertainment")
    .then(response => response.json())
    .then(entertainment_articles => displayStories(entertainment_articles));

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

    $storyCard.append($title, $description, $image, $linkToStory)
    $divContainer.appendChild($storyCard)
};
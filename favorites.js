const $divContainer = document.querySelector('.container');


fetch("http://localhost:3000/favorites")
    .then(response => response.json())
    .then(favorite_articles => displayStories(favorite_articles));

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
    $image.src = story.link_to_image
    $image.alt = story.title

    const $linkToStory = document.createElement('a')
    $linkToStory.setAttribute('href', story.link_to_story)
    $linkToStory.setAttribute('target', '_blank')
    $linkToStory.innerText = "Read full story"

    $storyCard.append($title, $description, $image, $linkToStory)
    $divContainer.appendChild($storyCard)
};
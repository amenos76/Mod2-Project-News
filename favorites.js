const baseURL = 'http://localhost:3000';
const favoritesURL = `${baseURL}/favorites`;
const $divContainer = document.querySelector('.container');


fetch(favoritesURL)
    .then(response => response.json())
    .then(favorite_articles => displayStories(favorite_articles))
    .then(addingEventListeners);

function displayStories(story) {
    story.forEach(showStory)
    if (story.length === 0) {
        noResults(story)
    }
    const loadingGif = document.querySelector('.loading')
    loadingGif.remove()
};

function noResults(){
    const $storyCard = document.createElement("div")
    $storyCard.className = "item";
    $storyCard.id = "nothing-saved-card"

    const $title = document.createElement('h2')
    $title.textContent = "You don't have anything saved yet"

    const $description = document.createElement('p')
    $description.textContent = "You can save articles by clicking Add To My Feed on any article!"

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
    $image.src = story.link_to_image
    $image.alt = story.title

    const $linkToStory = document.createElement('a')
    $linkToStory.setAttribute('href', story.link_to_story)
    $linkToStory.setAttribute('target', '_blank')
    $linkToStory.innerText = "Read full story"

    const $DeleteButton = document.createElement('button')
    $DeleteButton.className = "button"
    $DeleteButton.id = "delete-button"
    $DeleteButton.textContent = "Remove From My Feed"

    $storyCard.append($title, $description, $image, $linkToStory, $DeleteButton)
    $divContainer.appendChild($storyCard)
};


function addingEventListeners() {
    const $cards = document.getElementsByClassName('item')

    Array.from($cards).forEach(card => {
        card.addEventListener('click', (event) => {
            const storyCardDiv = event.target.parentNode
            console.log(card)
            const $title = storyCardDiv.querySelector('h2').innerText
            const $description = storyCardDiv.querySelector('p').innerText
            const $imageLink = storyCardDiv.querySelector('img').src
            const $storyLink = storyCardDiv.querySelector('a').href
            
            const savedStory = {
                title: $title,
                description: $description,
                link_to_image: $imageLink,
                link_to_story: $storyLink
            }

            // fetch(`${favoritesURL}/${article.id}`, {
            //     method: 'DELETE', 
            //     headers: {
            //         "Content-Type": "application/json", 
            //         Accept: "application/json"
            //     } 
            // })
            //     .then(response => response.json())
        })
    })
}
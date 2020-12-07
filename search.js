// const baseURL = "http://localhost:3000/";


const $divContainer = document.querySelector('.container');
const $searchForm = document.querySelector('.search-form')

const queryParams = new URLSearchParams(window.location.search)

const baseURL = "http://newsapi.org/v2/top-headlines?country=us"
const api_key = "&apiKey=e5d29336262c4ceb8cb14b81d892adce"
const categoryKey = `&category=${queryParams.get('category')}`
const keywordKey = `&q=${queryParams.get('q')}`


let searchURL = baseURL + categoryKey + keywordKey + api_key

console.log("search URL is:", searchURL)


fetch(searchURL)
        .then(response => response.json())
        .then(filtered_articles => displayStories(filtered_articles.articles));


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
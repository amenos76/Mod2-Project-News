const $divContainer = document.querySelector('.container');


// card carousel feature

// (function() {
//     setInterval(function() {
//       const $parentContainer = document.querySelector('.container');
//       const $divItem = $parentContainer.querySelectorAll('.item');
  

//       $divItem.forEach((card) => {
//           card.classList.toggle('sliding-now');
//       })
  
//       setTimeout(function() {
//         $parentContainer.appendChild($divItem[0]);
//       }, 5000);
  
//     }, 5000);
//   })()
  

  // end cardcarousel feature

  fetch("http://localhost:3000/sports")
  .then(response => response.json())
  .then(sports_articles => displayStories(sports_articles));

function displayStories(story) {
    story.forEach(showStory)
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

    const $linkToStory = document.createElement('a')
    $linkToStory.setAttribute('href', story.url)
    $linkToStory.setAttribute('target', '_blank')
    $linkToStory.innerText = "Read full story"

    $storyCard.append($title, $description, $image, $linkToStory)
    $divContainer.appendChild($storyCard)
};
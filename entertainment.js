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

let news = [
    {
        "source": {
        "id": null,
        "name": "Chicago Tribune"
        },
        "author": "Eli Countryman, Variety",
        "title": "Chicago’s John Mulaney says he was investigated by Secret Service - Chicago Tribune",
        "description": "Chicago’s John Mulaney says he was investigated by Secret Service after ‘SNL’ joke",
        "url": "https://www.chicagotribune.com/entertainment/ct-ent-john-mulaney-investigated-after-snl-joke-20201203-5azcx72y6jey7byy6fgnetvg6m-story.html",
        "urlToImage": "https://www.chicagotribune.com/resizer/M0r4nL-xtYlG6vOz1cUdk1PdkZQ=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/F2WD3N4W6ZFWRA56CQ6EPIWIFA.jpg",
        "publishedAt": "2020-12-03T12:51:00Z",
        "content": "John Mulaney said comments he made on Saturday Night Live in February resulted in the Secret Service opening an investigation into him.\r\nDuring an interview on Jimmy Kimmel Live! on Tuesday, the come… [+1632 chars]"
        }];

displayStories(news)

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
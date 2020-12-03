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
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "John Wagner",
        "title": "Live updates: Harris names chief of staff, other key aides as Biden transition continues - The Washington Post",
        "description": "The president-elect is hunkered down in Wilmington, Del., with plans to receive an intelligence briefing and meet with transition advisers.",
        "url": "https://www.washingtonpost.com/politics/2020/12/03/joe-biden-trump-transition-live-updates/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HBB7HXHLXZHBLCJ7VNHMATDLNI.jpg&w=1440",
        "publishedAt": "2020-12-03T14:33:21Z",
        "content": "Trump campaign attorneys Rudolph W. Giuliani and Jenna Ellis urged Michigan legislators Wednesday night to intervene in the presidential race and act to overturn certified results showing that Biden … [+1381 chars]"
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
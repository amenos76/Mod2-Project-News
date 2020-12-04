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

// let news = [
//     {
//         "source": {
//         "id": "the-washington-post",
//         "name": "The Washington Post"
//         },
//         "author": "John Wagner",
//         "title": "Live updates: Harris names chief of staff, other key aides as Biden transition continues - The Washington Post",
//         "description": "The president-elect is hunkered down in Wilmington, Del., with plans to receive an intelligence briefing and meet with transition advisers.",
//         "url": "https://www.washingtonpost.com/politics/2020/12/03/joe-biden-trump-transition-live-updates/",
//         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HBB7HXHLXZHBLCJ7VNHMATDLNI.jpg&w=1440",
//         "publishedAt": "2020-12-03T14:33:21Z",
//         "content": "Trump campaign attorneys Rudolph W. Giuliani and Jenna Ellis urged Michigan legislators Wednesday night to intervene in the presidential race and act to overturn certified results showing that Biden … [+1381 chars]"
//     }, 
//     {
//         "source": {
//         "id": null,
//         "name": "Vikings.com"
//         },
//         "author": null,
//         "title": "Vikings QB Kirk Cousins Named NFC Offensive Player of the Week - Vikings.com",
//         "description": "",
//         "url": "https://www.vikings.com/news/kirk-cousins-nfc-offensive-player-week-12",
//         "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/vikings/l9er3llqtdhu13qvfr9p",
//         "publishedAt": "2020-12-03T13:32:34Z",
//         "content": "VIKINGS NAMED NFC PLAYER OF THE WEEK UNDER ZIMMER\r\nDefensive\r\nAnthony Barr, LB\r\n2014, Week 8, at Tampa Bay\r\nSpecial Teams\r\nAdam Thielen, WR\r\n2014, Week 13, vs. Carolina\r\nSpecial Teams\r\nMarcus Sherels… [+1433 chars]"
//     },
//     {
//         "source": {
//         "id": "cnn",
//         "name": "CNN"
//         },
//         "author": "Jasmine Wright, CNN",
//         "title": "Harris assembles staff as she builds her vice presidential portfolio - CNN",
//         "description": "Vice President-elect Kamala Harris is constructing the key team of senior staffers who will accompany her to the White House, announcing Thursday the hiring of three top roles including chief of staff.",
//         "url": "https://www.cnn.com/2020/12/03/politics/kamala-harris-staff/index.html",
//         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201203131916-flournoy-kosoglu-mceldowney-split-super-tease.jpg",
//         "publishedAt": "2020-12-03T13:32:00Z",
//         "content": "(CNN)Vice President-elect Kamala Harris is constructing the key team of senior staffers who will accompany her to the White House, announcing Thursday the hiring of three top roles including chief of… [+8276 chars]"
//         },
//     {
//         "source": {
//         "id": null,
//         "name": "Chicago Tribune"
//         },
//         "author": "Eli Countryman, Variety",
//         "title": "Chicago’s John Mulaney says he was investigated by Secret Service - Chicago Tribune",
//         "description": "Chicago’s John Mulaney says he was investigated by Secret Service after ‘SNL’ joke",
//         "url": "https://www.chicagotribune.com/entertainment/ct-ent-john-mulaney-investigated-after-snl-joke-20201203-5azcx72y6jey7byy6fgnetvg6m-story.html",
//         "urlToImage": "https://www.chicagotribune.com/resizer/M0r4nL-xtYlG6vOz1cUdk1PdkZQ=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/F2WD3N4W6ZFWRA56CQ6EPIWIFA.jpg",
//         "publishedAt": "2020-12-03T12:51:00Z",
//         "content": "John Mulaney said comments he made on Saturday Night Live in February resulted in the Secret Service opening an investigation into him.\r\nDuring an interview on Jimmy Kimmel Live! on Tuesday, the come… [+1632 chars]"
//         }];

fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(articles => displayStories(articles));

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

// news.forEach((story) => {
//     $divContainer
//     console.log(story.source.name)
// })
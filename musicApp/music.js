

let index = 0
let musicIndex = 0
let storedNews = null
let storedMusic = null


async function getNewsData()
{
    const apikey = 'e9b4bc7a6a432a4597764b14bc041f99'
    const url = `https://gnews.io/api/v4/search?q=music&lang=en&country=us&max=10&apikey=${apikey}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        storedNews = data
        //console.log(data)

        displayNews(data)
    }

    catch (error)
    {
        console.error("Error fetching news: ", error)
    }

}

const displayNews = (newsData) =>{

    const newsTitle = document.getElementById("news-title")
    const newsDescription = document.getElementById("news-description")
    const linkContainer = document.getElementById("link")
    const newsContent = document.getElementById("news-content")
    const newsTime = document.getElementById("news-time")
    const imageContainer = document.getElementById("image")
    const newsContainer = document.getElementById("news-container")



    newsTitle.textContent = newsData.articles[index].title
    newsDescription.textContent = newsData.articles[index].description
    newsContent.textContent = newsData.articles[index].content
    newsTime.textContent = newsData.articles[index].publishedAt


    linkContainer.innerHTML = '';
    imageContainer.innerHTML = ''


    const link = document.createElement('a')
    const target = newsData.articles[index].url
    link.href = target
    link.textContent = 'Read More'
    link.target = '_blank'
    linkContainer.appendChild(link);

    const img = document.createElement('img')
    img.src = newsData.articles[index].image
    img.id = 'news-pic'
    imageContainer.appendChild(img);
}


const inputMusic = document.getElementById('input-music');

inputMusic.addEventListener('keydown', function(event) { //gpt
  if (event.key === 'Enter') {
    event.preventDefault(); 
    const searchTerm = inputMusic.value.trim();
    
    if (searchTerm) {
      
      getMusicData(searchTerm);
    }
  }
});



async function getMusicData(value)
{
    const encodedTerm = encodeURIComponent(value.trim()) //gpt
    const url = `https://corsproxy.io/?https://api.deezer.com/search?q=${encodedTerm}` //gpt (corsproxy)


    const response = await fetch(url)
    const data = await response.json()

    storedMusic = data
    musicIndex = 0


    console.log(data)
    displayMusicData(data)
}

//getMusicData("Eminem")

const displayMusicData = (data) =>
{
    const title = document.getElementById("title-name")
    const artist = document.getElementById("artist-name")
    const album = document.getElementById("album-name")
    const songImageContainer = document.getElementById("song-image")
    const songPreviewContainer = document.getElementById("song-preview")



    title.textContent = data.data[musicIndex].title
    artist.textContent = "By: " + data.data[musicIndex].artist.name
    album.textContent = "Album: " + data.data[musicIndex].album.title


    songImageContainer.innerHTML = ''
    songPreviewContainer.innerHTML = ''

    const md5 = data.data[musicIndex].md5_image;
    const imageUrl = `https://e-cdns-images.dzcdn.net/images/cover/${md5}/500x500.jpg`;

    // Create and append image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "Album Cover";
    img.style.maxWidth = "100%"; // Optional styling
    songImageContainer.appendChild(img); //gpt

    const preview = document.createElement('a')
    preview.href = data.data[musicIndex].preview
    preview.target = "_blank"
    preview.textContent = "Free 30s Preview"

    songPreviewContainer.appendChild(preview)





}

function indexplus()
{
    index++
    if(index == storedNews.data.length)
    {
        index = 0
    }
    
    displayNews(storedNews)
}

function musicIndexPlus()
{
    musicIndex++
    if(musicIndex >= storedMusic.data.length)
    {
        musicIndex = 0
    }

    displayMusicData(storedMusic)
}


getNewsData()
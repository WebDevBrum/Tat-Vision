const searchTitles = async (e) => {
  e.preventDefault();
  
  const YOUR_API_KEY = "AIzaSyCjQICRu9MdMJHX0PJLcejb0_OJpezUrlc"
  
  const YOUR_PLAYLIST_ID = "UU41MEzl5NZBQbK1M6UTQNbg"
  
  const channelId = "UC41MEzl5NZBQbK1M6UTQNbg"

  const USER_NAME = "TatVision"

  // const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC41MEzl5NZBQbK1M6UTQNbg&playlistId=${YOUR_PLAYLIST_ID}&key=${YOUR_API_KEY}`;

  // const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&id=${YOUR_PLAYLIST_ID}=${YOUR_API_KEY}`;

  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=UU41MEzl5NZBQbK1M6UTQNbg&key=${YOUR_API_KEY}`;

 
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    //Pagination
    console.log(data.nextPageToken);
    //video id
    data.items.forEach(video => {
      console.log(video.snippet.resourceId.videoId)
    });
    // console.log(data.items[0].snippet.resourceId.videoId);
  } catch (err) {
    console.error(err);
  }
};

const button = document.querySelector(".button");


button.addEventListener('click', searchTitles);

//original
{/* <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/hTdbgse6vmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}


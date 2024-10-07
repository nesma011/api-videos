var allVideos = [
   "1o-BpgQrp6KLihQd0qVkFH5zh249RWq98"
];

async function fetchVideos() {
    let key = "AIzaSyD8UnnLGq3APrLm_IU92glhyjmQRAzQQY8"; //  API key
    let query = `"1nyeX7UKW261y37hcoPkAlJyY6TfTKhZY" in parents`; // The folder ID

    const response = await fetch(`https://www.googleapis.com/drive/v3/files?key=${key}&q=${encodeURIComponent(query)}&fields=files(id,name)`);
    const data = await response.json(); 
    let ids = data.files.map(file => file.id);
    allVideos = ids;
    
    displayAllVideos();
}

// Function to display all videos
function displayAllVideos() {
    allVideos.forEach((videoId) => {
        displayVideos(videoId);
    });
}

// Function to display a single video
function displayVideos(videoId) {
    let video = document.createElement('iframe');
    video.src = `https://drive.google.com/file/d/${videoId}/preview`;
    video.allowFullscreen = true;
    video.allow = "autoplay";
    document.getElementById("video").appendChild(video);
}



fetchVideos();

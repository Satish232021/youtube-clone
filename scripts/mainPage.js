import { data } from "./data.js";
import { sidebarUpdate } from "./sideBar.js";

sidebarUpdate();

const videoContainer = document.querySelector('.video-preview-grid');
let video= '';
function updatePage(){
    data.forEach((data) => {
        videoContainer.innerHTML = '';
         video += `
         <div class="video-preview">
                    <div class="image">
                        <a href='${data.videoLink}'><img class="thumbnail" src="${data.thumbnail}"></a>
                        <div class="video-time">
                            ${data.videoTime}
                        </div>
                    </div>
                    <div class="video-info-grid"> 
                        <div class="profile-fit">
                            <img class="profile" src="${data.profilePicture}" alt="">
                        </div>
                        <div class="video-info">
                            <div class="info">
                            <a href="${data.videoLink}"> <p class="video-title">${data.videoTitle}</p></a>
                            </div>
                            <div class="info">
                                <p class="author">${data.channelName}</p>
                            </div>
                            <div class="info">
                                <p class="video-stats"> ${data.viewCount} &#183; ${data.uploadedTime}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

         `;

         videoContainer.innerHTML = video;
    });
}


updatePage();
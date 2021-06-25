import { 
    albumDuration,
    albumDurationInHoursandMin,
    songLength, 
    } from './functions.js';

const albums = (albumList) => {
    const albumDetails = document.querySelector(".album-details");
    const albumTable = document.querySelector("#album-table");
    const albumCoverImage = document.querySelector("#album-header>div>div>img");


    for (let albumInfo of albumList) {
        if (albumInfo.id === 568120982) {
            albumCoverImage.src = albumInfo.album.cover_medium                                                              // Add album cover image
            albumDetails.innerHTML = `
                <h4>${ albumInfo.album.type.toUpperCase() }</h4>
                <h1>${ albumInfo.album.title }</h1>
                <div class="publish">
                    <img src=${ albumInfo.album.cover_small } width="24px" height="24px">
                    <a href="#"> ${ albumInfo.artist.name }</a> 
                        <span class="year">2018</span>
                        <span class="total-songs"> ${ albumList.length } songs</span>
                        <span class="total-songs"> ${ albumDurationInHoursandMin(albumDuration(albumList)) } </span>
                </div>
            `
        }
    }

    albumList.forEach( (albumInfo, i) => {
        albumTable.innerHTML +=`
            <tr>
                <td>${ i+1 }</td>
                <td>
                    <div class="song-title">${ albumInfo.title }</div>
                    <div class="album-name">${ albumInfo.artist.name }</div>
                </td>
                <td>${ songLength( albumInfo.duration ) }</td>
            </tr>

        `
    });


};
  
window.onload = function () {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Bohemian Rhapsody (The Original Soundtrack)")
        .then(response => response.json())
        .then((data) => data.data)
        .then(albums)
        .catch(console.log);
};
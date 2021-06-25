import {
    // artistDuration,
    // artistDurationInHoursandMin,
    songLength,
} from './functions.js';

const displayArtist = (dataList) => {
    console.log(dataList);
    const { artist } = dataList[1]

    const artistName = document.querySelector(".album-details>h1");
    const artistCoverImage = document.querySelector("#main-content-artist");

    artistCoverImage.style.backgroundImage = `url( ${ artist.picture_xl } )` // Add artist cover image
    artistName.innerHTML = artist.name
};

const displayPopular = (popularList) => {
    console.log("popularList: ");
    console.log(popularList);

    const artistTable = document.querySelector("#artist-table>tbody");
    dataList.forEach((song, i) => {


        if (i && i < 10)
        {
            popularList.innerHTML += `
                <tr>
                    <td>${ i + 1 }</td>
                    <td>
                        <img src=${ song.artist.picture_small } style="height: 40px;float: left;padding-right: 10px;">
                        <div class="song-title">${ song.title }</div>
                    </td>
                    <td>${ song.artist.id }</td>
                    <td>${ songLength(song.duration) }</td>
                </tr>
            `
        }
    });
}

window.onload = function () {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Bohemian Rhapsody (The Original Soundtrack)")
        .then(response => response.json())
        .then((data) => data.data)
        .then(displayArtist)
        .catch(console.log);
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen+popular")
        .then(response => response.json())
        // .then(response => console.log(response) )
        .then((data) => data.data)
        .then(displayPopular)
        .catch(console.log);
};

//! ------------------------------------< Popular release Section >-------------------------------------------
/*Code for artist populer release cards */
displayCards(

    ".popular-releases" ,
    filterData( "showToTry", spotifyDataLarge ),
    card
)
//* END -- Shows to try Section
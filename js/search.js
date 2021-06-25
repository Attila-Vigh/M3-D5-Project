
async function getTheMusic(search
    // = "Does Your Mother Know"
) {
    console.log(search);
    await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${ search } `)
            .then(
                function (responseFromServer) {
                    console.log(1)
                    return responseFromServer.json()
                }
            )
            .then(
                function (responseFromServerJson) {
                    const songsList = responseFromServerJson.data
                    const spotyCardList = document.querySelector(".spoty-card-list")
                    spotyCardList.innerHTML = ""
                    let = cardsList = ""
                    
                    for (song of songsList){
                        console.log(2)
                        
                        cardsList
                            += `
                                <div class="spoty-card">
                                    <div class="card-top">
                                        <img src=${ song.artist.picture_medium }>
                                        <audio class="audio" controls>
                                            Your browser does not support the audio element.
                                            <source src=${ song.preview } type="audio/mpeg">
                                        </audio>
                                    </div>
                                    <h4>${ song.artist.name }</h4>
                                    <h5>${ song.title }</h5>
                                </div>
                            `
                    }
                    spotyCardList.innerHTML += cardsList
                }
            )
            .catch(err => console.error(err))
}

// getTheMusic()

window.onload = function(){

    userInput.onblur = () => getTheMusic(event.target.value)
}

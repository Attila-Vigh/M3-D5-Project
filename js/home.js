import { spotifyDataLarge } from './data/spotifyDataLarge.js'
import { displayCards, filterData } from './functions.js';

//! ------------------------------------< Good Morning Section >-------------------------------------------
const cardGoodMorning = spotify => `<div class="col">
                                        <div class="card mb-3">
                                            <div class="row no-gutters">
                                                <div class="col-3">
                                                <img src=${ spotify.img } alt="..." style="width:100%; height:auto">
                                                </div>
                                                <div class="col-9">
                                                <div class="card-body" style="padding:5px">
                                                    <h5 class="card-title text-truncate" style="font-size:15px">${ spotify.title }</h5>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `

//displayCards(".morning-cards", goodMorningData, cardGoodMorning )


displayCards(
    ".morning-cards",
    filterData("goodMorning", spotifyDataLarge),
    cardGoodMorning
)
//* END -- Good Morning Section
//! ------------------------------------< Card for the next sections >-------------------------------------
const card = spotify => `

<div class="col">
    <div class="card mb-3">
    <img src=${ spotify.img } alt="...">
    <div class="card-body">
        <h5 class="card-title text-truncate">${ spotify.title } </h5>
        <p ><small>Last updated </small></p>
    </div>
    </div>
</div>
`

//! ------------------------------------< Recently played Section >----------------------------------------

displayCards(

    ".recently-played-cards",
    filterData("recentlyPlayed", spotifyDataLarge),
    card
)
//* END -- Recently played Section
//! ------------------------------------< Shows to try Section >-------------------------------------------

displayCards(
    
    ".show-to-try",
    filterData("showToTry", spotifyDataLarge),
    card
    )
    //* END -- Shows to try Section
    


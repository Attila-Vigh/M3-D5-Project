const filterData = ( data, dataList ) => dataList.filter( spotifyData => spotifyData.tag === data ) 

const displayCards = ( selector, spotifyData, card) => {

    const htmlEl = document.querySelector( selector )
    htmlEl.innerHTML = ""

    spotifyData.forEach( spotify => htmlEl.innerHTML += card( spotify ))
}

const songLength = duration =>{ 
    
    const secondsWithZero = (duration%60).toString().length < 2 ? "0" + (duration%60) : (duration%60)
    return `${Math.floor( duration/60)}:${ secondsWithZero }`
}

const albumDurationInHoursandMin = duration =>{ 
    
    return `${Math.floor( duration/60/60)} h ${ Math.floor((duration - 3600 * Math.floor( duration/3600))/60) } min`
}

const albumDuration = ( albumList ) => albumList.map( song => song.duration).reduce( (totalTime, songDuration) => totalTime += songDuration)


export { 
    displayCards, 
    filterData, 
    songLength, 
    albumDurationInHoursandMin, 
    albumDuration
}

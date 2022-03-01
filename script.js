//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  //test page
  // const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // CARD
  //for in - to loop over the episodes
  episodes = episodeList;
  for (let episode of episodeList) {
    console.log(episode);

    // create a card and clone it
    let card = document.querySelector(`.card`).cloneNode(true);
    //removing the template visibility (this needs to remain as a placeholder for javascript)
    card.classList.remove(`template`);
    //update text
    card.querySelector(`.summary`).innerHTML = episode.summary;
    // set the card ID to the episode ID  ( first args the thing I need to change, the second is its value ~ from a key value pair)
    card.setAttribute(`id`, `episode` + episode.id); //not visible

    //update name
    card.querySelector(`.name`).innerHTML = episode.name;

    // combine season number and episode number into an episode code  e.g S02E07 becomes S2E7
    // update season and episode Number
    card.querySelector(`.season-episode`).innerHTML =
      `S` + episode.season + `E` + episode.number;

    //update image
    card.querySelector(`img`).src = episode.image.medium;
    // append other elements in the card
    document.querySelector(`.wrapper`).appendChild(card);
  }
}

//Show Selector
//filter shows list and search

//search support (start-of-word) using includes - search
document.querySelector(`.s-name`).addEventListener("input", function (e) {
  for (let episode of episodes) {
    //if episode name - includes - this value
    if (episode.name.toLowerCase().includes(this.value.toLowerCase())) {
      //remove the - hide class - this knows it is a class so you do not need the `.`
      //Using querySelector with IDs that are numbers
      document.querySelector(`#episode` + episode.id).classList.remove(`hide`);
    } else {
      //adds the - hide class
      document.querySelector(`#episode` + episode.id).classList.add(`hide`);
    }
  }
});

//season selector
document.querySelector(`.s-seasons`).addEventListener("input", function (e) {
  for (let episode of episodes) {
    //if seaseon has this value - using parseInt() function parses a string argument and returns an integer
    if (episode.season === parseInt(this.value)) {
      //remove the - hide class
      document.querySelector(`#episode` + episode.id).classList.remove(`hide`);
    } else {
      //adds the - hide class
      document.querySelector(`#episode` + episode.id).classList.add(`hide`);
    }
  }
});

//episode selector
document.querySelector(`.s-episodes`).addEventListener("input", function (e) {
  for (let episode of episodes) {
    //if episode seaseon - includes - this value
    if (episode.season === parseInt(this.value)) {
      //remove the - hide class
      document.querySelector(`#episode` + episode.id).classList.remove(`hide`);
    } else {
      //adds the - hide class
      document.querySelector(`#episode` + episode.id).classList.add(`hide`);
    }
  }
});

window.onload = setup;

const allPoke = [];
const main$$ = document.querySelector(".b-gallery");

let sound = true;
let miAudio = document.getElementById("Audio-2");
let audioOff = document.getElementById("img");

function sonido() {
  if (sound) {
    miAudio.src = "./assets/audio/opening.mp3";
    miAudio.volume = 0.2;
    miAudio.play();
  } else sound = false;
  //audioOff.addEventListener( 'click', () => miAudio.stop())
}

const arrayPoke = async () => {
  if (allPoke.length === 0) {
    for (let i = 1; i <= 151; i++) {
      const baseDatos = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const rawCards = await fetch(baseDatos);
      const formattedCards = await rawCards.json();
      allPoke.push(formattedCards);
    }
  }
  pokemonCards(allPoke);
  
};

const pokemonCards = (cards) => {
  main$$.innerHTML = "";

  for (const card of cards) {
    if (card.name.toLowerCase().includes(input$$.value.toLowerCase())) {
      const figure$$ = document.createElement("figure");
      const titulo$$ = document.createElement("h2");
      const image$$ = document.createElement("img");
      const div$$ = document.createElement("div");
      //const span$$ = document.createElement("span");
      //const span2$$ = document.createElement("span");
      const descriptionType1$$ = document.createElement("p");
      //descriptionType1$$.className =
       // "b-color__fire  b-color__water b-color__grass b-color__bug b-color__electric";
      //const descriptionType2$$ = document.createElement("p");
      titulo$$.textContent = card.name + " N.º" + card.id;
      image$$.src = card.sprites.other["official-artwork"].front_default;

      descriptionType1$$.textContent = card.types[0].type.name;
      //descriptionType2$$.textContent = card.types[1]?.type.name
      figure$$.appendChild(titulo$$);
      figure$$.appendChild(image$$);
      //figure$$.appendChild(span$$)
      //figure$$.appendChild(span2$$)
      figure$$.appendChild(div$$);
      div$$.appendChild(descriptionType1$$);
      //span$$.className=("type1")
      //div$$.appendChild(descriptionType2$$)
      //span2$$.className=("type2")
      //span$$.appendChild(descriptionType1$$)
      //span$$.appendChild(descriptionType2$$)
      main$$.appendChild(figure$$);

      switch (card.types[0].type.name) {
        case "fire":
          descriptionType1$$.className = "b-color__fire";
          case "fire":
            image$$.className = "b-color__fire";
          break;
        case "water":
          descriptionType1$$.className = "b-color__water";
          case "water":
            image$$.className = "b-color__water";
          break;
        case "grass":
          descriptionType1$$.className = "b-color__grass";
          case "grass":
            image$$.className = "b-color__grass";
          break;
        case "electric":
          descriptionType1$$.className = "b-color__electric";
          case "electric":
            image$$.className = "b-color__electric";
          break;
        case "bug":
          descriptionType1$$.className = "b-color__bug";
          case "bug":
            image$$.className = "b-color__bug";
          break;
        case "ghost":
          descriptionType1$$.className = "b-color__ghost";
          case "ghost":
            image$$.className = "b-color__ghost";
          break;
        case "psychic":
          descriptionType1$$.className = "b-color__psychic";
          case "psychic":
            image$$.className = "b-color__psychic";
          break;
        case "rock":
          descriptionType1$$.className = "b-color__rock";
          case "rock":
            image$$.className = "b-color__rock";
          break;
        case "ground":
          descriptionType1$$.className = "b-color__ground";
          case "ground":
            image$$.className = "b-color__ground";
          break;
        case "fighting":
          descriptionType1$$.className = "b-color__fighting";
          case "fighting":
            image$$.className = "b-color__fighting";
          break;
        case "poison":
          descriptionType1$$.className = "b-color__poison";
          case "poison":
            image$$.className = "b-color__poison";
          break;
        case "normal":
          descriptionType1$$.className = "b-color__normal";
          case "normal":
            image$$.className = "b-color__normal";
          break;
        case "fairy":
          descriptionType1$$.className = "b-color__fairy";
          case "fairy":
            image$$.className = "b-color__fairy";
          break;
        case "dragon":
          descriptionType1$$.className = "b-color__dragon";
          case "dragon":
            image$$.className = "b-color__dragon";
          break;
        case "ice":
          descriptionType1$$.className = "b-color__ice";
          case "ice":
            image$$.className = "b-color__ice";
          break;
      }
    }
  }
};

const input$$ = document.querySelector("input");
input$$.addEventListener("input", () => pokemonCards(allPoke));

arrayPoke();


const allPoke = [] 
const main$$ = document.querySelector(".b-gallery")
let sound = true;
let miAudio = document.getElementById("Audio-2")
let audioOff = document.getElementById("img")




function sonido(){
  if(sound){
     
     miAudio.src="./assets/audio/opening.mp3";	
     miAudio.volume = 0.2;
     miAudio.play();	
     
  }
  else
    sound=false;
  //audioOff.addEventListener( 'click', () => miAudio.stop())
}




const arrayPoke = async () => {
  
    if (allPoke.length ===0) {
    for (let i = 1; i <= 151; i++) {
    const baseDatos =  `https://pokeapi.co/api/v2/pokemon/${i}`;
    const rawCards = await fetch(baseDatos);
  const formattedCards = await rawCards.json();
  allPoke.push(formattedCards);
  
  }}
  pokemonCards(allPoke)
  //console.log(allPoke)
}

  const pokemonCards = (cards) => {
    main$$.innerHTML = '';
    
for (const card of cards) {
  

if(card.name.toLowerCase().includes(input$$.value.toLowerCase())){
   // cards.map((card) => {

     
      const figure$$ = document.createElement("figure"); 
      const titulo$$ = document.createElement("h2");
      const image$$ = document.createElement("img");
      const div$$ = document.createElement("div");
      const span$$ = document.createElement("span");
      const span2$$ = document.createElement("span");
      const descriptionType1$$ = document.createElement("p");
      const descriptionType2$$ = document.createElement("p");
      titulo$$.textContent = card.name + " N.º" + card.id; 
      image$$.src = card.sprites.other["official-artwork"].front_default;
    
      descriptionType1$$.textContent = card.types[0].type.name;
      //descriptionType2$$.textContent = card.types[1]?.type.name
      figure$$.appendChild(titulo$$);
      figure$$.appendChild(image$$);
      //figure$$.appendChild(span$$)
      //figure$$.appendChild(span2$$)
      figure$$.appendChild(div$$)
      div$$.appendChild(descriptionType1$$)
      //span$$.className=("type1")
      //div$$.appendChild(descriptionType2$$)
      //span2$$.className=("type2")
      //span$$.appendChild(descriptionType1$$)
      //span$$.appendChild(descriptionType2$$)
      main$$.appendChild(figure$$)
      





  }
    };
  };




  const input$$ = document.querySelector('input');
  input$$.addEventListener('input', () => pokemonCards(allPoke))
  
  
  arrayPoke();
  
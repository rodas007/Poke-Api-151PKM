
const allPoke = [] 
const arrayPoke = async () => {

    if (allPoke.length ===0) {
    for (let i = 1; i <= 151; i++) {
    const baseDatos =  `https://pokeapi.co/api/v2/pokemon/${i}`;
    const rawCards = await fetch(baseDatos);
  const formattedCards = await rawCards.json();
  allPoke.push(formattedCards);
  
  }}
  pokemonCards(allPoke)
}




  const pokemonCards = (cards) => {

    cards.map((card) => {
      const figure$$ = document.createElement("figure"); 
      const titulo$$ = document.createElement("h2");
      const image$$ = document.createElement("img");
      const description$$ = document.createElement("p");
      const description2$$ = document.createElement("p");
      titulo$$.textContent = card.name; 
      image$$.src = card.sprites.other["official-artwork"].front_default;
    
      description$$.textContent = card.types[0].type.name;
      //description2$$.textContent = card.types[1].type.name
      figure$$.appendChild(titulo$$);
      figure$$.appendChild(image$$);
      figure$$.appendChild(description$$)
      figure$$.appendChild(description2$$)
      document.body.appendChild(figure$$)
  
    });
  };




  
  arrayPoke();
  console.log(allPoke)
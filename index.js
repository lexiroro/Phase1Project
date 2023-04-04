document.addEventListener('DOMContentLoaded', () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(res => res.json())
  .then(data => {
 
 //forEach array iteration
 
   data.drinks.forEach(cocktail => {
     const div = document.createElement('div')
     const h3 = document.createElement('h3')
     const h4 = document.createElement('h4')
     const p = document.createElement('p')
     const img = document.createElement('img')
 
 //Connecting HTML elements to array items
 const ingredients = {
   ingredientOne: cocktail.strIngredient1,
   ingredientTwo: cocktail.strIngredient2,
   ingredientThree: cocktail.strIngredient3,
   ingredientFour: cocktail.strIngredient4,
   ingredientFive: cocktail.strIngredient5,
   ingredientSix: cocktail.strIngredient6,
   ingredientSeven: cocktail.strIngredient7,
 }
 
 
     h3.textContent = cocktail.strDrink;
     h3.classList.add("margaritalist")
     h4.classList.add("container")
     h4.textContent = ingredients
 const ingredientUl = document.createElement('div')
 
 
 for (const [key, value] of Object.entries(ingredients)) { 
 // Object.entries(ingredients) returns an array of arrays. Each nested array // will have 2 elements, the first is the key, the second the value, so we //can use destructuring to define a key and value variable
   if (value) { 
     const ingredientLi = document.createElement('p');
     ingredientLi.textContent = value;
     ingredientUl.appendChild(ingredientLi)
   }
 }
 
 
 
     p.textContent = cocktail.strInstructions
     img.src = cocktail.strDrinkThumb
   
 //appending the elements to the DOM 
 
     div.append(h3)
     document.querySelector('#section').append(div)
 
 //1st Event Listener - Click Event
 
 h3.addEventListener("click",clickAlert);
 h3.classList.toggle('margaritalist')
 function clickAlert() {
   div.append(ingredientUl)
   div.append(p)
   div.append(img)
   }
 
 
 
  //2nd Event Listener - Mouse Enter
 
  h3.addEventListener("mouseenter", (event) => {
   event.target.style.color = "blue";
   setTimeout(() => {
     event.target.style.color = "";
   }, 500);
   }, false)});
 
 })
 })
 
 //3rd Event Listener - Input 
 
 const searchInput = document.querySelector('[data-search]');
 const dataDrinkTemplate = document.querySelector("[data-drink-template]")
 const drinkCardContainer = document.querySelector("[data-drink-cards-container]")
 
 let cocktailDrinks = [];
 
 
 searchInput.addEventListener("input", (e) => {
 const value = e.target.value.toLowerCase()
 cocktailDrinks.forEach(margarita => {
 const isVisible = 
 (margarita.strDrink.toLowerCase().includes(value) || 
 margarita.strInstructions.toLowerCase().includes(value))
 margarita.element.classList.toggle("hide", !isVisible)
 // console.log(cocktailDrinks)
 })
 })
 
 fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
 .then(res => res.json())
 .then(data => {
 
 
 
   cocktailDrinks = data.drinks.map(margarita => {
   const card = dataDrinkTemplate.content.cloneNode(true).children[0]
   const header = card.querySelector("[cocktailname]")
   const infoCard = card.querySelector("[ingredients]")
   const body = card.querySelector("[recipe]")
  
   
 
   const margaritaIngredients = {
     ingredientOne: margarita.strIngredient1,
     ingredientTwo: margarita.strIngredient2,
     ingredientThree: margarita.strIngredient3,
     ingredientFour: margarita.strIngredient4,
     ingredientFive: margarita.strIngredient5,
     ingredientSix: margarita.strIngredient6,
     ingredientSeven: margarita.strIngredient7,
   }
 
 
   header.textContent = margarita.strDrink
    const margaritaUl = document.createElement('ul')
   infoCard.textContent = card.append(margaritaUl)
   body.textContent = margarita.strInstructions
  
 
   for (const [key, value] of Object.entries(margaritaIngredients)) { 
     // Object.entries(ingredients) returns an array of arrays. Each nested array // will have 2 elements, the first is the key, the second the value, so we //can use destructuring to define a key and value variable
       if (value) { 
         const margaritaLi = document.createElement('li');
         margaritaLi.textContent = value;
         margaritaUl.appendChild(margaritaLi)
       }
     }
 
 
   drinkCardContainer.append(card)
   return { strDrink: margarita.strDrink, margaritaIngredients, strInstructions: margarita.strInstructions, element: card }
   })
 })
 
 
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

    h3.textContent = cocktail.strDrink;
    h3.classList.add("margaritalist")
    h4.classList.add("container")
    h4.textContent = (`${cocktail.strIngredient1}, ${cocktail.strIngredient2}, ${cocktail.strIngredient3}, ${cocktail.strIngredient4}, ${cocktail.strIngredient5}, ${cocktail.strIngredient6}, ${cocktail.strIngredient7}`)
    h4.textContent = ingredients;
const ingredientUl = document.createElement(ul)

const ingredients = {
  ingredientOne: cocktail.strIngredient1,
  ingredientTwo: cocktail.strIngredient2,
  ingredientThree: cocktail.strIngredient3,
  ingredientFour: cocktail.strIngredient4,
}

for (const [key, value] in Object.entries(ingredients)) { 
// Object.entries(ingredients) returns an array of arrays. Each nested array // will have 2 elements, the first is the key, the second the value, so we //can use destructuring to define a key and value variable

  if (value) { 
    const ingredientLi = document.createElement('li');
    ingredientLi.textContent = value;
    ul.appendChild(ingredientLi)
  }
  ul.appendChild(ingredientUl)
}
    p.textContent = cocktail.strInstructions
    img.src = cocktail.strDrinkThumb
  
//appending the elements to the DOM 

    div.append(h3)
    document.querySelector('#section').append(div)

//1st Event Listener - Click Event     




h3.addEventListener("click",clickAlert);

function logItem(e) {
  const item = document.querySelector(`[container=${e.target.id}]`);
  item.toggleAttribute('hidden');
}

h3.addEventListener('toggle', logItem)

function clickAlert() {
  div.append(h4)
  div.append(p)
  div.append(img)
  h4.classList.toggle('margaritalist')
  p.classList.toggle('container')
  }
//Deleting Null values from Ingredients - Needs Work

const deleteNull = {
  ingredientOne: cocktail.strIngredient1,
  ingredientTwo: cocktail.strIngredient2,
  ingredientThree: cocktail.strIngredient3,
  ingredientFour: cocktail.strIngredient4,
  ingredientFive: cocktail.strIngredient5,
  ingredientSix: cocktail.strIngredient6,
  ingredientSeven: cocktail.strIngredient7,
}

Object.keys(deleteNull).forEach(key => {
if (deleteNull[key] === null) {
    delete deleteNull[key];
  }
  else {
    return {deleteNull};
  }
  console.log(deleteNull)

})

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
margarita.strDrink.toLowerCase().includes(value) || 
margarita.strInstructions.toLowerCase().includes(value)
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
  header.textContent = margarita.strDrink
  infoCard.textContent = (`${margarita.strIngredient1}, ${margarita.strIngredient2}, ${margarita.strIngredient3}, ${margarita.strIngredient4}`)
  body.textContent = margarita.strInstructions
  drinkCardContainer.append(card)
  return { strDrink: margarita.strDrink, Ingredient:margarita.strIngredient1,strInstructions: margarita.strInstructions, element: card }
  })
})


//Notes: Need to attach function to h4 element
//Need to attach collapse feature for drinks


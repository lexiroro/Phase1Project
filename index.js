document.addEventListener('DOMContentLoaded', () => {
 fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
 .then(res => res.json())
 .then(data => {
// debugger
  data.drinks.forEach(cocktail => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')

    h3.textContent = cocktail.strDrink
    h4.textContent = cocktail.strIngredient1
    p.textContent = cocktail.strInstructions
  

    div.append(h3)
    document.querySelector('#section').append(div)
  
h3.addEventListener("click", clickAlert);

 function clickAlert() {
  div.append(h4)
  div.append(p)
 }

})
})

// document.querySelector('h3').addEventListener('click', function) {
//   function showRecipe() {
//     const h4= document.createElement('h4')
//     const p = document.createElement('p')
// h4.textContent = cocktail.strIngredient1
// p.textContent = cocktail.strInstructions;
// document.querySelector('#section').append(div);
//   }
// }




//  function handleRenderSearch(){
//   document.querySelector('#main').innerHTML = 
//   `<form id="Cocktail-Search>
//   <label for="searchCocktail">Search By Cocktail Name</label>
//   <input id="searchByID" type="text" placeholder="Enter Cocktail here"/>
//   <input type="submit" />
// </form>`

// document.querySelector('#Cocktail-Search').addEventListener('submit', handleAPIquery)
// }

  
// function fetchResource(url) {
//   return fetch(url)
//   .then(res => res.json())
// }

// function createResources(url, body) {
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   .then(res => res.json())
// }
})



//Handles Cocktail API Search

// function handleAPIquery(e) {
//   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//   e.preventDefault()
//   const search = e.target.search.value
//   console.log(search)
// }


// document.querySelector('#form').addEventListener('submit', handleForm) 

// document.querySelector('#searchByID').addEventListener('click',handleRenderSearch)


//Event Listeners - mouse over and mouseleave



// const init = () => {
//   const inputForm = document.querySelector('form')

//   inputForm.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     const input = document.querySelector('input#searchByID');
  
// const title = document.querySelector('section#cockDetails h4');
// const summary = document.querySelector('section#cockDetails p')
// title.innerText = data.title;
// summary.innerText = data.summary;
//  }


//Notes
// This is what works in the console
// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
// .then(res => res.json())
// .then(data => console.log(data.drinks[0].strDrink))

//Attributes 
//1. strDrink = Drink Name
//2. strInstructions = Recipe
//3. strIngredient1 = Recipe Items - followed by number
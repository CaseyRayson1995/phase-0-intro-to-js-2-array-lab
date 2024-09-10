// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]; // Ensure this array is defined in your scope

function destructivelyAppendCat(name) {
    cats.push(name); // This adds the new cat to the end of the array
}



// Write a function called destructivelyPrependCat that takes a name as an argument
// and adds it to the beginning of the cats array.
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
//removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    // Your code to append a cat without modifying the original array
    // Hint: Look into array methods like `concat` or spread operator
}

const Cats = ["Mittens", "Fluffy", "Whiskers"];

function appendCat(name) {
    
    const newCatsArray = [...cats, name];
    return newCatsArray;
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = [name, ...cats];
    return newCats;
  }

  function removeLastCat() {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = cats.slice(0, -1); // This creates a new array without the last element
    return newCats;
  }

  function removeFirstCat(catsArray) {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = cats.slice(1);
return newCats

}
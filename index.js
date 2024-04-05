// 1. Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və tərs ardıcıllıqla yazılmış eyni elementlərdən ibarət massivi qaytaran reverseArray () funksiyasını yazın.

// const letters = ["A", "B", "C", "D", "E"];

// function reverseArray(arr) {
//     return arr.reverse()
// }

// console.log(reverseArray(letters));



// 2. Yadplanetliləri salamlayın. Sözlərdən ibarət massivi qəbul edən və konsolda hər bir yadplanetliyə salamlama çıxarmaq üçün dövrdən istifadə edən greetAliens () funksiyasını yazın. Salam belə bir formatda olmalıdır: "Oh powerful [name], we humans offer our unconditional surrender!”

// const aliens = ["Taleh","Ilkin","Elçin"]

// function greetAliens(aliens){
//     aliens.forEach((name)=> {
//         console.log(`Oh powerful ${name}, we humans offer our unconditional surrender`)
//     })
// }

// greetAliens(aliens);



// 3. 2 massivi parametr kimi qəbul edən və onların eyni dəyərli elementlərin konsola çıxaran justCoolStuff () funksiyasını yazın.


// let sameValues = [];

// const coolStuff = ["gameboys",
//     "skateboards",
//     "backwards hats",
//     "my room",
//     "temporary tattoos"
//   ];

// const myStuff = ["sweaters",
//     "skateboards",
//     "family-night",
//     "my room"
//   ];

//   function justCoolStuff (first,second) {
//     first.forEach((firstItems)=>{
//         second.forEach((secondItems)=>{
//             if(firstItems === secondItems){
//                 sameValues.push([firstItems]);
//             }
//         })
//     })
//   }

// justCoolStuff(coolStuff,myStuff);
// console.log(sameValues);


// 4. Parametr kimi {ad: “Yeməyin adı”, içərik: “bitki, ət və ya süd”} formatında yeməklər massivini qəbul edən və onların hamısının vegetarian olub-olmadığını müəyyən edən isTheDinnerVegan () funksiyasını yazın.

  const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];

  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];

  function isTheDinnerVegan(foods) {
    for(let food of foods) {
      if(food.source !== "plant"){
        return false;
      }
    }
    return true;
  }

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));
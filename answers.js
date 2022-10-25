////////////////////////////////
// Easy Going
////////////////////////////////

// for (let i = 1; i < 21; i++)
// console.log(i)


////////////////////////////////
// Get Even
////////////////////////////////

// for (let i = 2; i < 201; i += 2) {
//     console.log(i);
//   }


////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for (let i = 1; i < 101; i++) { 
//     if (i % 3 == 0  && i % 5 == 0) { 
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0 || i % 5 == 0) { 
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]++
// wolfy[3]  'Gotham City'
// dart[3] = 'Upside Down, Hawkins'
// wolfy[0] = 'Gameboy'
// console.log(wolfy)
// console.log(plantee)
// console.log(dart)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// const ninjaturtles = ['Donatello, Leonardo, Raphael, Michaelangelo']
// for (let i of ninjaturtles) {
//     i=i.toUpperCase
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// favMovies.sort()
// favMovies.pop()
// favMovies.push("Guardians of the Galaxy")
// favMovies.reverse()
// favMovies.shift()
// favMovies.unshift()
// for (let i = 0; i < favMovies.length; i++) {
//     if (favMovies[i] == 'Django Unchained') {
//         favMovies.splice();
//         favMovies[i] = "Avatar";}
//     }
// // favMovies.slice(16, 0, "Avatar")
// console.log(favMovies)
////////////////////////////////
// Where is Waldo
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// whereIsWaldo.splice(1,1);
//  console.log(whereIsWaldo);
//   //neff to no one
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);
//  //Where is waldo
// console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

// let kittyTalk = ["Love me, pet me! HSSSSSS!"] 
// for (let i = 1; i <= 20; i++ ){
//     if (i % 2 === 0){
//         let randomNumber = Math.floor(Math.random()*3)
//         if(randomNumber===0){console.log("...human...why you taking pictures of me?...")} 
//         if(randomNumber===1){console.log("...the catnip made me do it...")}
//         if(randomNumber===2){console.log("...why does the red dot always get away...")} 
//     } else{
//     }
// }

//        console.log("Love me, pet me!HSSSSS"); 

////////////////////////////////
//  Find the Median
////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// const findTheMedian = (nums) => {
//     //Order the values from low to high
//     const sorted = [...nums].sort((a,b) => a - b);
//     //Is our data set odd or even-numbered?
//     if(!(sorted.length % 2)){
//         //If the dataset is even:
//         //Calculate the two middle positions with the formulas (n/2) - 1 and (n/2) where n is the number of values in the dataset.
//         let n1 = sorted[(sorted.length / 2 )- 1], n2 = sorted[sorted.length / 2];
//         //Find the mean of the two middle values with the formula (n1 + n2) / 2
//         return (n1 + n2) / 2;
//     } else { 
//         //If the dataset is odd:
//         //Calculate the middle position with the formula n / 2 where n is the number of values in the dataset.
//         //Return the value in the middle position
//         return sorted[Math.floor(sorted.length / 2)];
//     }
// }

// const unitTest1 = [350, 800, 220, 500, 130];
// const unitTest2 = [350, 800, 220, 500, 130, 1150];

// console.log(`Test One: ${findTheMedian(unitTest1)}`);
// //expected output = 350
// console.log(`Test Two: ${findTheMedian(unitTest2)}`);
// //expected output = 425
// console.log(`Answer: ${findTheMedian(nums)}`);
// //expected output = 15;

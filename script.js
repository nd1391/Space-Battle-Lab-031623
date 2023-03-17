// //User Ship
// let ussAssembly = {
//     hull: 20,
//     firepower: 5,
//     accuracy: 0.7,
// };

// //Alien Ships
// let alienShips = [];
// let numberOfAlienShips = 6;
// for (let i = 0; i < numberOfAlienShips; i++) {
//     let alienShip = {
//         name: `Martian${i + 1}`,
//         hull: Math.floor(Math.random() * 4) + 3,
//         firepower: Math.floor(Math.random() * 3) + 2,
//         accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
//     }
//     alienShips.push(alienShip);
// }

// //The Battle
// //Setup enemy
// let currentShipIndex = 0;
// let isGameOver = false;

// while (!isGameOver) {
//     let currentShip = alienShips[currentShipIndex];
// }

// //Begin
// console.log(`You fired upon alien ship Martian${currentShipIndex + 1}`);
// if (Math.random() < ussAssembly.accuracy) {
//     console.log('Successful hit!');
//     currentShip.hull -= ussAssembly.firepower;
// } else {
//     console.log("You couldn't hit the broad side of a barn!  Attack missed.")
// }

// //Did we destroy the enemy? if not enemy attacks
// if (currentShip.hull <= 0) {
//     console.log(`Alas, you wrecked Martian${currentShipIndex + 1}`);
// } else {
//     console.log(`Martian${currentShipIndex + 1} has opened fire!`)
//     if (Math.random() < currentShip.accuracy) {
//         console.log("You've been struck by a space criminal!")
//         ussAssembly.hull -= currentShip.firepower;
//     } else {
//     console.log("Hah! You made them miss!")
//     }
// }

// //Check if there are more aliens, and prompt user if there are
// if (currentShipIndex === numberOfAlienShips - 1) {
//     console.log("Hot dang! You dun did it, you annihilated their entire fleet!");
//     isGameOver = true;
// } else {

// let input = prompt('Shall we continue?  Or will you cower and retreat?', "Advance or Retreat");
// if (input.toLowerCase() === 'retreat') {
//     console.log('Game Over!')
//     isGameOver = true;
// }   else {
//     currentShipIndex++;
//     }
// } 

// USS Assembly properties
let ussAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
  };
  
  // Alien ship properties
  let alienShips = [];
  let numberOfAlienShips = 6;
  for (let i = 0; i < numberOfAlienShips; i++) {
    let alienShip = {
      hull: Math.floor(Math.random() * 4) + 3,
      firepower: Math.floor(Math.random() * 3) + 2,
      accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
    };
    alienShips.push(alienShip);
  }
  
  // Game logic
  let currentShipIndex = 0;
  let isGameOver = false;
  
  while (!isGameOver) {
    let currentShip = alienShips[currentShipIndex];
  
    // USS Assembly attacks
    console.log(`You attack alien ship ${currentShipIndex + 1}`);
    if (Math.random() < ussAssembly.accuracy) {
      console.log('Your attack hits the alien ship!');
      currentShip.hull -= ussAssembly.firepower;
    } else {
      console.log('Your attack misses the alien ship!');
    }
  
    // Check if the alien ship is destroyed
    if (currentShip.hull <= 0) {
      console.log(`You destroyed alien ship ${currentShipIndex + 1}`);
  
      // Check if there are more alien ships to attack
      if (currentShipIndex === numberOfAlienShips - 1) {
        console.log('Congratulations! You have destroyed all the alien ships!');
        isGameOver = true;
      } else {

        // Ask the user if they want to attack the next ship or retreat
        let input = prompt('Do you want to attack the next ship or retreat? (a/r)');
        if (input.toLowerCase() === 'r') {
          console.log('Game over. You retreated from the battle.');
          isGameOver = true;
        } else {
          currentShipIndex++;
        }
      }
    } else {
        
      // Alien ship attacks
      console.log(`Alien ship ${currentShipIndex + 1} attacks!`);
      if (Math.random() < currentShip.accuracy) {
        console.log('The alien ship hits you!');
        ussAssembly.hull -= currentShip.firepower;
      } else {
        console.log('The alien ship misses you!');
      }
  
      // Check if USS Assembly is destroyed
      if (ussAssembly.hull <= 0) {
        console.log('Game over. The aliens have destroyed your ship.');
        isGameOver = true;
      }
    }
  }
















// class UssAssembly {
// 	constructor(){
// 		this.name = "USS Assembly";
// 		this.hull = 20;
//         this.firepower = 5;
//         this.accuracy = 0.7;
// 	}

// 	// myAttack(enemyShip) {
//     //     if (Math.random() < this.accuracy) {
//     //         enemyShip.hull -= this.firepower;
//     //         console.log(`Successful Hit!  The ${enemyShip} have taken ${this.firepower} damage, with only ${enemyShip.hull} health remaining.`)
//     //     }
//     //     if (target.hull <= 0) {
//     //         console.log("You've destroyed their ship!")
//     //     }
//     //     else {
//     //         console.log("Attack missed!")
//     //     }
// 	// }
// }


// class AlienShip {
//     constructor(name) {
//         this.name = name;
//         this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);
//         this.firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
//         this.accuracy = Math.random() * 0.2 + 0.6; // decimal will default poorly
//     }

//     enemyAttack(myShip) {
//         if (Math.random() < this.accuracy) {
//             myShip.hull -= this.firepower;
//             console.log();
//         }
//     }
// }

// const enemyShips = [];

// for (let i = 0; i < 6; i++) {
//     const enemyShip = new AlienShip(`Martian${i + 1}`)
//     enemyShips.push(enemyShip);
// }
// // const enemyShip1 = new AlienShip("Martian");
// const myShip = new Ship();

// //battle functions begin:
// console.log('Tale of the Tape:')
// console.log(enemyShips);
// console.log(myShip);

// // start battle and call first ship
// function battle(myShip, enemyShip) {
//     while(AlienShip.length > 0) {
//         let currentAlienShip = AlienShips[0]
//     }
//     if (myAttack !== 0) {
//         (enemyAttack)
//     }

//     // if (Math.random() <= myShip.accuracy) {
//     //     currentAlienShip -= myShip.firepower;
//     //     console.log()
//     // }
// }

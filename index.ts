#! /usr/bin/env node
// Adventure game

import inquirer from "inquirer";
import chalk from "chalk";

const currentLocation:string = "Dark room";

console.log(chalk.greenBright("..... Welcome to Adventure Game ....."))

let player = await inquirer.prompt([{
    name:"q1",
    type:'list',
    message:"What do you want to do?",
    choices:["Start Game", "Quit"]
}])

if(player.q1 === "Start Game"){
    console.log(chalk.yellow(`You are Cought by a scariest Monster and he put's you in a ${currentLocation}. You need to kill the monster to go out.`))
    const action = await inquirer.prompt([
        {
            type: 'list',
            name: 'action1',
            message:'What do you want to do?',
            choices: ['Explore further', 'Stay in the room'],
        },

    ]);

    if (action.action1 === 'Explore further') {
        console.log(chalk.yellow("You found another door."));
        const secoundAction = await inquirer.prompt([
            {
                type: 'list',
                name: 'action2',
                message: 'What do you want to do next?',
                choices: ['Go through the door', 'Stay in the room'],
            },
        ]);
        if (secoundAction.action2 === 'Go through the door') {
            console.log(chalk.yellow("\nYou go through the door and find yourself in another room."));
            console.log(chalk.yellow("Now you are in another room.\n"))

         const thirdAction = await inquirer.prompt([
         {
            type: 'list',
            name: 'action3',
            message: 'What do you want to do next?',
            choices: ['Look for clues', 'Exit the room'],
         }]);
        if (thirdAction.action3 === 'Look for clues') {
        console.log(chalk.yellow("\nYou find a note hidden under the bed."))
        console.log(chalk.yellow(`The note says: ${chalk.green('Beware of the monster ahead!')}\n`));

        const fourthAction  = await inquirer.prompt([
            {
                type: 'list',
                name: 'action4',
                message: 'What do you want to do next?',
                choices: ['Continue exploring', 'Go back'],
            },
        ]);
    
        if (fourthAction.action4=== 'Continue exploring') {
            console.log(chalk.yellow("\nYou found a gun hidden behind a painting."))
            console.log(chalk.yellow("Load the gun, you feel more confident.\n"))

            console.log(chalk.yellow("Oh No.... Suddenly, a monster appears in front of you!"))

            const lastAction = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'action5',
                    message: 'What do you want to do?',
                    choices: ['Shoot the monster', 'Run away'],
                },
            ]);
        
            if (lastAction.action5 === 'Shoot the monster') {
                const attack = await inquirer.prompt([{
                    name:'Attack',
                    type:'list',
                    message:"Shoot on monster's :",
                    choices:['Eye','Head',"Chest","leg"]
                }])
                if(attack.Attack === "Head" ){
                console.log(chalk.green("\nYou bravely killed the monster with your gun!."))
                console.log(chalk.green("Congratulations! You've won the game!\n"))
                }
                else{
                    console.log(chalk.red(`\nOops...The monster is very dangerouse he is still alive... the monster catches you `))
                    console.log(chalk.red("Game Over!"))
                }
            } else {
                console.log(chalk.red("\nYou try to run away, but the monster catches up to you."))
                console.log(chalk.red("Game Over!"))
            }
        } 
        else {
            console.log("\nYou decide to go back to the previous room.");
        }
     } else {
        console.log("You exit the room.");
        console.log(chalk.red("Game Over!"));     
        } 
        
     } 
    else {
        console.log(chalk.yellow("\nYou decide to stay in the room and look around."))
        console.log(chalk.red("Game Over!"))
    }   
}
else{
    console.log(chalk.yellow("\nYou decide to stay in the room and look around."));
    console.log(chalk.red("Game Over!"))

}
}
else{
    console.log('Quit...')
}

// class Player{
//     name:string;
//     fuel:number = 100;
//     constructor(name:string){
//         this.name = name
//     }   
// }

// class Opponent{
//     name:string;
//     fuel:number = 100;
//     constructor(name:string){
//         this.name = name
//     }   
// }

// let player = await inquirer.prompt([{
//      name:"name",
//      type:"input",
//      message:"Please enter your name: "
// }])

// let opponent = await inquirer.prompt([{
//     name:"select",
//     type:"list",
//     message:"Select your Opponent",
//     choices:["Skeleton","Alien","Zombie"]
// }])

// let p1 = new Player(player.name)
// let o1 = new Opponent(opponent.name)
 


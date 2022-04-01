const addNewPlayerBtn = document.querySelector('.add-new-player');
const removeAllBtn = document.querySelector('.remove-all-players');
const sortPlayersBtn = document.querySelector('.sort-players');
const playersContainer = document.querySelector('.players-container');
const selected1 = document.querySelector('.selected-players1');
const selected2 = document.querySelector('.selected-players2');

// CREATOR BTNS
const addPlayerCreatorBtn = document.querySelector('.add-player-creator-btn');
const cancelBtn = document.querySelector('.cancel-btn');

// CREATOR
const playerCreator = document.querySelector('.player-creator');
const inputName = document.querySelector('#add-name');
const inputSkill = document.querySelector('#add-skill-lvl');
const inputDamage = document.querySelector('#add-damage-lvl');
const inputSpeed = document.querySelector('#add-speed-lvl');
const errorCreator = document.querySelector('.error')

// sttistics team 1
const skillTeam1 = document.querySelector('.skill-team1');
const damageTeam1 = document.querySelector('.damage-team1');
const speedTeam1 = document.querySelector('.speed-team1');

// sttistics team 2
const skillTeam2 = document.querySelector('.skill-team2');
const damageTeam2 = document.querySelector('.damage-team2');
const speedTeam2 = document.querySelector('.speed-team2');

// TEAM MEMBERS LIST
const ul1 = document.querySelector('.ul1');
const ul2 = document.querySelector('.ul2');

// PLAYER ID
let playerID = 0;

// CREATING DEFAULT PLAYERS 
const Perzu = { name: 'Perzu', skill: 2, damage: 2, speed: 4 };
const Kopec = { name: 'Kopeć', skill: 7, damage: 7, speed: 6 };
const AntMan = { name: 'Ant-Man', skill: 10, damage: 9, speed: 9 };
const Dawid = { name: 'Dawid', skill: 5, damage: 4, speed: 6 };
const Gracjan = { name: 'Gracjan', skill: 8, damage: 6, speed: 10 };
const Jan = { name: 'Jan', skill: 6, damage: 10, speed: 7 };
const Biały = { name: 'Biały', skill: 7, damage: 5, speed: 6 };
const Krzychu = { name: 'Krzychu', skill: 4, damage: 6, speed: 5 };
const Michu = { name: 'Michu', skill: 2, damage: 1, speed: 8 };
const Jasion = { name: 'Jasion', skill: 7, damage: 9, speed: 6 };
const Kajet = { name: 'Kajet', skill: 10, damage: 9, speed: 8 };
const Tymek = { name: 'Tymek', skill: 10, damage: 9, speed: 10 };
const Witek = { name: 'Witek', skill: 5, damage: 5, speed: 8 };
const Darek = { name: 'Darek', skill: 7, damage: 6, speed: 5 };
const Kebik = { name: 'Kebik', skill: 5, damage: 4, speed: 7 };
const Kubson = { name: 'Kubson', skill: 8, damage: 7, speed: 8 };
const Maciek = { name: 'Maciek', skill: 7, damage: 6, speed: 6 };
const Kacper = { name: 'Kacper', skill: 6, damage: 4, speed: 8 };
const Niclas = { name: 'Niclas', skill: 6, damage: 7, speed: 5 };
const Artur = { name: 'Artur', skill: 2, damage: 3, speed: 6 };

// CREATING PLAYERS ARR
let playersArr = [Perzu, Kopec, AntMan, Dawid, Gracjan, Jan, Biały, Krzychu, Michu,
    Jasion, Kajet, Tymek, Witek, Darek, Kebik, Kubson, Maciek, Kacper, Niclas, Artur];

let playersCount = playersArr.length

// Creating and adding players
const openCreator = () => {
    playerCreator.style.display = 'flex'
}

const closeCreator = () => {
    inputName.value = '';
    inputSkill.value = '';
    inputDamage.value = '';
    inputSpeed.value = '';
    playerCreator.style.display = 'none'
}

const addNewPlayer = () => {
    checkForm();
    createNewPlayer();
    closeCreator();
}

// CREATING NEW PLAYER
const createNewPlayer = () => {
    const player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('id', playerID);

    player.innerHTML = `
    <p class="name">${inputName.value} # ${playerID}</p>
    <div class="assets">
        <p class="skill  icon-magic-wand"> ${inputSkill.value}</p>
        <p class="damage icon-fire"> ${inputDamage.value}</p>
        <p class="speed icon-speedometer"> ${inputSpeed.value}</p>
    </div>
    <button class="remove-player" onclick = removeOnePlayer(${playerID}) ><i class="fa-solid fa-circle-xmark"></i></button>
    `
    playersContainer.appendChild(player);

    playerID++;

    let newPlayerObject = { name: `${inputName.value}`, skill: parseInt(inputSkill.value), damage: parseInt(inputDamage.value), speed: parseInt(inputSpeed.value) }
    playersArr.push(newPlayerObject)
}

console.log(playersCount)
// Removing players
const removeOnePlayer = (id) => {
    const playerToRemove = document.getElementById(id);
    playersContainer.removeChild(playerToRemove);
}

const removeAllPlayers = () => {
    playersContainer.innerHTML = ``;
}

const checkForm = () => {
    if (inputName.value === '' ||
        inputSkill.value === '' ||
        inputDamage.value === '' ||
        inputSpeed.value === '') {
        errorCreator.style.visibility = 'visible'
    } else {
        errorCreator.style.visibility = 'hidden'
    }
}

//***************************************************************
//  */ LOADING DEFAULT PLAYERS***********************
// ***********************************************************

const createDefaultPlayers = () => {
    const player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('id', playerID);

    player.innerHTML = `
    <p class="name">${playersArr[playerID].name} # ${playerID}</p>
    <div class="assets">
        <p class="skill  icon-magic-wand"> ${playersArr[playerID].skill}</p>
        <p class="damage icon-fire"> ${playersArr[playerID].damage}</p>
        <p class="speed icon-speedometer"> ${playersArr[playerID].speed}</p>
    </div>
    <button class="remove-player" onclick = removeOnePlayer(${playerID}) ><i class="fa-solid fa-circle-xmark"></i></button>
    `
    playersContainer.appendChild(player);
    playerID++;
}

playersArr.forEach(el => createDefaultPlayers())




//  **********SORTING PLAYERS TO EACH TEAM ****************
// let playersCount = playersArr.length


const sortPlayers = () => {
    console.log('sort players')
    console.log(playersCount)
}




// EVENT LISTENERS
addNewPlayerBtn.addEventListener('click', openCreator);
cancelBtn.addEventListener('click', closeCreator);
addPlayerCreatorBtn.addEventListener('click', addNewPlayer);
removeAllBtn.addEventListener('click', removeAllPlayers);
sortPlayersBtn.addEventListener('click', sortPlayers);

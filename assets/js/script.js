const addNewPlayerBtn = document.querySelector('.add-new-player');
const removeAllBtn = document.querySelector('.remove-all-players');
const sortPlayersBtn = document.querySelector('.sort-players');
const playersContainer = document.querySelector('.players-container');
const selected1 = document.querySelector('.selected-players1');
const selected2 = document.querySelector('.selected-players2');
const notEvenErrDiv = document.querySelector('.not-even-error');
const notEvenCloseBtn = document.querySelector('.close-btn');
const tryAgainDiv = document.querySelector('.try-again');
const tryAgainBtn = document.querySelector('.again-btn');
const shadow = document.querySelector('.shadow');

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

// AMOUNT OF TEAMS
const teamAmount = 2;

// CREATING DEFAULT PLAYERS 

const Perzu = { name: 'Perzu', skill: 5, damage: 3, speed: 6, id: 0, aPTA: 0 };
const Kopec = { name: 'Kopeć', skill: 12, damage: 13, speed: 12, id: 1, aPTA: 0 };
const AntMan = { name: 'Ant-Man', skill: 17, damage: 17, speed: 17, id: 2, aPTA: 0 };
const Dawid = { name: 'Dawid', skill: 10, damage: 11, speed: 12, id: 3, aPTA: 0 };
const Gracjan = { name: 'Gracjan', skill: 11, damage: 13, speed: 20, id: 4, aPTA: 0 };
const Jan = { name: 'Janek', skill: 20, damage: 13, speed: 13, id: 5, aPTA: 0 };
const Biały = { name: 'Biały', skill: 11, damage: 14, speed: 13, id: 6, aPTA: 0 };
const Krzychu = { name: 'Krzychu', skill: 12, damage: 10, speed: 10, id: 7, aPTA: 0 };
const Michu = { name: 'Michu', skill: 3, damage: 4, speed: 14, id: 8, aPTA: 0 };
const Jasion = { name: 'Jasion', skill: 16, damage: 13, speed: 10, id: 9, aPTA: 0 };
const Kajet = { name: 'Kajet', skill: 17, damage: 17, speed: 15, id: 10, aPTA: 0 };
const Tymek = { name: 'Tymek', skill: 16, damage: 20, speed: 19, id: 11, aPTA: 0 };
const Witek = { name: 'Witek', skill: 11, damage: 10, speed: 18, id: 12, aPTA: 0 };
const Darek = { name: 'Darek', skill: 14, damage: 14, speed: 10, id: 13, aPTA: 0 };
const Kebik = { name: 'Kebik', skill: 10, damage: 11, speed: 15, id: 14, aPTA: 0 };
const Kubson = { name: 'Kubson', skill: 16, damage: 17, speed: 17, id: 15, aPTA: 0 };
const Maciek = { name: 'Maciek', skill: 13, damage: 13, speed: 14, id: 16, aPTA: 0 };
const Kacper = { name: 'Kacper', skill: 8, damage: 12, speed: 16, id: 17, aPTA: 0 };
const Niclas = { name: 'Niclas', skill: 14, damage: 14, speed: 10, id: 18, aPTA: 0 };
const Artur = { name: 'Artur', skill: 8, damage: 8, speed: 10, id: 19, aPTA: 0 }; 

// CREATING PLAYERS ARR
let playersArr = [Perzu, Kopec, AntMan, Dawid, Gracjan, Jan, Biały, Krzychu, Michu,
    Jasion, Kajet, Tymek, Witek, Darek, Kebik, Kubson, Maciek, Kacper, Niclas, Artur];
// let playersArr = [Perzu, Kopec, AntMan, Dawid, Gracjan, Jan, Biały, Krzychu, Michu, Jasion];


// FUNCTIONS *****************************************************************************

// function for creating number range
function numberRange(start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
};

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
    if (openError === false) {
        createNewPlayer();
        closeCreator();
    }
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



    let newPlayerObject = { name: `${inputName.value}`, skill: parseInt(inputSkill.value), damage: parseInt(inputDamage.value), speed: parseInt(inputSpeed.value), id: playerID, aPTA: 0 }
    playersArr.push(newPlayerObject);
    playerID++;
}


// Removing players from container and playersArr
let listToRemove = [];

const removeOnePlayer = (id) => {

    const playerToRemove = document.getElementById(id);
    playersContainer.removeChild(playerToRemove);

    listToRemove.push(parseInt(playerToRemove.id));
    console.log(listToRemove);
    updateArr2();

}


// Removing ALL players from container and playersArr
const removeAllPlayers = () => {
    playersContainer.innerHTML = ``;
    playersArr = [];
}

let openError = true;
const checkForm = () => {
    if (inputName.value === '' ||
        inputSkill.value === '' ||
        inputDamage.value === '' ||
        inputSpeed.value === '') {
        openError = true;
        errorCreator.style.visibility = 'visible'
    } else {
        openError = false;
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

// 2 Functions that remove the right player from playersArr
const updateArr1 = () => {
    for (let i = 0; i < playersArr.length; i++) {
        // console.log(playersArr[i].id)

        if (listToRemove.includes(playersArr[i].id)) {
            playersArr.splice(i, 1);
        }
    }
}

const updateArr2 = () => {
    for (let i = 0; i < listToRemove.length; i++) {
        updateArr1();
        console.log(playersArr);
    }
}

//  **********SORTING PLAYERS TO EACH TEAM ****************

const sortPlayers = () => {
   
    // CHECK if teams are even
    console.log(playersArr.length)
    if (playersArr.length % 2 !== 0) {
        openNonEvenErr()
    } else {
        sort()
    }
}


// DECLARING aPTA LIST
let aPTAArr = [];
let team1Indexes = [];
let team2Indexes = [];
let team1Arr = [];
let team2Arr = [];

const sort = () => {
    console.log('click');

    // Average player total asset - aPTA
    // check aPTA for each player and add to the aPTAArr and update aPTA
    // in playersArr

    for (let i = 0; i < playersArr.length; i++) {
        const aPTA = playersArr[i].skill + playersArr[i].damage + playersArr[i].speed;
        console.log(aPTA);
        aPTAArr.push(aPTA);
        playersArr[i].aPTA = aPTAArr[i];
    }

    console.log("----------------");
    // aPta added to each player in playersArr
    console.log(playersArr)

    console.log(aPTAArr)
    // Medium aPTA for each team (goal value during sorting)- goalaPTA
    let sum = 0;
    for (let i = 0; i < aPTAArr.length; i++) {
        sum += aPTAArr[i]
    }

    let goalaPTA = Math.floor(sum / 2);
    console.log(goalaPTA)

    let teamSize = playersArr.length / 2;

    console.log(teamSize);

    console.log('getCombinations ***************');

    const getCombinations = (data, key, size, target, bias = Number.MAX_VALUE) => {
        const iter = (index = 0, sum = 0, right = []) => {
            if (right.length === size) {
                if (Math.abs(target - sum) <= bias) result.push([sum, ...right]);
                return;
            }
            if (index === data.length || sum > target + bias) return;

            iter(index + 1, sum + data[index][key], [...right, index]);
            iter(index + 1, sum, right);
        };

        result = [];

        iter();

        return result;
    };

    target = goalaPTA;

    result = getCombinations(playersArr, 'aPTA', playersArr.length >> 1, target, teamSize);
   
    let count = 0
    result.forEach(el => {
        if (count > 1) {
            return;
        } else if (count < 1) {
            if (el[0] === target) {

                console.log(el);
                team1Indexes.push(...el);
                count++;
            }
        }
    });
   
    team1Indexes.shift();
    
    const pushToRightTeam = () => {
        for (i = 0; i < playersArr.length; i++) {
            if (team1Indexes.includes(i)) {
                team1Arr.push(playersArr[i]);
            } else {
                team2Arr.push(playersArr[i]);
            }
        }
    }

    pushToRightTeam();
  
    const calculateTeamAssets = (arr, anotherArr) => {
        let skillSum = 0;
        let damageSum = 0;
        let speedSum = 0;
        for (i = 0; i < arr.length; i++) {

            skillSum += arr[i].skill;

            damageSum += arr[i].damage;

            speedSum += arr[i].speed;
        }
        anotherArr.push(skillSum);
        anotherArr.push(damageSum);
        anotherArr.push(speedSum);
    }

    let team1SumOfAssets = [];
    let team2SumOfAssets = [];

    calculateTeamAssets(team1Arr, team1SumOfAssets);
    calculateTeamAssets(team2Arr, team2SumOfAssets);


    const reprezentTeamsGraphicly = () => {

        tryAgainDiv.style.display = 'block';
        shadow.style.display = 'block';
        for (i = 0; i < team1Arr.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = `${team1Arr[i].name}`;
            ul1.appendChild(liElement);
            skillTeam1.textContent = ` ${team1SumOfAssets[0]}`;
            damageTeam1.textContent = ` ${team1SumOfAssets[1]}`;
            speedTeam1.textContent = ` ${team1SumOfAssets[2]}`;

        };
        for (i = 0; i < team2Arr.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = `${team2Arr[i].name}`;
            ul2.appendChild(liElement);
            skillTeam2.textContent = ` ${team2SumOfAssets[0]}`;
            damageTeam2.textContent = ` ${team2SumOfAssets[1]}`;
            speedTeam2.textContent = ` ${team2SumOfAssets[2]}`;
        };
        playersArr = [];
    };

    reprezentTeamsGraphicly();
}


const openNonEvenErr = () => {
    console.log('Nr of players is not even!')
    notEvenErrDiv.style.display = 'block';
}

const closeNotEvenErr = () => {
    notEvenErrDiv.style.display = 'none';
}

const clearState = () => {

    window.location.reload(true);
};

// EVENT LISTENERS
addNewPlayerBtn.addEventListener('click', openCreator);
cancelBtn.addEventListener('click', closeCreator);
addPlayerCreatorBtn.addEventListener('click', addNewPlayer);
removeAllBtn.addEventListener('click', removeAllPlayers);
sortPlayersBtn.addEventListener('click', sortPlayers);
notEvenCloseBtn.addEventListener('click', closeNotEvenErr);
tryAgainBtn.addEventListener('click', clearState);




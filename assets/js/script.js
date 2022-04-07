const addNewPlayerBtn = document.querySelector('.add-new-player');
const removeAllBtn = document.querySelector('.remove-all-players');
const sortPlayersBtn = document.querySelector('.sort-players');
const playersContainer = document.querySelector('.players-container');
const selected1 = document.querySelector('.selected-players1');
const selected2 = document.querySelector('.selected-players2');
const notEvenErrDiv = document.querySelector('.not-even-error');
const notEvenCloseBtn = document.querySelector('.close-btn');

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
const Perzu = { name: 'Perzu', skill: 2, damage: 2, speed: 4, id: 0, aPTA: 0 };
const Kopec = { name: 'Kopeć', skill: 7, damage: 7, speed: 6, id: 1, aPTA: 0 };
const AntMan = { name: 'Ant-Man', skill: 10, damage: 9, speed: 9, id: 2, aPTA: 0 };
const Dawid = { name: 'Dawid', skill: 5, damage: 4, speed: 6, id: 3, aPTA: 0 };
const Gracjan = { name: 'Gracjan', skill: 8, damage: 6, speed: 10, id: 4, aPTA: 0 };
const Jan = { name: 'Jan', skill: 6, damage: 10, speed: 7, id: 5, aPTA: 0 };
const Biały = { name: 'Biały', skill: 7, damage: 5, speed: 6, id: 6, aPTA: 0 };
const Krzychu = { name: 'Krzychu', skill: 4, damage: 6, speed: 5, id: 7, aPTA: 0 };
const Michu = { name: 'Michu', skill: 2, damage: 1, speed: 8, id: 8, aPTA: 0 };
const Jasion = { name: 'Jasion', skill: 7, damage: 9, speed: 6, id: 9, aPTA: 0 };
const Kajet = { name: 'Kajet', skill: 10, damage: 9, speed: 8, id: 10, aPTA: 0 };
const Tymek = { name: 'Tymek', skill: 10, damage: 9, speed: 10, id: 11, aPTA: 0 };
const Witek = { name: 'Witek', skill: 5, damage: 5, speed: 8, id: 12, aPTA: 0 };
const Darek = { name: 'Darek', skill: 7, damage: 6, speed: 5, id: 13, aPTA: 0 };
const Kebik = { name: 'Kebik', skill: 5, damage: 4, speed: 7, id: 14, aPTA: 0 };
const Kubson = { name: 'Kubson', skill: 8, damage: 7, speed: 8, id: 15, aPTA: 0 };
const Maciek = { name: 'Maciek', skill: 7, damage: 6, speed: 6, id: 16, aPTA: 0 };
const Kacper = { name: 'Kacper', skill: 6, damage: 4, speed: 8, id: 17, aPTA: 0 };
const Niclas = { name: 'Niclas', skill: 6, damage: 7, speed: 5, id: 18, aPTA: 0 };
const Artur = { name: 'Artur', skill: 2, damage: 3, speed: 6, id: 19, aPTA: 0 };

// CREATING PLAYERS ARR
let playersArr = [Perzu, Kopec, AntMan, Dawid, Gracjan, Jan, Biały, Krzychu, Michu,
    Jasion, Kajet, Tymek, Witek, Darek, Kebik, Kubson, Maciek, Kacper, Niclas, Artur];
// let playersArr = [Perzu, Kopec, AntMan, Dawid, Gracjan, Jan, Biały, Krzychu, Michu, Jasion];


// FUNCTIONS *****************************************************************************

// function for creating numer range
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

    let newPlayerObject = { name: `${inputName.value}`, skill: parseInt(inputSkill.value), damage: parseInt(inputDamage.value), speed: parseInt(inputSpeed.value), id: playerID, aPTA: 0 }
    playersArr.push(newPlayerObject)
}


// Removing players from container and playersArr
let listToRemove = [];

const removeOnePlayer = (id) => {

    const playerToRemove = document.getElementById(id);
    playersContainer.removeChild(playerToRemove);

    listToRemove.push(parseInt(playerToRemove.id))
    console.log(listToRemove)
    updateArr2();

}


// Removing ALL players from container and playersArr
const removeAllPlayers = () => {
    playersContainer.innerHTML = ``;
    playersArr = [];
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

// 2 Functions that removes the right player from playersArr
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
    console.log('sort players');

    console.log('final arr')
    console.log(playersArr)

    // CHECK if teams are even
    console.log(playersArr.length)
    if (playersArr.length % 2 !== 0) {
        openNonEvenErr()
    } else {
        sort()
    }
}


// DECLARING aPTA LIST
const aPTAArr = [];

const sort = () => {
    console.log('click');

    // Average player total asset - aPTA

    // const aPTA = Math.round((mediumSpeed + mediumSkill + mediumDamage) / 3);
    // console.log(`aPTA: ${aPTA}`);

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
    let team1Arr = [];
    let team1aPTA = 0;
    // let nrInRange = numberRange((goalaPTA + 1), (goalaPTA + 3));

    // console.log(nrInRange)
    // team1Arr.length = teamSize;
    // let team2Arr = [];
    // team2Arr.length = teamSize;

    console.log('pętla while ***************')
    // let i = 0;
    // if (nrInRange.includes(team1aPTA) === false) {
    //     do {
    //         team1aPTA += aPTAArr[i];
    //         console.log(team1aPTA);

    //         team1Arr.push(aPTAArr[i]);
    //         console.log(team1Arr);
    //         i++;

    //     } while (team1aPTA <= goalaPTA && team1Arr.length < teamSize);
    // }

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
    console.log('target below');
    console.log(target);

    result = getCombinations(playersArr, 'aPTA', playersArr.length >> 1, target, teamSize);
    console.log('result ************************************');
    // console.log(result);
    // console.log(result[0][0]);

    // result.forEach(el => console.log(el[0]));
    let count = 0
    result.forEach(el => {
        if (count > 1) {
            return;
        } else if (count < 1) {
            if (el[0] === target) {

                console.log(el);
                count++;
            }
        }
    });


}




const openNonEvenErr = () => {
    console.log('Nr of players is not even!')
    notEvenErrDiv.style.display = 'block';
}

const closeNotEvenErr = () => {
    notEvenErrDiv.style.display = 'none';
}


// EVENT LISTENERS
addNewPlayerBtn.addEventListener('click', openCreator);
cancelBtn.addEventListener('click', closeCreator);
addPlayerCreatorBtn.addEventListener('click', addNewPlayer);
removeAllBtn.addEventListener('click', removeAllPlayers);
sortPlayersBtn.addEventListener('click', sortPlayers);
notEvenCloseBtn.addEventListener('click', closeNotEvenErr);



// BRUDNOPIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let skillSum = 0;
// let damageSum = 0;
// let speedSum = 0;
// for (i = 0; i < playersArr.length; i++) {

//     skillSum += playersArr[i].skill;

//     damageSum += playersArr[i].damage;

//     speedSum += playersArr[i].speed;
// }
// // console.log(skillSum);
// const mediumSkill = Math.round(skillSum / playersArr.length);
// console.log(mediumSkill);
// // console.log(damageSum);
// const mediumDamage = Math.round(damageSum / playersArr.length);
// console.log(mediumDamage);
// // console.log(speedSum);
// const mediumSpeed = Math.round(speedSum / playersArr.length);
// console.log(mediumSpeed);

// function numberRange(start, end) {
//     return new Array(end - start).fill().map((d, i) => i + start);
// }

// console.log('nr')
// let nr = numberRange(1, 10);
// console.log(nr)


// do {
    //     team1aPTA += aPTAArr[i];
    //     console.log(team1aPTA);

    //     team1Arr.push(aPTAArr[i]);
    //     console.log(team1Arr);
    //     i++;

    // } while (team1aPTA <= goalaPTA && team1Arr.length < teamSize);
    // team1aPTA !== goalaPTA &&
    // team1Arr.length <= teamSize &&
    // team1aPTA <= (goalaPTA - 2) && team1aPTA <= (goalaPTA + 2)
    // && nrInRange.includes(team1aPTA)

// ********************************************************
// const getCombinations = (data, key, size, target, bias = Number.MAX_VALUE) => {
//     const iter = (index = 0, sum = 0, right = []) => {
//         if (right.length === size) {
//             if (Math.abs(target - sum) <= bias) result.push([sum, ...right]);
//             return;
//         }
//         if (index === data.length || sum > target + bias) return;

//         iter(index + 1, sum + data[index][key], [...right, index]);
//         iter(index + 1, sum, right);
//     },
//         result = [];

//     iter();
//     return result;
// },
//     presentPlayers = [{ name: 'Perzu', aPTA: 8 }, { name: 'Kopeć', aPTA: 20 }, { name: 'Ant-Man', aPTA: 28 }, { name: 'Dawid', aPTA: 15 }, { name: 'Gracjan', aPTA: 24 }, { name: 'Jan', aPTA: 23 }]
// target = presentPlayers.reduce((s, { aPTA }) => s + aPTA, 0) / 2,
//     result = getCombinations(
//         presentPlayers,
//         'aPTA',
//         presentPlayers.length >> 1,
//         target,
//         3
//     );

// console.log('sum', '|', 'indices');
// result.forEach(([sum, ...indices]) => console.log(sum, '|', indices.join(' ')));
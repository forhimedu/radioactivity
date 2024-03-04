const choices = document.getElementById('choices');
const answers = document.getElementById('answers');
const question = document.getElementById('question');
const submitButton = document.getElementById('submitButton');
const restartButton = document.getElementById('restart')


const elemData =
    [
        ["Zr", 40],
        ["Nb", 41],
        ["Mo", 42],
        ["Tc", 43],
        ["Ru", 44],
        ["Rh", 45],
        ["Pd", 46],
        ["Ag", 47],
        ["Cd", 48],
        ["In", 49],
        ["Sn", 50],
        ["Sb", 51],
        ["Te", 52],
        ["I", 53],
        ["Xe", 54],
        ["Cs", 55],
        ["Ba", 56],
        ["La", 57],
        ["Ce", 58],
        ["Pr", 59],
        ["Nd", 60],
        ["Pm", 61],
        ["Sm", 62],
        ["Eu", 63],
        ["Gd", 64],
        ["Tb", 65],
        ["Dy", 66],
        ["Ho", 67],
        ["Er", 68],
        ["Tm", 69],
        ["Yb", 70],
        ["Lu", 71],
        ["Hf", 72],
        ["Ta", 73],
        ["W", 74],
        ["Re", 75],
        ["Os", 76],
        ["Ir", 77],
        ["Pt", 78],
        ["Au", 79],
        ["Hg", 80],
        ["Tl", 81],
        ["Pb", 82],
        ["Bi", 83],
        ["Po", 84],
        ["At", 85],
        ["Rn", 86],
        ["Fr", 87],
        ["Ra", 88],
        ["Ac", 89],
        ["Th", 90]
    ]

const rawElemData = 
    [
        {
            "symbol": "Zr",
            "mass": 123,
            "proton": 40,
            "neutron": 83
        },
        {
            "symbol": "Nb",
            "mass": 141,
            "proton": 41,
            "neutron": 100
        },
        {
            "symbol": "Mo",
            "mass": 148,
            "proton": 42,
            "neutron": 106
        },
        {
            "symbol": "Tc",
            "mass": 151,
            "proton": 43,
            "neutron": 108
        },
        {
            "symbol": "Ru",
            "mass": 134,
            "proton": 44,
            "neutron": 90
        },
        {
            "symbol": "Rh",
            "mass": 153,
            "proton": 45,
            "neutron": 108
        },
        {
            "symbol": "Pd",
            "mass": 141,
            "proton": 46,
            "neutron": 95
        },
        {
            "symbol": "Ag",
            "mass": 182,
            "proton": 47,
            "neutron": 135
        },
        {
            "symbol": "Cd",
            "mass": 152,
            "proton": 48,
            "neutron": 104
        },
        {
            "symbol": "In",
            "mass": 144,
            "proton": 49,
            "neutron": 95
        },
        {
            "symbol": "Sn",
            "mass": 167,
            "proton": 50,
            "neutron": 117
        },
        {
            "symbol": "Sb",
            "mass": 177,
            "proton": 51,
            "neutron": 126
        },
        {
            "symbol": "Te",
            "mass": 173,
            "proton": 52,
            "neutron": 121
        },
        {
            "symbol": "I",
            "mass": 193,
            "proton": 53,
            "neutron": 140
        },
        {
            "symbol": "Xe",
            "mass": 157,
            "proton": 54,
            "neutron": 103
        },
        {
            "symbol": "Cs",
            "mass": 163,
            "proton": 55,
            "neutron": 108
        },
        {
            "symbol": "Ba",
            "mass": 194,
            "proton": 56,
            "neutron": 138
        },
        {
            "symbol": "La",
            "mass": 178,
            "proton": 57,
            "neutron": 121
        },
        {
            "symbol": "Ce",
            "mass": 216,
            "proton": 58,
            "neutron": 158
        },
        {
            "symbol": "Pr",
            "mass": 204,
            "proton": 59,
            "neutron": 145
        },
        {
            "symbol": "Nd",
            "mass": 222,
            "proton": 60,
            "neutron": 162
        },
        {
            "symbol": "Pm",
            "mass": 233,
            "proton": 61,
            "neutron": 172
        },
        {
            "symbol": "Sm",
            "mass": 195,
            "proton": 62,
            "neutron": 133
        },
        {
            "symbol": "Eu",
            "mass": 219,
            "proton": 63,
            "neutron": 156
        },
        {
            "symbol": "Gd",
            "mass": 196,
            "proton": 64,
            "neutron": 132
        },
        {
            "symbol": "Tb",
            "mass": 210,
            "proton": 65,
            "neutron": 145
        },
        {
            "symbol": "Dy",
            "mass": 244,
            "proton": 66,
            "neutron": 178
        },
        {
            "symbol": "Ho",
            "mass": 219,
            "proton": 67,
            "neutron": 152
        },
        {
            "symbol": "Er",
            "mass": 254,
            "proton": 68,
            "neutron": 186
        },
        {
            "symbol": "Tm",
            "mass": 204,
            "proton": 69,
            "neutron": 135
        },
        {
            "symbol": "Yb",
            "mass": 237,
            "proton": 70,
            "neutron": 167
        },
        {
            "symbol": "Lu",
            "mass": 217,
            "proton": 71,
            "neutron": 146
        },
        {
            "symbol": "Hf",
            "mass": 262,
            "proton": 72,
            "neutron": 190
        },
        {
            "symbol": "Ta",
            "mass": 219,
            "proton": 73,
            "neutron": 146
        },
        {
            "symbol": "W",
            "mass": 262,
            "proton": 74,
            "neutron": 188
        },
        {
            "symbol": "Re",
            "mass": 287,
            "proton": 75,
            "neutron": 212
        },
        {
            "symbol": "Os",
            "mass": 284,
            "proton": 76,
            "neutron": 208
        },
        {
            "symbol": "Ir",
            "mass": 258,
            "proton": 77,
            "neutron": 181
        },
        {
            "symbol": "Pt",
            "mass": 238,
            "proton": 78,
            "neutron": 160
        },
        {
            "symbol": "Au",
            "mass": 283,
            "proton": 79,
            "neutron": 204
        },
        {
            "symbol": "Hg",
            "mass": 289,
            "proton": 80,
            "neutron": 209
        },
        {
            "symbol": "Tl",
            "mass": 240,
            "proton": 81,
            "neutron": 159
        },
        {
            "symbol": "Pb",
            "mass": 259,
            "proton": 82,
            "neutron": 177
        },
        {
            "symbol": "Bi",
            "mass": 300,
            "proton": 83,
            "neutron": 217
        },
        {
            "symbol": "Po",
            "mass": 269,
            "proton": 84,
            "neutron": 185
        },
        {
            "symbol": "At",
            "mass": 260,
            "proton": 85,
            "neutron": 175
        },
        {
            "symbol": "Rn",
            "mass": 250,
            "proton": 86,
            "neutron": 164
        },
        {
            "symbol": "Fr",
            "mass": 294,
            "proton": 87,
            "neutron": 207
        },
        {
            "symbol": "Ra",
            "mass": 302,
            "proton": 88,
            "neutron": 214
        },
        {
            "symbol": "Ac",
            "mass": 309,
            "proton": 89,
            "neutron": 220
        },
        {
            "symbol": "Th",
            "mass": 293,
            "proton": 90,
            "neutron": 203
        }
    
]

const particlesData = [
    {name: "альфа", str: `${toSup(4)}${toSub(2)}\u03B1`},
    {name: "альфа", str: `${toSup(4)}${toSub(2)}\u03B1`},
    {name: "протон", str: `${toSup(1)}${toSub(1)}p`},
    {name: "протон", str: `${toSup(1)}${toSub(1)}p`},
    {name: "нейтрон", str: `${toSup(1)}${toSub(0)}n`},
    {name: "нейтрон", str: `${toSup(1)}${toSub(0)}n`},
    {name: "бета/электрон", str: `${toSub("-1")}e`},
    {name: "бета/электрон", str: `${toSub("-1")}\u03B2`},
    {name: "бета/позитрон", str: `${toSub("+1")}e`},
    {name: "бета/позитрон", str: `${toSub("+1")}\u03B2`},
    {name: "гамма", str: `${toSub(0)}\u03B3`},
    {name: "гамма", str: `${toSub(0)}\u03B3`}
]

// used modifyArray to get random new isotopes of elements
function modifyArray(arr) {
    // Function to generate a random number between 1.9 and 2.9
    function getRandomMultiplier() {
        return Math.random() * (2.9 - 1.9) + 1.9;
    }

    // Modify each object in the array
    return arr.map(obj => {
        // Generate a new neutron count based on the proton number
        const newNeutron = Math.round(obj.proton * getRandomMultiplier());

        // Calculate the new mass number
        const newMass = obj.proton + newNeutron;

        // Return the modified object
        return {
            symbol: obj.symbol,
            mass: newMass,
            proton: obj.proton,
            neutron: newNeutron
        };
    });
}

function getRandomElement(array) {
    // Generate a random index between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * array.length);

    // Return the element at the randomly generated index
    return array[randomIndex];
}


function searchElem(value, arr) {
    for(let i = 0; i <= arr.length; i++){
        if (arr[i][1] == value) {
            return arr[i][0];
        }
    }
}

function toSup(value){  
        return value.toString().sup();
}
function toSub(value){
    return value.toString().sub();
}

function elemStringify(element){
    const stringifyElem = `${toSup(element.mass)}${toSub(element.proton)}${element.symbol}`
    return stringifyElem;
}

function findSymbol(proton, arr) {
    for(i = 0; i<arr.length; i++){
        if (arr[i][1] == proton) {
            return arr[i][0];
        }
    }
    return "X"
}


//modifies the element given the particle
function modifyElem(elem, particle, elemDataList) {
    let newProton = null;
    let newMass = null;
    let newNeutron = null;
    let newSymbol = null;
    
    if (particle.name == "альфа"){
        newProton = elem.proton - 2;
        newNeutron = elem.neutron - 2;
         
    } else if (particle.name == "протон"){
        newProton = elem.proton - 1;
        newNeutron = elem.neutron;
    } else if (particle.name == "нейтрон") {
        newProton = elem.proton;
        newNeutron = elem.neutron - 1;
    } else if (particle.name == "бета/электрон") {
        newProton = elem.proton + 1;
        newNeutron = elem.neutron - 1;
    } else if (particle.name == "бета/позитрон") {
        newProton = elem.proton - 1;
        newNeutron = elem.neutron + 1;
    } else {
        return {
            type: particle.name,
            newElement: elem,
    }
}
    newMass = newProton + newNeutron;
    newSymbol = findSymbol(newProton, elemDataList) 
    return {
        type: particle.name,
        newElement: {
        "symbol": newSymbol,
        "proton": newProton,
        "neutron": newNeutron,
        "mass": newMass,
    }}
}

function checkParticle(particle, array) {
    let returnValue = false;
    if (array == []) {
        return false;
    }
    for (i=0; i<array.length; i++){
        if (particle.name == array[i].type) {
            returnValue = true;
        }
    }
    return returnValue;
}


function modifyChoices(elem, particle, particleArr) {
    const arr = [
    ]

    arr.push({type: particle.name, element: modifyElem(elem, particle, elemData)});

    for (i=0; arr.length < 4; i++){
        
        const newParticle = getRandomElement(particleArr);  
        if (!checkParticle(newParticle, arr)) {
            const newElem = modifyElem(elem, newParticle, elemData);
            arr.push({
                type: newParticle.name,
                element: newElem
            })
        }
    }
        

    return arr;

}



function App(){
    const element = getRandomElement(rawElemData);
    const particle = getRandomElement(particlesData);
    const elemString = elemStringify(element);
    const particleString = particle.str;
    let spanQuestion = document.createElement('span');
    spanQuestion.innerHTML = `${elemString} => ${particleString} + `;
    question.appendChild(spanQuestion);

    //the variants of the test
    const variants = modifyChoices(element, particle, particlesData);
    
    variants.forEach( elem => {
        const spanChoice = document.createElement('span');
        spanChoice.classList.add('draggables');
        spanChoice.setAttribute('draggable', "true");
        if (elem.type == particle.name) {
            spanChoice.id = 'ans';
        } else {
            spanChoice.id = `${elemStringify(elem.element.newElement)}`;
        }
        spanChoice.innerHTML = elemStringify(elem.element.newElement);
        choices.appendChild(spanChoice);
    })


    //draggable code
    let draggables = document.querySelectorAll('.draggables');
    for(const draggableElement of draggables) {
    draggableElement.addEventListener('dragstart', e => {
        let selected = e.target;
        console.log(selected);
        answers.addEventListener('dragover', e => {
            e.preventDefault();
        })
        answers.addEventListener('drop', e => {
            if (selected == null) {

            } else {
                answers.appendChild(selected);
                selected = null;
            }
            
        })
        choices.addEventListener('dragover', e => {
            e.preventDefault();
        })
        choices.addEventListener('drop', e => {
            if (selected == null) {
            }
            else {
            choices.appendChild(selected);
            selected = null;
            }
            
            
        })
    })
    }


    submitButton.addEventListener('click', () => {
        if ( answers.querySelector('#ans') ) {
            const ans = document.querySelector('#ans');
            question.appendChild(ans);
            const spanAns = document.createElement('h1');
            spanAns.innerHTML = 'Жауабыңыз дұрыс секілді, қайтадан бастауды басыңыз'
            answers.appendChild(spanAns);
        }   
    })
    
    restartButton.addEventListener('click', () => {
        question.innerHTML = "";
        answers.innerHTML = "";
        choices.innerHTML = "";
        App();
    })

}





App();
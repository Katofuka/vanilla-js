
// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

//++ 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy = { ...man } //  your code
man.name = 'Lilly'
console.log('1.\t', 'man: ', man, '\n\t', 'manFullCopy', manFullCopy);
console.log('\n\t');

//++ 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]  //  your code
numbersFullCopy[1] = 42
console.log('2.\t', 'numbers: ', numbers, '\n\t', 'numbersFullCopy: ', numbersFullCopy);
console.log('\n\t');

//++ 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = { ...man, mother: { ...man1.mother } } // your code
man1.mother.name = 'Lilly'
console.log('3.\t', 'man1.mother.name: ', man1.mother.name, '\n\t', 'man1FullCopy.mother.name: ', man1FullCopy.mother.name);
console.log('\n\t');

//++ 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = { ...man2, friends: [...man2.friends] } // your code
man2.friends.push('Vilnus')
console.log('4.\t', 'man2.friends: ', man2.friends, '\n\t', 'man2FullCopy.friends: ', man2FullCopy.friends);
console.log('\n\t');

//++ 5 Array of objects
let people = [
    { name: "Peter", age: 30 },
    { name: "Steven", age: 32 },
    { name: "William", age: 28 }
];

let peopleFullCopy = people.map(el => { return { ...el } })  // your code
peopleFullCopy[1].name = "Laura"
console.log('5.\t', 'people: ', people, '\n\t', 'peopleFullCopy:', peopleFullCopy);
console.log('\n\t');

//++ 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        { name: "Peter", age: 30 },
        { name: "Steven", age: 32 },
        { name: "William", age: 28 }
    ]
};

let man3FullCopy = { ...man3, friends: man3.friends.map(el => { return { ...el } }) }//  your code
man3FullCopy.friends[2].age = 42
man3.age = 16
console.log('6.\t', 'man3: ', man3, '\n\t', 'man3FullCopy:', man3FullCopy);
console.log('\n\t');


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = { ...man4, mother: { ...man4.mother, work: { ...man4.mother.work } } }    //  your code
man4.mother.work.position = "pediatr"

console.log('7.\t', 'man4: ', man4.mother.work.position, '\n\t', 'man4FullCopy:', man4FullCopy.mother.work.position);
console.log('\n\t');

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            { name: "Kevin", age: 80 },
            { name: "Jennifer", age: 78 },
        ]
    }
};

let man5FullCopy = {
    ...man5, mother:
    {
        ...man5.mother,
        work: {...man5.mother.work},
        parents: man5.mother.parents.map(el => {return {...el}})
    }
} //  your code
man5FullCopy.mother.parents[0].age = 76
console.log('8.\t', man5, '\n\t', man5FullCopy);
console.log('\n\t');

// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother, work: { ...man6.mother.work },
        parents: man6.mother.parents.map(el => {
            return {
                ...el, favoriteDish: { ...el.favoriteDish }
            }
        })
    }
} //  your code
man6.mother.parents[1].name = "Stephany"
console.log('9.\t', man6, '\n\t', man6FullCopy);
console.log('\n\t');

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        { title: "beet", amount: 3 },
                        { title: "potatoes", amount: 5 },
                        { title: "carrot", amount: 1 },
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        { title: "fish", amount: 1 },
                        { title: "rise", amount: 0.5 }
                    ]
                }
            },
        ]
    }
};
let man7FullCopy = {
    ...man7,
    mother: {
        ...man7.mother,
        work: { ...man7.mother.work },
        parents: man7.mother.parents.map(el => {
            return {
                ...el,
                favoriteDish: {
                    ...el.favoriteDish,
                    ingredients: el.favoriteDish.ingredients.map(perEl => { return { ...perEl } })
                }
            }
        })
    }
}
man7FullCopy.mother.parents[0].name = 'Iren'
man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title = "Tomatoes"

console.log('10.\t', man7, man7FullCopy);


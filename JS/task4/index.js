const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];

const getNames = (arr) => {
    const names = arr.map((person) => person.name);
    return names;
}

const getBirthYear = (arr) => {
    return arr
        .filter(person => person.birthday.split("-")[2] < 1990)
        .map(person => person.birthday.split("-")[2]);
}

const getFoodCount = (arr) => {
    const foodCount = {};
    arr.forEach(food => {
        food.favoriteFoods.meats.forEach(meat => {
            if (foodCount[meat]) {
                foodCount[meat]++;
            } else {
                foodCount[meat] = 1;
            }
        });
        food.favoriteFoods.fish.forEach(fish => {
            if (foodCount[fish]) {
                foodCount[fish]++;
            } else {
                foodCount[fish] = 1;
            }
        });
    })
    return foodCount;

}

console.log(getNames(data));
console.log(getBirthYear(data));
console.log(getFoodCount(data));

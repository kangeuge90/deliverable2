let petName = prompt("Hello, what will your pet's name be?");

let en = 0;
let ha = 0;

for (let i = 1; i < 7; i++) {
    let action = prompt("Would you like to feed, pet, or walk " + petName + "? (Use all lowercase!)") ;
        if (action === "feed") {
            en += 2;
        }
        if (action === "pet") {
            ha += 1;
        }
        if (action === "walk" && en > 0) {
            en -= 1;
            ha += 2;
        }
        if (action === "walk" && en <= 0) {
            alert(petName + " does not have enough energy to go on a walk!")
        }
}

console.log(petName);
console.log(en + " energy");
console.log(ha + " happiness");
console.log(petName + " has " + ha + " happiness and " + en + " energy.");

function takeShower() {
    return 'Showering';
}
function eatBrakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}
function cookFood() {
    let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
    return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
    console.log(takeShower())
    console.log(eatBrakfast())
    console.log("Ok Ready to go to work!")
}
wakeUp();
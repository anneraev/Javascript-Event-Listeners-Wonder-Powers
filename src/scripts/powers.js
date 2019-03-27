const flightButton = document.querySelector("#activate-flight")
const mindButton = document.querySelector("#activate-mindreading")
const xrayButton = document.querySelector("#activate-xray")
const activeButton = document.querySelector("#activate-all")
const deactiveButton = document.querySelector("#deactivate-all")

let powersArray = [];

const powersHandler = (powersArray, disable) => {
    powersArray.forEach(powerId => {
        const power = document.querySelector(powerId);
        if (disable) {
            power.classList.remove("enabled");
            power.classList.add("disabled");
        } else {
            power.classList.remove("disabled");
            power.classList.add("enabled");
        }
    })
}

flightButton.addEventListener("click", () => {
    powersArray.push("#flight")
    powersHandler(powersArray);
    powersArray = [];
})

mindButton.addEventListener("click", () => {
    powersArray.push("#mindreading")
    powersHandler(powersArray);
    powersArray = [];
})

xrayButton.addEventListener("click", () => {
    powersArray.push("#xray")
    powersHandler(powersArray);
    powersArray = [];
})

activeButton.addEventListener("click", () => {
    powersArray.push("#flight")
    powersArray.push("#mindreading")
    powersArray.push("#xray")
    powersHandler(powersArray);
    powersArray = [];
})

deactiveButton.addEventListener("click", () => {
    powersArray.push("#flight")
    powersArray.push("#mindreading")
    powersArray.push("#xray")
    powersHandler(powersArray, true);
    powersArray = [];
})
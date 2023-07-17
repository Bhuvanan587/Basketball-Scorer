let homeCount = 0
let guestCount = 0
let homePoints = document.getElementById("homeScore-text")
let guestPoints = document.getElementById("guestScore-text")

function home1() {
    homeCount += 1
    homePoints.textContent = homeCount
}

function home2() {
    homeCount += 2
    homePoints.textContent = homeCount
}
function home3() {
    homeCount += 3
    homePoints.textContent = homeCount
}
function guest1() {
    guestCount += 1
    guestPoints.textContent = guestCount
}

function guest2() {
    guestCount += 2
    guestPoints.textContent = guestCount
}
function guest3() {
    guestCount += 3
    guestPoints.textContent = guestCount
}

function reset(){
    homeCount = 0
    guestCount = 0
    homePoints.textContent = 0
    guestPoints.textContent = 0
}
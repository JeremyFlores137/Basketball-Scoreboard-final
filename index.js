const scoreEl1=document.getElementById("increment-left")
const scoreEl2=document.getElementById("increment-right")
const pHome= document.getElementById("period-home")
const pGuest= document.getElementById("period-guest")
const fHome= document.getElementById("fouls-home")
const fGuest= document.getElementById("fouls-guest")
const tHome= document.getElementById("timer-home")
const tGuest= document.getElementById("timer-guest")
const time=document.getElementById("timer-div")
const sHome=document.getElementById("score-home")
const sGuest=document.getElementById("score-guest")
const sleft=document.getElementById("increment-left")
const sright=document.getElementById("increment-right")
let score=0
let score2=0
let count=0
let period=0
let peHome=0
let peGuest=0
let faHome=0
let faGuest=0
let chronometerCall
function incrementr1(){
    score+=1
    scoreEl1.textContent=score
}
function incrementr2() {
    score+=2
    scoreEl1.textContent=score
}
function incrementr3() {
    score+=3
    scoreEl1.textContent=score
}
function incrementl1() {
    score2+=1
    scoreEl2.textContent=score2
}
function incrementl2() {
    score2+=2
    scoreEl2.textContent=score2
}
function incrementl3() {
    score2+=3
    scoreEl2.textContent=score2
}
function play(){
    scoreEl1.textContent=0
    scoreEl2.textContent=0
    chronometerCall = setInterval(timer, 1000)
    pHome.textContent=""
    pGuest.textContent=""
    fGuest.textContent=""
    fHome.textContent=""
    tHome.textContent=""
    tGuest.textContent=""
    sHome.textContent=""
    sGuest.textContent=""
    score2=0
    score=0
}
function timer(){
    time.textContent="🧭Time: "+count+" sec"
    count+=1
    if(count%10==0 && count!=0){
        period+=1
    }
}
function reset(){
    faGuest= Math.floor(Math.random()*count)
    faHome= Math.floor(Math.random()*count)
    pHome.textContent=period
    pGuest.textContent=period
    fGuest.textContent=faGuest
    fHome.textContent=faHome
    tHome.textContent=count+" sec"
    tGuest.textContent=count+" sec"
    sHome.textContent=sleft.textContent
    sGuest.textContent=sright.textContent
    sleft.textContent=0
    sright.textContent=0
    clearInterval(chronometerCall)
    time.textContent= "The game is finished! 🧭"
    count=0
    period=0
    score2=0
    score=0
}
console.log("Java Script")
let time = 0
let interval;

let timer = document.getElementById("timer")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")



start.addEventListener("click", () => {
    if(interval) return
    interval =  setInterval(()=>{
        time++;
        timer.innerText = time
    },1000)
    console.log("Interval id")
    console.log(interval)
})


stop.addEventListener('click',()=>{
    if(!interval) return
    console.log(time)
    console.log("Which interval id you clear",interval)
    clearInterval(interval)
    interval = null
})

reset.addEventListener('click',()=>{

    clearInterval(interval)
    interval = null
    time = null
    timer.innerText = time
})
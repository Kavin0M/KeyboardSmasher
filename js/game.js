let nickname = localStorage.getItem("nickname")
let click = new Audio("sound.mp3")
let flash = new Audio("display.mp3")
const button = document.getElementById("num1")
const scoreDisplay = document.getElementById("points")
const colorList = {
    color1: "#845EC2",
    color2: "#D65DB1",
    color3: "#FF6F91",
    color4: "#FF9671",
    color5: "#FFC75F",
    color6: "#F9F871"
}
const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let times = 0
let score = -1
let pressCount = 0
let arr = new Array
let flag = false

resetFunction()

document.addEventListener("keydown",press(e))
document.addEventListener("click",touch(e))

function resetFunction(){
    times++
    score++
    pressCount = 0 
    scoreUpdate()
    arr = letterSelect(times)
    displayLetter(arr)
}

function check(button,arr){
    let len = arr.length
     if (arr[pressCount] == button){
        pressCount++
        if(pressCount == len){
            resetFunction()
            flag = false
        }
    }else{
        localStorage.setItem(nickname,score)
        window.open("gameover.html","_self")
    }
}

function letterSelect(count){
    let temp = new Array
    for (let i = 0;i<count; i++){
        a = Math.floor(Math.random()*alphabets.length)
        temp.push(alphabets.splice(a,1)[0])
    }
    for (let i = 0; i<temp.length; i++){
        alphabets.unshift(temp[i])
    }
    return temp
}

function scoreUpdate(){
    scoreDisplay.innerText = score
}

function displayLetter(arr){
    let i = 0
    const display = setInterval(()=>{
        if (i<arr.length){
            buttonGlow(arr[i])
            i++
        }else{
            clearInterval(display)
        }
    },1000)
    setTimeout(()=>{
        flag = true
    },(arr.length+0.5)*1000)
}

function buttonPress(element){
    let button = document.getElementById(element)
    button.style.backgroundColor = "#2b2b2b"
    button.style.color = "white"
    button.style.borderColor = "white"
    button.style.boxShadow = "0px 0px"
    button.style.transform = "translateX(5px)"
    button.style.transform = "translateY(5px)"
    click.currentTime = 0
    click.play()
    setTimeout(()=>{
        button.style.backgroundColor = colorList[button.classList[2]]
        button.style.color = "black"
        button.style.borderColor = "black"
        button.style.boxShadow = "0 5px 5px"
        button.style.transform = "translateX(0px)"
        button.style.transform = "translateY(0px)"
    },200)
}

function press(e){
    return (e)=>{
        if (flag){
            let button = e.key.toLowerCase()
            buttonPress(button)
            check(button,arr)
        }
    }
}

function touch(e){
    return (e)=>{
        if(e.target.classList[0] == "button" && flag){
            let button = e.target.id
            buttonPress(button)
            check(button,arr)
        }
    }
}

function buttonGlow(element){
    flash.currentTime = 0
    flash.play()
    let button = document.getElementById(element)
    button.style.boxShadow = ` 0 5px 10px 10px white`
    setTimeout(()=>{
        button.style.boxShadow = "0 5px 5px"
    },300)
}
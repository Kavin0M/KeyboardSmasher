const title = document.getElementById("title")
const instruction = document.getElementById("instruction")
const goodluck = document.getElementById("goodluck")
const nextPage = document.getElementById("next-page")
const continueButton = document.getElementById("continue")
const skip = document.getElementById("skip")
var flag = true

const text1 = "Instructions"
var i = 0

function titleWriter(){
    if (i < text1.length && flag){
        title.innerText += text1.charAt(i)
        i++
        setTimeout(titleWriter,100)
    }
}

const writer1 = setTimeout(titleWriter(),0)

const text2 = 'Challenge your memory and reflexes in this exciting game! Watch as a series of keys light up in a specific order, and then test your ability to recall and react quickly. The keys will illuminate one by one, creating a unique sequence every round. Your task is to replicate the exact order by pressing the keys in the same sequence.Can you keep up as the patterns become more complex and faster? Your score increases with each successful sequence, but a single mistake will end your streak. See how far you can go and prove your memory and dexterity in this thrilling key-sequencing game!'
var j = 0

function instructionWriter(){
    if (j < text2.length && flag){
        instruction.innerHTML += text2[j]
        j++
        setTimeout(instructionWriter,40)
    }
}

const writer2 = setTimeout(instructionWriter(),0)

const text3 = "Good Luck !!!"
var k = 0

function goodluckWriter(){
    if (k < text3.length && flag){
        goodluck.innerHTML += text3[k]
        k++
        setTimeout(goodluckWriter,50)
    }
}

const writer3 = setTimeout(goodluckWriter,28000)

continueButton.addEventListener("click",()=>{
    window.open("game.html","_self")
})

const writer4 = setTimeout(()=>{
    continueButton.style.display = "flex"
},29000)

skip.addEventListener("click",()=>{
    flag = false
    title.innerHTML = text1
    instruction.innerHTML = text2
    goodluck.innerHTML = text3
    continueButton.style.display = "flex"
    clearTimeout(writer3)
    clearTimeout(writer4)
})

console.log(skip)
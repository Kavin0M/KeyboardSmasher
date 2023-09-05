const button = document.getElementById("num1")
const list = {
    color1: "#845EC2",
    color2: "#D65DB1",
    color3: "#FF6F91",
    color4: "#FF9671",
    color5: "#FFC75F",
    color6: "#F9F871"
}

function buttonFlash(element){
    let button = document.getElementById(element)
    button.style.backgroundColor = "#2b2b2b"
    button.style.color = "white"
    button.style.borderColor = "white"
    setTimeout(()=>{
        button.style.backgroundColor = list[button.classList[2]]
        button.style.color = "black"
        button.style.borderColor = "black"
    },200)
}

document.addEventListener("keydown",(press)=>{
    buttonFlash(press.key)
})


function displayLetter(arr){
    let i = 0
    const display = setInterval(()=>{
        if (i<arr.length){
            buttonFlash(arr[i])
            i++
        }else{
            clearInterval(display)
        }
    },600)
}

// displayLetter(["q","a","z","w","s"])
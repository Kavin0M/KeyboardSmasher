const button = document.getElementById("button")
const title = document.getElementById("title")
const arr = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]

button.addEventListener("click",()=>{
    if (document.getElementById("username").value != "" && document.getElementById("nickname").value != ""){
      const username = document.getElementById("username").value
      const nickname = document.getElementById("nickname").value
      window.open("instruction.html","_self")
      localStorage.setItem("username",username)
      localStorage.setItem("nickname",nickname)
    }
})

var j = 0
var tx1 = "KeyBoardSmasher"

function styleWriter() {
  if (j < tx1.length){
    title.innerText += tx1.charAt(j)
    title.style.color = arr[Math.ceil(Math.random()*arr.length)]
    j++
    setTimeout(styleWriter,100)
  }
}

styleWriter()
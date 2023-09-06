const button = document.getElementById("button")
const title = document.getElementById("title")
const arr = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]

button.addEventListener("click",()=>{
    if (document.getElementById("username").value != ""){
      document.getElementById("alert1").style.display = "none"
      const username = document.getElementById("username").value
    }else{
      document.getElementById("alert1").style.display = "block"
    }

    if (document.getElementById("nickname").value != ""){
      document.getElementById("alert2").style.display = "none"
      const nickname = document.getElementById("nickname").value
      localStorage.setItem("nickname",nickname)
    }else{
      document.getElementById("alert2")
      document.getElementById("alert2").style.display = "block"
    }

    if (document.getElementById("username").value != "" && document.getElementById("nickname").value != ""){
      window.open("instruction.html","_self")
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
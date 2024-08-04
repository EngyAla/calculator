var btnOn = document.querySelectorAll(".btnOn")
var disPlay = document.querySelector("#disPlay")
var AcBtn = document.querySelector(".AcBtn")
var DcBtn = document.querySelector(".DcBtn")
var equal = document.querySelector(".equal")
var result = 0
btnOn.forEach(function(button,index){
    button.onclick = function(){
        disPlay.value += btnOn[index].value
        console.log(disPlay.value)
    }
})

AcBtn.onclick = function(){
    disPlay.value = ""
}
DcBtn.onclick = function(){
    disPlay.value = disPlay.value.toString().slice(0, -1)
}
equal.onclick = function(){
    disPlay.value = eval(disPlay.value)
}

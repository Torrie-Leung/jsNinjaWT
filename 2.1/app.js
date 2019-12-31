//Defines a function that adds a message to an element
function addMsg(ele,msg){
  const msgEle = document.createElement("li")
  msgEle.textContent = msg
  ele.appendChild(msgEle)
}

const first = document.getElementById("first")
addMsg(first,'hey')

//Attaches mousemove event handler to body
document.body.addEventListener('mousemove',function(){
  const second = document.getElementById("second")
  addMsg(second,'Event: mousemove')
})

//Attaches click event handler to body
document.body.addEventListener('click',function(){
  const second = document.getElementById("second")
  addMsg(second,'Event: click')
})

var ninja = {};//assign a new object to a variable
var ninjaArray = [];
ninjaArray.push({}); // adds new object to an array
ninja.data =  {};//assign a new object as a property of another object
function addMsg(ele,msg){
  const msgEle = document.createElement("li")
  msgEle.textContent = msg
  ele.appendChild(msgEle)
}

const first = document.getElementById("first")
addMsg(first,'hey')
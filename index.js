const sectionEl=document.querySelector("section")
const hexCode=document.getElementById("hexCode")
function renderColor(color="023eba", mode="monochrome"){
fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
.then(response=>response.json())
.then(data=>{ 
    sectionEl.textContent=""
hexCode.textContent=""
    
    data.colors.forEach(colors=> {let color=colors.hex.value
const ele=document.createElement("div")
ele.style.backgroundColor=color
ele.style.color=color
ele.textContent="h"
sectionEl.appendChild(ele)
const colorCode=document.createElement("p")
colorCode.textContent=color
colorCode.id=color
hexCode.appendChild(colorCode)
})
})
    }
    renderColor()
    
document.querySelector("button").addEventListener("click",function(){
    const color=document.getElementById("color").value
    const mode=document.getElementById("option").value
    renderColor(color.slice(1,7),mode)
})
hexCode.addEventListener("click",function(e){
    navigator.clipboard.writeText(e.target.id)
})
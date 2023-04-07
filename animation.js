let navegation = document.querySelector(".letter-navegation")
navegation.addEventListener("mouseover",()=>{
    document.querySelector(".a1").classList.add("letter")
})
navegation.addEventListener("mouseout",()=>{
    document.querySelector(".letter").classList.remove("letter")
})
navegation.addEventListener("mouseover",()=>{
    document.querySelector(".a2").classList.add("letter")
})
navegation.addEventListener("mouseout",()=>{
    document.querySelector(".letter").classList.remove("letter")
})
navegation.addEventListener("mouseover",()=>{
    document.querySelector(".a3").classList.add("letter")
})
navegation.addEventListener("mouseout",()=>{
    document.querySelector(".letter").classList.remove("letter")
})
navegation.addEventListener("mouseover",()=>{
    document.querySelector(".a4").classList.add("letter")
})
navegation.addEventListener("mouseout",()=>{
    document.querySelector(".letter").classList.remove("letter")
})

let btnRight = document.querySelector(".btn-right")
let btnLeft = document.querySelector(".btn-left")

btnRight.addEventListener("click",()=>{ 
    document.querySelector(".plan1").classList.replace("t1","t3")
    document.querySelector(".plan2").classList.replace("t2","t1")
    document.querySelector(".plan3").classList.replace("t3","t2")
    document.querySelector(".t3").classList.replace("plan1","plan3")
    document.querySelector(".t2").classList.replace("plan3","plan2")
    document.querySelector(".t1").classList.replace("plan2","plan1")
    document.querySelector(".r1").classList.replace("i1","i3")
    document.querySelector(".r2").classList.replace("i2","i1")
    document.querySelector(".r3").classList.replace("i3","i2")
    document.querySelector(".i3").classList.replace("r1","r3")
    document.querySelector(".i2").classList.replace("r3","r2")
    document.querySelector(".i1").classList.replace("r2","r1")
})

btnLeft.addEventListener("click",()=>{ 
    document.querySelector(".plan1").classList.replace("t1","t2")
    document.querySelector(".plan2").classList.replace("t2","t3")
    document.querySelector(".plan3").classList.replace("t3","t1")
    document.querySelector(".t3").classList.replace("plan2","plan3")
    document.querySelector(".t2").classList.replace("plan1","plan2")
    document.querySelector(".t1").classList.replace("plan3","plan1")
    document.querySelector(".r1").classList.replace("i1","i2")
    document.querySelector(".r2").classList.replace("i2","i3")
    document.querySelector(".r3").classList.replace("i3","i1")
    document.querySelector(".i3").classList.replace("r2","r3")
    document.querySelector(".i2").classList.replace("r1","r2")
    document.querySelector(".i1").classList.replace("r3","r1")
})

let selected= document.querySelector(".btn-menu")

selected.addEventListener("click",()=>{
    document.querySelector(".letter-navegation").classList.toggle("selected")
})

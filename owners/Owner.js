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

let btnRight = document.querySelector(".btn-owner-right")
let btnLeft = document.querySelector(".btn-owner-left")

btnRight.addEventListener("click",()=>{ 
    document.querySelector(".img-owner1").classList.replace("o1","o3")
    document.querySelector(".img-owner2").classList.replace("o2","o1")
    document.querySelector(".img-owner3").classList.replace("o3","o2")
    document.querySelector(".o3").classList.replace("img-owner1","img-owner3")
    document.querySelector(".o2").classList.replace("img-owner3","img-owner2")
    document.querySelector(".o1").classList.replace("img-owner2","img-owner1")
})

btnLeft.addEventListener("click",()=>{ 
    document.querySelector(".img-owner1").classList.replace("o1","o2")
    document.querySelector(".img-owner2").classList.replace("o2","o3")
    document.querySelector(".img-owner3").classList.replace("o3","o1")
    document.querySelector(".o3").classList.replace("img-owner2","img-owner3")
    document.querySelector(".o2").classList.replace("img-owner1","img-owner2")
    document.querySelector(".o1").classList.replace("img-owner3","img-owner1")
})

let selected= document.querySelector(".btn-menu")

selected.addEventListener("click",()=>{
    document.querySelector(".letter-navegation").classList.toggle("selected")
})

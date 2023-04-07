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

let selected= document.querySelector(".btn-menu")

selected.addEventListener("click",()=>{
    document.querySelector(".letter-navegation").classList.toggle("selected")
})

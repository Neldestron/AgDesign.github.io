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

let btnInfo1=document.querySelector(".btn-info1")
let btnInfo2=document.querySelector(".btn-info2")
let btnInfo3=document.querySelector(".btn-info3")

btnInfo1.addEventListener("click",()=>{
    document.querySelector(".show-info1").classList.toggle("info1")
}
)
btnInfo2.addEventListener("click",()=>{
    document.querySelector(".show-info2").classList.toggle("info4")
}
)
btnInfo3.addEventListener("click",()=>{
    document.querySelector(".show-info3").classList.toggle("info3")
}
)
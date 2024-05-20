const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById("card-toggle"),
          social = document.getElementById("card-social")
    
    toggle.addEventListener('click', ()=>{
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')
            setTimeout(() =>{
                social.classList.remove('down-animation')
            }, 1000)
        }
        social.classList.toggle('animation')
    })
}
showSocial('card-toggle','card-social')
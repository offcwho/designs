const cookieBox = document.querySelector(".cookie"),
      buttons = document.querySelectorAll(".cookie__button");

    console.log(cookieBox)
    
    const executeCodes = () => {
      if (document.cookie.includes("codinglab")) return;
      cookieBox.classList.add("cookie--show");
    
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cookieBox.classList.remove("cookie--show");
          
          if (button.id == "acceptBtn") {
           
            document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
          }
        });
      });
    };
    
    
    window.addEventListener("load", executeCodes);

//Slider

let items = document.querySelectorAll(".reviews__card"),
    prevBtn = document.getElementById('prev'), 
    nextBtn = document.getElementById('next'),
    prevBtn_adaptive = document.getElementById('prev_adaptive'), 
    nextBtn_adaptive = document.getElementById('next_adaptive'),
    lastPosition = items.length - 1,
    firstPosition = 0,
    active = 0;

nextBtn_adaptive.onclick = () => {
  active = active + 1;
  setSlider();
}
prevBtn_adaptive.onclick = () => {
    active = active - 1;
    setSlider();
}

const setSlider = () => {
  let oldActive = document.querySelector('.reviews__card--active');
  if(oldActive) oldActive.classList.remove('reviews__card--active');
  items[active].classList.add('reviews__card--active');
  // 
  nextBtn_adaptive.classList.remove('d-none');
  prevBtn_adaptive.classList.remove('d-none');
  if(active == lastPosition) nextBtn_adaptive.classList.add('d-none');
  if(active == firstPosition) prevBtn_adaptive.classList.add('d-none');
  console.log(lastPosition)
  console.log(active)
  console.log('=====')
}
setSlider();

//nav

let nav = document.getElementById("nav"),
    button = document.getElementById("open"),
    button_close = document.getElementById("close");

    button.addEventListener("click", () => {
      nav.classList.toggle('header__list--active')
    })
    button_close.addEventListener("click", () => {
      nav.classList.toggle('header__list--active')
    })
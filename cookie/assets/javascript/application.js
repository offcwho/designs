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
    let btn = document.getElementById("btn"),
        menu = document.getElementById("sub_menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("header__sub-menu-wrap--open")
    })

    /* OR 

    function open_menu(){
        menu.classList.toggle("header__sub-menu-wrap--open")
    }

    */
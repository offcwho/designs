const accordionContent = document.querySelectorAll('.accordion__item');

accordionContent.forEach((item, index) => {
    let header = item.querySelector('.accordion__header');

    header.addEventListener("click", () => {
        item.classList.toggle("accordion__open");

        let description = item.querySelector(".accordion__description");
        if(item.classList.contains("accordion__open")){
            description.style.height = `${description.scrollHeight}px`;
            description.style.margin = "0px 0px 15px 0px";
            item.querySelector("i").classList.replace("bx-plus", "bx-minus");
        }else{
            description.style.height = "0px";
            description.style.margin = "0px";
            item.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
        removeOpen(index);
    })
    console.log(header);
});

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {

    if(index1 != index2){

        item2.classList.remove("accordion__open");
        let des = item2.querySelector(".accordion__description");
        des.style.height = "0px";
        des.style.margin = "0px";
        item2.querySelector("i").classList.replace("bx-minus", "bx-plus");
    }
});
}
    
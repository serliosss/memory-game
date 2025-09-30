import { images } from "./data.js";

images.sort(() => Math.random() - 0.5);

let visibleCards = [];

const container = document.querySelector(".container");
images.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card" + image.id);
    
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = "";
    card.append(img);

    container.append(card); 

    card.addEventListener("click", ()=>{
        if(visibleCards.length < 2)
        {
            card.classList.toggle("card-show");

            visibleCards.push(image);
            
            if (visibleCards.length == 2){
                setTimeout(()=>{
                card.classList.toggle("card-show");
                document.querySelector(".card"+visibleCards[0].id).classList.remove("card-show");
                visibleCards=[];
                }, 3000)  
            }
        }
    })
});

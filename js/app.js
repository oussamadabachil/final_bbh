const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


let menu_Butt = document.querySelector(".second_s")
let menu_Show = document.querySelector(".mobile_menu_hide")
let body_js = document.querySelector(".body")


menu_Butt.addEventListener("click",()=>{
  menu_Show.classList.toggle("mobile_menu_show")
  body_js.classList.toggle("body_pause")
})

var iazaz = 0;


var span_text = '<span class="oussama">';
var span_underline_bw = '<span class="diane_bw">';
var span_close ="</span>"
    function changeee() {


      var docada = document.getElementById("pab");

      var colorrs = [span_text+'TWINGO BLEUE'+span_close+" (APPUYER POUR EN SAVOIR PLUS)",span_text+'UNE VOITURE À VENDRE'+span_close+" CETTE SEMAINE"];
      docada.innerHTML = colorrs[iazaz];
      iazaz = (iazaz + 1) % colorrs.length;
    }
    setInterval(changeee, 1700);
let imgface = document.querySelector(".img_face")
let effect_brightjs = document.querySelector(".effect_bright")
let cross_hide = document.querySelector(".cross_stop")
let info_header_text = document.querySelector(".waterproof")
let show_car_info_div = document.querySelector(".show_car_info")


cross_hide.addEventListener("click",()=>{
  effect_brightjs.classList.toggle("show")
  show_car_info_div.classList.toggle("show_car_info_show")
})
info_header_text.addEventListener("click",()=>{
  effect_brightjs.classList.toggle("show")
  show_car_info_div.classList.toggle("show_car_info_show")
})
  let img_arriere_butt = document.querySelector(".imga")
  let img_loin_butt = document.querySelector(".imgb")
  let car_caract = document.querySelector(".cara_car")
  let img_caracteristique = document.querySelector(".imgc")


  img_arriere_butt.addEventListener('click',()=>{
    imgface.setAttribute("style","    background-image: url(../asset/photoderriere.JPG); display:block  ")
    car_caract.style.display="none"

  })

  
  img_loin_butt.addEventListener('click',()=>{
    imgface.setAttribute("style","  background-image: url(./asset/photofacerenault.JPG) ;display:block   ")
    car_caract.style.display="none"

  })

img_caracteristique.addEventListener("click",()=>{
  car_caract.style.display="block"
  imgface.style.display="none"
})





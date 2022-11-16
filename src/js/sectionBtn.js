import visSidebar from './menu';

const allBrandItems = document.querySelectorAll(".section__nav .brand__item");
const sectionNavItem = document.querySelectorAll(".section__nav .section__nav__item");
const addContentButton = document.querySelectorAll(".add-content-button");
const addInfoOne =document.querySelector('.add-info-one');
const addInfoTwo =document.querySelector('.add-info-two');
const addInfo =document.querySelector('.add-info');

const btnMode = (elem, text) => {
  let ButtonChildSpan = elem.querySelector('span');
  let ButtonChildSvg = elem.querySelector('svg');

  ButtonChildSpan.textContent = text;
  ButtonChildSvg.classList.remove('rotation-svg');
};

const defailtRenderBrands = (elements, amountRow) => {
  let n;
  btnMode(addContentButton[1], "Показать все");
  btnMode(addContentButton[2], "Показать все");

  elements.forEach((item) => {
    item.classList.remove("hidden");
  });

  if (window.matchMedia("(min-width: 1440px)").matches) {
    n = 4 * amountRow;
    for (let i = elements.length; i > n; i--) {
      elements[i - 1].classList.add("hidden");
    }
  } else {
    n = 3 * amountRow;
    for (let i = elements.length; i > n; i--) {
      elements[i - 1].classList.add("hidden");
    }
  }

  return n;
};

const hideBrands = (elements, visElemets) => {
  let anvisElemets = elements.length - visElemets;
  for (anvisElemets; anvisElemets > 0; anvisElemets--) {
    elements[elements.length - anvisElemets].classList.toggle("hidden");
  }
};

let visElemetsBrend = defailtRenderBrands(allBrandItems, 2);
let visElemetsNav = defailtRenderBrands(sectionNavItem, 1);

window.addEventListener("resize", () => {
  visElemetsBrend = defailtRenderBrands(allBrandItems, 2);
  visElemetsNav = defailtRenderBrands(sectionNavItem, 1);
  visText();
  visSidebar();
});

export default function toggleElemens(block) {
  if (block === addContentButton[0]) {
    addText();
  } else if (block === addContentButton[1]) {
    hideBrands(allBrandItems, visElemetsBrend);
  } else {
    hideBrands(sectionNavItem, visElemetsNav);
  }
}

const visText = () => {
  btnMode(addContentButton[0], "Читать далее");

  if (window.matchMedia("(min-width: 1120px").matches){
    addInfoOne.classList.remove('hidden');
    addInfoTwo.classList.remove('hidden');
    addInfo.classList.add('hidden');
  }else if (window.matchMedia("(min-width: 768px)").matches) {
    addInfoOne.classList.remove('hidden');
    addInfoTwo.classList.add('hidden');
    addInfo.classList.add('hidden');
  }else{
    addInfoOne.classList.add('hidden');
    addInfoTwo.classList.add('hidden');
    addInfo.classList.add('hidden');
  }
  
};

const addText = () => {
  if(addInfoOne.classList.contains('hidden')){
    console.log('addInfoOne add');
    addInfoOne.classList.remove('hidden');
    addInfoTwo.classList.remove('hidden');
    addInfo.classList.remove('hidden');
  }else if(addInfoTwo.classList.contains('hidden')){
    console.log('addInfoTwo add');
    addInfoTwo.classList.remove('hidden');
    addInfo.classList.remove('hidden');
  }else if(addInfo.classList.contains('hidden')){
    console.log('addInfo add');
    addInfo.classList.remove('hidden');
  }else if (window.matchMedia("(min-width: 1120px").matches){
    addInfoOne.classList.remove('hidden');
    addInfoTwo.classList.remove('hidden');
    addInfo.classList.add('hidden');
  }else if (window.matchMedia("(min-width: 768px)").matches) {
    addInfoOne.classList.remove('hidden');
    addInfoTwo.classList.add('hidden');
    addInfo.classList.add('hidden');
  }else{
    console.log('no');
    addInfoOne.classList.add('hidden');
    addInfoTwo.classList.add('hidden');
    addInfo.classList.add('hidden');
  }
};

addContentButton.forEach(function (item) {

  item.addEventListener("click", function () {
    let itemChildrenSpan = item.querySelector("span");
    let itemChildrenSvg = item.querySelector("svg");

    if (itemChildrenSpan.textContent === "Скрыть") {
      itemChildrenSvg.classList.remove("rotation-svg");

      toggleElemens(item);
      if (item === addContentButton[0]) {
        itemChildrenSpan.textContent = "Читать далее";
      } else {
        itemChildrenSpan.textContent = "Показать все";
      }
    } else {
      itemChildrenSvg.classList.add("rotation-svg");
      itemChildrenSpan.textContent = "Скрыть";
      toggleElemens(item);
    }
  });
});

visText();
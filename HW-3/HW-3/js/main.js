const tabItems = document.querySelectorAll(".tabheader__item");
const tabParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((tab) => {
    tab.classList.add("close_modal")
    tab.classList.remove("open_modal")
  });
  tabItems.forEach((tab) => {
    tab.classList.remove("tabheader__item_active");
  });
};

const showContent = (i = 0) => {
  tabContent[i].classList.add("open_modal")
  tabContent[i].classList.remove("close_modal")
  tabItems[i].classList.add("tabheader__item_active");
};

hideTabContent();
showContent();

tabParent.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.classList.contains("tabheader__item_active")) {
    tabItems.forEach((item, idx) => {
      if (item === target) {
        hideTabContent();
        showContent(idx);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const open = document.querySelector("#open_modal");
const close = document.querySelector("#close_modal");

open.addEventListener("click", ()=>{
    modal.classList.remove("close_modal");
    modal.classList.add("open_modal");
} );

close.addEventListener("click", ()=>{
    modal.classList.remove("open_modal");
    modal.classList.add("close_modal");
} );

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});
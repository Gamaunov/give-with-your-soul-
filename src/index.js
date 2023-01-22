import "./index.html";
import "./index.scss";

function pageLoaded() {
  //navbar
  function burgerMenu() {
    const navBtn = document.querySelector(".nav__btn");
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup__content").cloneNode(1);
    const body = document.body;

    navBtn.addEventListener("click", hambHandler);

    function hambHandler(e) {
      e.preventDefault();
      popup.classList.toggle("open");
      body.classList.toggle("noscroll");
      renderPopup();
    }

    function renderPopup() {
      popup.appendChild(popupContent);
      popupContent.style.display = "flex";
    }
  }

  burgerMenu();

  //slider
  function mainSlider() {
    const slides = document.querySelectorAll(".slide");
    const btns = document.querySelectorAll(".btn");
    let currentSlide = 1;

    let manualNav = function (manual) {
      slides.forEach((slide) => {
        slide.classList.remove("active");

        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
      });

      slides[manual].classList.add("active");
      btns[manual].classList.add("active");
    };

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    let repeat = function () {
      let active = document.getElementsByClassName("active");
      let i = 1;

      let repeater = () => {
        setTimeout(function () {
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove("active");
          });
          slides[i].classList.add("active");
          btns[i].classList.add("active");
          i++;

          if (slides.length == i) {
            i = 0;
          }
          if (i >= slides.length) {
            return;
          }
          repeater();
        }, 100000);
      };
      repeater();
    };
    repeat();
  }

  mainSlider();

  //scroll
  const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px; 
      `;
      document.documentElement.style.scrollBehavior = "unset";
    },
    enableScroll() {
      document.body.style.cssText = "";
      window.scroll({ top: scrollController.scrollPosition });
      document.documentElement.style.scrollBehavior = "";
    },
  };
  //modal
  const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;
    const closeModal = (event) => {
      const target = event.target;

      if (
        target === modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === "Escape"
      ) {
        modalElem.style.opacity = 0;

        setTimeout(() => {
          modalElem.style.visibility = "hidden";
        }, time);
        window.removeEventListener("keydown", closeModal);
        scrollController.enableScroll();
      }
    };
    const openModal = () => {
      modalElem.style.visibility = "visible";
      modalElem.style.opacity = 1;
      window.addEventListener("keydown", closeModal);
      scrollController.disabledScroll();
    };
    buttonElems.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });
    modalElem.addEventListener("click", closeModal);
  };
  modalController({
    modal: ".modal",
    btnOpen: ".card__btn",
    btnClose: ".modal__close",
  });
  modalController({
    modal: ".modal",
    btnOpen: ".monthly-offer__btn",
    btnClose: ".modal__close",
  });
  modalController({
    modal: ".modal",
    btnOpen: ".info__btn",
    btnClose: ".modal__close",
  });
  modalController({
    modal: ".modal",
    btnOpen: ".footer-btn",
    btnClose: ".modal__close",
  });
  modalController({
    modal: ".modal--1",
    btnOpen: ".modal-btn--1",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--2",
    btnOpen: ".modal-btn--2",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--3",
    btnOpen: ".modal-btn--3",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--4",
    btnOpen: ".modal-btn--4",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--5",
    btnOpen: ".modal-btn--5",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--6",
    btnOpen: ".modal-btn--6",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--7",
    btnOpen: ".modal-btn--7",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--8",
    btnOpen: ".modal-btn--8",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--9",
    btnOpen: ".modal-btn--9",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--10",
    btnOpen: ".modal-btn--10",
    btnClose: ".modal__close-btn",
  });
  modalController({
    modal: ".modal--11",
    btnOpen: ".modal-btn--11",
    btnClose: ".modal__close-btn",
  });

  //open answer
  const openAnswer = () => {
    for (let li of tree.querySelectorAll("li")) {
      let span = document.createElement("span");
      li.prepend(span);
      span.append(span.nextSibling); //
    }
    tree.onclick = (e) => {
      if (e.target.tagName != "SPAN") return;
      let childrenContainer = e.target.parentNode.querySelector("ul");
      if (!childrenContainer) return;
      childrenContainer.hidden = !childrenContainer.hidden;
    };
  };
  openAnswer();
}

window.addEventListener("DOMContentLoaded", pageLoaded);

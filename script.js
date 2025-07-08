const SHOW_HIDE = document.querySelectorAll(".question");

SHOW_HIDE.forEach((answer) => {
  answer.addEventListener("click", () => {
    const ANS_BTN = answer.parentElement.querySelector(".answer-text");
    const IMG_BTN = answer.querySelector(".icon");
    const IS_VISIBLE = getComputedStyle(ANS_BTN).display === "block";

    //toggle visibility

    ANS_BTN.style.display = IS_VISIBLE ? "none" : "block";

    //toggle icon

    IMG_BTN.setAttribute(
      "src",
      IS_VISIBLE
        ? ".//assets/images/icon-plus.svg"
        : ".//assets/images/icon-minus.svg"
    );
  });
});

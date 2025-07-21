// 64em = 1024px assuming 1em = 16px
const isDesktop = window.matchMedia("(min-width: 64em)");

const profileBlock = document.getElementById("profileBlock");
const profileShareBtn = document.getElementById("profileShareBtn");

const socialBlock = document.getElementById("socialBlock");
const socialShareBtn = document.getElementById("socialShareBtn");

function handleShareBtnMobile() {
  profileBlock.classList.toggle("hide");
  socialBlock.classList.toggle("hide");
}

function handleShareBtnDesktop() {
  socialBlock.classList.toggle("hide");
}

if (isDesktop.matches) {
  const profileShareBtnWrapper = profileBlock.querySelector(
    ".profile-share-btn-wrapper"
  );
  profileShareBtnWrapper.appendChild(socialBlock);
  profileShareBtn.addEventListener("click", handleShareBtnDesktop);
} else {
  profileShareBtn.addEventListener("click", handleShareBtnMobile);
  socialShareBtn.addEventListener("click", handleShareBtnMobile);
}

// 64em = 1024px assuming 1em = 16px
const isDesktop = window.matchMedia("(min-width: 64em)");

const authorSection = document.getElementById("author-section");

const profileBlock = document.getElementById("profileBlock");
const profileShareBtn = document.getElementById("profileShareBtn");
const profileShareBtnWrapper = profileBlock.querySelector(
  ".profile-share-btn-wrapper"
);

const socialBlock = document.getElementById("socialBlock");
const socialShareBtn = document.getElementById("socialShareBtn");

function handleShareBtnMobile() {
  profileBlock.classList.toggle("hide");
  socialBlock.classList.toggle("hide");
}

function handleShareBtnDesktop() {
  socialBlock.classList.toggle("hide");
}

// Initial event listeners
if (isDesktop.matches) {
  profileShareBtnWrapper.appendChild(socialBlock);
  profileShareBtn.addEventListener("click", handleShareBtnDesktop);
} else {
  profileShareBtn.addEventListener("click", handleShareBtnMobile);
  socialShareBtn.addEventListener("click", handleShareBtnMobile);
}

// Screen width Resizes
isDesktop.addEventListener("change", (e) => {
  if (e.matches) {
    console.log("Mobile --> desktop");
    // Mobile --> Desktop
    // first, remove event listeners that were for mobile
    profileShareBtn.removeEventListener("click", handleShareBtnMobile);
    socialShareBtn.removeEventListener("click", handleShareBtnMobile);
    // then, relocate the socialBlock element
    profileShareBtnWrapper.appendChild(socialBlock);
    // finally, add the click event to profileBlockBtn
    profileShareBtn.addEventListener("click", handleShareBtnDesktop);
  } else {
    // Desktop --> Mobile
    // first, remove event listener that were for desktop
    profileShareBtn.removeEventListener("click", handleShareBtnDesktop);
    // then, relocate the socialBlock element
    authorSection.appendChild(socialBlock);
    // finally, add mobile event listeners
    profileShareBtn.addEventListener("click", handleShareBtnMobile);
    socialShareBtn.addEventListener("click", handleShareBtnMobile);
  }
});

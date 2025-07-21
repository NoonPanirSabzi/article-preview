// 64em = 1024px assuming 1em = 16px
const isDesktop = window.matchMedia("(min-width: 64em)");

const authorSection = document.getElementById("author-section");

const authorProfile = document.getElementById("author-profile");
const authorProfileBtn = document.getElementById("author-profile-btn");
const profileShareBtnContainer = authorProfile.querySelector(
  ".share-btn-container"
);

const socialSharePanel = document.getElementById("social-share-panel");
const socialPanelBtn = document.getElementById("social-panel-btn");

function handleShareBtnMobile() {
  authorProfile.classList.toggle("hide");
  socialSharePanel.classList.toggle("hide");
}

function handleShareBtnDesktop() {
  socialSharePanel.classList.toggle("hide");
}

// Initial event listeners
if (isDesktop.matches) {
  profileShareBtnContainer.appendChild(socialSharePanel);
  authorProfileBtn.addEventListener("click", handleShareBtnDesktop);
} else {
  authorProfileBtn.addEventListener("click", handleShareBtnMobile);
  socialPanelBtn.addEventListener("click", handleShareBtnMobile);
}

// Screen width Resizes
isDesktop.addEventListener("change", (e) => {
  if (e.matches) {
    // Mobile --> Desktop
    // first, remove event listeners that were for mobile
    authorProfileBtn.removeEventListener("click", handleShareBtnMobile);
    socialPanelBtn.removeEventListener("click", handleShareBtnMobile);
    // then, relocate the socialSharePanel element
    profileShareBtnContainer.appendChild(socialSharePanel);
    // check if, social panel was open(=not hide) in mobile, if yes,
    // author profile, which was hide in mobile, should unhide
    if (!socialSharePanel.classList.contains("hide")) {
      authorProfile.classList.toggle("hide");
    }
    // finally, add the click event to authorProfileBtn
    authorProfileBtn.addEventListener("click", handleShareBtnDesktop);
  } else {
    // Desktop --> Mobile
    // first, remove event listener that were for desktop
    authorProfileBtn.removeEventListener("click", handleShareBtnDesktop);
    // then, relocate the socialSharePanel element
    authorSection.appendChild(socialSharePanel);
    // check if, social panel was open(=not hide) in desktop, if yes,
    // author profile, which is always visible in desktop, should hide
    if (!socialSharePanel.classList.contains("hide")) {
      authorProfile.classList.toggle("hide");
    }
    // finally, add mobile event listeners
    authorProfileBtn.addEventListener("click", handleShareBtnMobile);
    socialPanelBtn.addEventListener("click", handleShareBtnMobile);
  }
});

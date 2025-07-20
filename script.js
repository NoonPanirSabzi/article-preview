const profileBlock = document.getElementById("profileBlock");
const socialBlock = document.getElementById("socialBlock");
const shareBtns = document.getElementsByClassName("share-btn")

for (let index = 0; index < shareBtns.length; index++) {
  const btn = shareBtns[index];
  btn.addEventListener("click", () => {
    profileBlock.classList.toggle("hide");
    socialBlock.classList.toggle("hide");
  })
}


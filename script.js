// 64em = 1024px assuming 1em = 16px
const isDesktop = window.matchMedia("(min-width: 64em)");

const elements = {
  authorSection: document.getElementById("author-section"),
  authorProfile: document.getElementById("author-profile"),
  authorProfileBtn: document.getElementById("author-profile-btn"),
  sharePanel: document.getElementById("social-share-panel"),
  socialPanelBtn: document.getElementById("social-panel-btn"),
  profileBtnContainer: document.getElementById("profile-btn-container"),
};

function toggleSharePanel() {
  elements.sharePanel.classList.toggle("hide");

  if (!isDesktop.matches) {
    elements.authorProfile.classList.toggle("hide");
  }
}

function initialSetup(isDesktopView) {
  // Move share panel to appropriate container in Desktop
  if (isDesktopView) {
    elements.profileBtnContainer.appendChild(elements.sharePanel);
  }

  // Add event listeners
  elements.authorProfileBtn.addEventListener("click", toggleSharePanel);
  if (!isDesktopView) {
    elements.socialPanelBtn.addEventListener("click", toggleSharePanel);
  }
}

function updateLayout(isDesktopView) {
  // Remove all existing event listeners
  elements.authorProfileBtn.removeEventListener("click", toggleSharePanel);
  elements.socialPanelBtn.removeEventListener("click", toggleSharePanel);

  // Check and maintain share panel state
  const isSharePanelVisible = !elements.sharePanel.classList.contains("hide");

  // Move share panel to appropriate container
  const container = isDesktopView
    ? elements.profileBtnContainer
    : elements.authorSection;
  container.appendChild(elements.sharePanel);

  // Maintain share panel state
  if (isSharePanelVisible) { 
    if (!isDesktopView) {
      /* Desktop --> Mobile && share panel visible: 
         author profile, which was visible in Desktop, 
         now has to hide in Mobile 
      */
      elements.authorProfile.classList.add("hide");
    } else {
      /* Mobile --> Desktop && share panel visible:
         author profile, which was hidden in Mobile,
         now has to unhide in Desktop
      */
      elements.authorProfile.classList.remove("hide");
    }
  }

  // Add new event listeners
  elements.authorProfileBtn.addEventListener("click", toggleSharePanel);
  if (!isDesktopView) {
    elements.socialPanelBtn.addEventListener("click", toggleSharePanel);
  }
}

// Initial setup
initialSetup(isDesktop.matches);

// Handle resize
isDesktop.addEventListener("change", (e) => updateLayout(e.matches));

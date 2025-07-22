# Article preview component

## Table of contents

- [Overview](#overview)
  - [Screenshot and live site URL](#screenshot-and-live-site-url)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Inspired by](#inspired-by)

## Overview

### Screenshot and live site URL

| Desktop                                     | Mobile                                    |
| ------------------------------------------- | ----------------------------------------- |
| ![desktop](/images/desktop-screenshot.jpeg) | ![Mobile](/images/mobile-screenshot.jpeg) |

[Live Site URL](https://noonpanirsabzi.github.io/article-preview/)

## My process

### Built with

- JavaScript!😀

### What I learned

1. The `getElementById` method is only available on the `document` object. If you want to search within a specific DOM node, use methods like `querySelector`, `querySelectorAll`, or `getElementsByClassName`. This is because IDs are unique across the entire document by design.

2. Creating a toggle effect with a fade transition in CSS:

   ```css
   .fade-toggle {
     transition: opacity 0.45s;
     opacity: 1;
     visibility: visible;
     overflow: hidden;
   }

   .fade-toggle.hide {
     opacity: 0;
     visibility: hidden;
     height: 0;
     pointer-events: none;
     padding: 0;
   }
   ```

3. CSS trick for building a triangle (commonly used for tooltips or arrows):

   ```css
   .social-share-panel__down-arrow {
     display: block;
     width: 0;
     height: 0;
     border-top: 12px solid var(--color-heading);
     border-left: 12px solid transparent;
     border-right: 12px solid transparent;
   }
   ```

4. The `window.matchMedia()` method allows to respond to CSS media queries in JavaScript.

5. In `addEventListener`, if you use an arrow function, you must explicitly pass the event parameter (e.g., `event` or `e`) to access event details. If you use a regular function expression, `this` refers to the element that triggered the event.

## Author

- Github - [@AminForouzan](https://github.com/AminForouzan)
- Frontend Mentor - [@AminForouzan](https://www.frontendmentor.io/profile/AminForouzan)

## Inspired by

- [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

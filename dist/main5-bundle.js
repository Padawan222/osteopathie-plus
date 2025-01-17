/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  color: var(--text);
  font-size: 1.6rem;
  width: 100%;
}

/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --beige: #d5c2a1;
  --violet: #5f27cd;
  --bordeaux: maroon;
  --font-family: "Nunito", sans-serif;
  --ff-title: "Great Vibes", cursive;
}

.title {
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 3rem;
  color: white;
}

.text-deco {
  text-decoration: none;
}

.italic {
  font-style: italic;
}

.separator-1 {
  display: none;
  height: 2px;
  width: 80%;
  background: #eee;
  animation: separator-1-anim 2s;
}
@keyframes separator-1-anim {
  0% {
    transform: translateX(-100%);
  }
}

.separator-1-active {
  display: flex;
}

.separator-xs-2 {
  display: none;
  height: 1px;
  width: 60%;
  background: white;
  margin: 2rem;
}
@media (max-width: 480px) {
  .separator-xs-2 {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .separator-xs-2 {
    display: flex;
  }
}

.separator-2 {
  height: 1px;
  width: 80%;
  background: white;
  margin: 2rem;
}

header {
  position: fixed;
  top: 0;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  animation: anim-start 6s;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  transition: 1s;
}

.header-active-1 {
  background: rgba(0, 0, 0, 0.8);
}

h1 {
  margin-top: 1rem;
  color: #eee;
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 4rem;
}

.img-header {
  height: 6rem;
  margin: 0 2rem;
}
@media (max-width: 480px) {
  .img-header {
    margin: 0 1rem;
  }
}

.container-logo-title {
  display: flex;
  animation: opacity 7s;
  text-decoration: none;
  animation: 3s logo-header;
}
@keyframes logo-header {
  0% {
    transform: translateX(-100%);
  }
}

.header-container-background-none {
  background: none;
}

.container-hc-text {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 2rem;
  color: white;
  text-align: center;
  backdrop-filter: blur(1rem);
  margin: 2rem;
  animation: 3s hc-text;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 25rem;
}
@media (max-width: 480px) {
  .container-hc-text {
    margin-bottom: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .container-hc-text {
    margin-bottom: 2rem;
  }
}
@keyframes hc-text {
  0% {
    transform: scaleY(0%);
  }
  60% {
    transform: scaleY(0%);
  }
}

.container-hc-text-anim {
  transition: all 1s;
  opacity: 0;
}

.container-hc-text-anim-2 {
  transition: all 1s;
  opacity: 1;
}

h2 {
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 6rem;
  margin-bottom: 2rem;
  color: rgb(255, 237, 237);
}
@media (max-width: 480px) {
  h2 {
    font-size: 4rem;
  }
}

.fleche-header-container {
  width: 5rem;
  position: absolute;
  bottom: 3rem;
  left: calc(50% - 2.5rem);
  color: white;
  font-size: 4rem;
  rotate: 180deg;
  scroll-behavior: smooth;
  animation: 3s fleche-hc;
}
.fleche-header-container:hover {
  transition: 2s;
  color: var(--bordeaux);
}
@keyframes fleche-hc {
  0% {
    transform: translateY(-150%);
  }
}

.fleche-header-container-anim {
  transition: all 1s;
  opacity: 0;
}

.fleche-header-container-anim-2 {
  transition: all 1s;
  opacity: 1;
}

.hc-text {
  color: #eee;
  font-size: 2rem;
}
@media (max-width: 480px) {
  .hc-text {
    font-size: 1.6rem;
  }
}

.btn-xs {
  display: none;
}

@media (max-width: 480px) {
  .btn-xs {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .btn-xs {
    display: flex;
  }
}
.btn-xs {
  position: absolute;
  right: 0;
  height: 2.5rem;
  width: 3rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 2s;
  cursor: pointer;
  margin: 1rem;
  animation: opacity 7s;
}

.bar {
  height: 2px;
  width: 2.5rem;
  background: white;
  position: absolute;
  transition: all 0.3s;
}

.bar-1 {
  top: 0;
}

.bar-1-active-1 {
  top: calc(50% - 1px);
}

.bar-1-active-2 {
  rotate: 45deg;
}

.bar-2-active {
  opacity: 0;
}

.bar-3 {
  bottom: 0;
}

.bar-3-active-1 {
  bottom: calc(50% - 1px);
}

.bar-3-active-2 {
  rotate: -45deg;
}

.nav-active-1-xs {
  transition: 1s;
  transform: translateX(100%);
}

.nav-active-2-xs {
  transition: 1s;
  transform: translateX(0%);
}

nav {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 2rem;
  animation: 3s menu-anim;
}
@keyframes menu-anim {
  0% {
    transform: translateY(-120%);
  }
}
@media (max-width: 480px) {
  nav {
    height: auto;
    width: 100%;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 8rem;
    margin: 0 0;
    animation: none;
    animation: menu-responsive 1s;
    background: rgba(0, 0, 0, 0.8);
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  nav {
    height: 8rem;
    width: 100%;
    display: none;
    justify-content: space-around;
    position: absolute;
    top: 8rem;
    margin: 0 0;
    animation: none;
    animation: menu-responsive 1s;
    background: var(--beige);
    background: rgba(0, 0, 0, 0.8);
  }
}

.element-nav-bar {
  margin: 0 2rem;
  color: #eee;
  font-size: 2.8rem;
  letter-spacing: 0.1rem;
  font-family: var(--ff-title);
  text-decoration: none;
  transition: 1s;
}
.element-nav-bar:hover {
  font-size: 3rem;
  letter-spacing: 0.2rem;
}
@media (max-width: 480px) {
  .element-nav-bar {
    margin: 1rem;
  }
}

.btn {
  height: 5rem;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  transition: 1s;
  z-index: 1;
}
@media (max-width: 480px) {
  .btn {
    text-decoration: underline;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .btn {
    text-decoration: underline;
  }
}
.btn:hover {
  width: 18rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-decoration: none !important;
}

footer {
  grid-area: footer;
  height: auto;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--beige);
  animation: anim-start 6s;
  text-align: center;
}

.footer-content {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media (max-width: 480px) {
  .footer-content {
    flex-direction: column;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .footer-content {
    flex-direction: column;
  }
}

.ft {
  height: auto;
  width: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

a {
  font-style: italic;
  color: var(--bordeaux);
}

.link-page {
  transition: all 1s;
}
.link-page:hover {
  width: 22rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
}

h5 {
  display: flex;
  align-items: center;
  color: var(--bordeaux);
  font-size: 1.8rem;
  font-weight: 200;
}

.link-h5 {
  font-family: var(--ff-title);
  font-style: none;
  text-decoration: none;
  font-weight: 200;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  margin-left: 0.5rem;
  color: var(--bordeaux);
}

.title-footer {
  color: var(--bordeaux);
}

.img-footer {
  height: 8rem;
  margin: 0 2rem;
}
@media (max-width: 480px) {
  .img-footer {
    margin: 0 1rem;
  }
}

@media (max-width: 480px) {
  .ft-logo {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .ft-logo {
    display: none;
  }
}

.ft-logo-xs {
  display: none;
}
@media (max-width: 480px) {
  .ft-logo-xs {
    display: flex;
    margin-bottom: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .ft-logo-xs {
    display: flex;
    margin-bottom: 2rem;
  }
}

@keyframes menu-responsive {
  0% {
    transform: translateX(-100%);
  }
}
.container {
  height: auto;
  display: grid;
  grid: "header" auto "main" auto "footer" auto/auto;
  background: #eee;
  animation: container-start 3s;
}

.text-anim-start {
  opacity: 0;
  height: 7.5rem;
  text-align: center;
  background: var(--beige);
  color: white;
  font-size: 6rem;
  font-family: var(--ff-title);
  font-style: normal;
  font-weight: 400;
  animation: text-anim-start 3s;
}

.text-anim-start-p1 {
  opacity: 0;
  animation: text-anim-start-p1 1.5s;
}

.text-anim-start-p2 {
  opacity: 0;
  animation: text-anim-start-p2 3s;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_utils.scss","webpack://./src/assets/styles/_separator.scss","webpack://./src/assets/styles/_header.scss","webpack://./src/assets/styles/_header-container.scss","webpack://./src/assets/styles/_menu-responsive.scss","webpack://./src/assets/styles/_menu.scss","webpack://./src/assets/styles/_btn.scss","webpack://./src/assets/styles/_footer.scss","webpack://./src/assets/styles/_animations.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n}\n","@use \"base\" as *;\r\n@use \"classes\" as *;\r\n@use \"media-queries\" as *;\r\n@use \"reset\" as *;\r\n@use \"variables\" as *;\r\n@use \"utils\" as *;\r\n@use \"fonts\" as *;\r\n@use \"separator\" as *;\r\n@use \"header\" as *;\r\n@use \"header-container\" as *;\r\n@use \"nav-bar\" as *;\r\n@use \"menu-responsive\" as *;\r\n@use \"menu\" as *;\r\n@use \"btn\" as *;\r\n@use \"footer\" as *;\r\n@use \"animations\" as *;\r\n.container {\r\n  height: auto;\r\n  display: grid;\r\n  grid:\r\n    \"header\" auto\r\n    \"main\" auto\r\n    \"footer\" auto\r\n    / auto;\r\n  background: #eee;\r\n  animation: container-start 3s;\r\n}\r\n.text-anim-start {\r\n  opacity: 0;\r\n  height: 7.5rem;\r\n  text-align: center;\r\n  background: var(--beige);\r\n  color: white;\r\n  font-size: 6rem;\r\n  font-family: var(--ff-title);\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  animation: text-anim-start 3s;\r\n}\r\n.text-anim-start-p1 {\r\n  opacity: 0;\r\n  animation: text-anim-start-p1 1.5s;\r\n}\r\n.text-anim-start-p2 {\r\n  opacity: 0;\r\n  animation: text-anim-start-p2 3s;\r\n}\r\n","/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 1099px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 1100px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\r\n  //color\r\n  --beige: #d5c2a1;\r\n  --violet: #5f27cd;\r\n  --bordeaux: maroon;\r\n\r\n  // font family\r\n  --font-family: \"Nunito\", sans-serif;\r\n  --ff-title: \"Great Vibes\", cursive;\r\n}\r\n",".title {\r\n  font-family: var(--ff-title);\r\n  font-weight: 200;\r\n  font-size: 3rem;\r\n  // letter-spacing: 0.1rem;\r\n  color: white;\r\n}\r\n.text-deco {\r\n  text-decoration: none;\r\n}\r\n.italic {\r\n  font-style: italic;\r\n}\r\n","@use \"media-queries\" as *;\n\n// .separator-xs-1 {\n//   display: none;\n//   height: 1px;\n//   width: 80%;\n//   background: white;\n//   margin: 2rem;\n//   @include xs {\n//     display: flex;\n//   }\n// }\n.separator-1 {\n  display: none;\n  height: 2px;\n  width: 80%;\n  background: #eee;\n  animation: separator-1-anim 2s;\n  @keyframes separator-1-anim {\n    0% {\n      transform: translateX(-100%);\n    }\n  }\n}\n.separator-1-active {\n  display: flex;\n}\n.separator-xs-2 {\n  display: none;\n  height: 1px;\n  width: 60%;\n  background: white;\n  margin: 2rem;\n  @include xs {\n    display: flex;\n  }\n  @include sm {\n    display: flex;\n  }\n}\n.separator-2 {\n  height: 1px;\n  width: 80%;\n  background: white;\n  margin: 2rem;\n}\n","@use \"media-queries\" as *;\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  grid-area: header;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 8rem;\r\n  width: 100%;\r\n  animation: anim-start 6s;\r\n  z-index: 1000;\r\n  // background: var(--beige);\r\n  background: rgba(0, 0, 0, 0.5);\r\n  transition: 1s;\r\n}\r\n.header-active-1 {\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nh1 {\r\n  margin-top: 1rem;\r\n  color: #eee;\r\n  font-family: var(--ff-title);\r\n  font-weight: 200;\r\n  font-size: 4rem;\r\n}\r\n.img-header {\r\n  height: 6rem;\r\n  margin: 0 2rem;\r\n  @include xs {\r\n    margin: 0 1rem;\r\n  }\r\n}\r\n.container-logo-title {\r\n  display: flex;\r\n  animation: opacity 7s;\r\n  text-decoration: none;\r\n  animation: 3s logo-header;\r\n  @keyframes logo-header {\r\n    0% {\r\n      transform: translateX(-100%);\r\n    }\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\n\n.header-container-background-none {\n  background: none;\n}\n.container-hc-text {\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  border-radius: 2rem;\n  color: white;\n  text-align: center;\n  backdrop-filter: blur(1rem);\n  margin: 2rem;\n  animation: 3s hc-text;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  margin-bottom: 25rem;\n  @include xs {\n    margin-bottom: 2rem;\n  }\n  @include sm {\n    margin-bottom: 2rem;\n  }\n  @keyframes hc-text {\n    0% {\n      transform: scaleY(0%);\n    }\n    60% {\n      transform: scaleY(0%);\n    }\n  }\n}\n.container-hc-text-anim {\n  transition: all 1s;\n  opacity: 0;\n}\n.container-hc-text-anim-2 {\n  transition: all 1s;\n  opacity: 1;\n}\nh2 {\n  font-family: var(--ff-title);\n  font-weight: 200;\n  font-size: 6rem;\n  margin-bottom: 2rem;\n  color: rgb(255, 237, 237);\n  @include xs {\n    font-size: 4rem;\n  }\n}\n.fleche-header-container {\n  width: 5rem;\n  position: absolute;\n  bottom: 3rem;\n  left: calc(50% - 2.5rem);\n  color: white;\n  font-size: 4rem;\n  rotate: 180deg;\n  scroll-behavior: smooth;\n  animation: 3s fleche-hc;\n  &:hover {\n    transition: 2s;\n    color: var(--bordeaux);\n  }\n  @keyframes fleche-hc {\n    0% {\n      transform: translateY(-150%);\n    }\n  }\n}\n.fleche-header-container-anim {\n  transition: all 1s;\n  opacity: 0;\n}\n.fleche-header-container-anim-2 {\n  transition: all 1s;\n  opacity: 1;\n}\n.hc-text {\n  color: #eee;\n  font-size: 2rem;\n  @include xs {\n    font-size: 1.6rem;\n  }\n}\n// .container-link-hc {\n//   height: auto;\n//   width: 40%;\n//   display: flex;\n//   justify-content: space-between;\n// }\n// .link-hc {\n//   height: auto;\n//   width: auto;\n//   text-decoration: none;\n//   color: #eee;\n//   backdrop-filter: blur(10rem);\n// }\n","@use \"media-queries\" as *;\r\n\r\n// btn xs\r\n\r\n.btn-xs {\r\n  display: none;\r\n}\r\n@include xs {\r\n  .btn-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include sm {\r\n  .btn-xs {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.btn-xs {\r\n  position: absolute;\r\n  right: 0;\r\n  height: 2.5rem;\r\n  width: 3rem;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  transition: all 2s;\r\n  cursor: pointer;\r\n  margin: 1rem;\r\n  animation: opacity 7s;\r\n}\r\n\r\n.bar {\r\n  height: 2px;\r\n  width: 2.5rem;\r\n  background: white;\r\n  position: absolute;\r\n  transition: all 0.3s;\r\n}\r\n.bar-1 {\r\n  top: 0;\r\n}\r\n.bar-1-active-1 {\r\n  top: calc(50% - 1px);\r\n}\r\n.bar-1-active-2 {\r\n  rotate: 45deg;\r\n}\r\n\r\n.bar-2-active {\r\n  opacity: 0;\r\n}\r\n.bar-3 {\r\n  bottom: 0;\r\n}\r\n.bar-3-active-1 {\r\n  bottom: calc(50% - 1px);\r\n}\r\n.bar-3-active-2 {\r\n  rotate: -45deg;\r\n}\r\n.nav-active-1-xs {\r\n  transition: 1s;\r\n  transform: translateX(100%);\r\n}\r\n.nav-active-2-xs {\r\n  transition: 1s;\r\n  transform: translateX(0%);\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\nnav {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 2rem;\r\n  // animation: opacity 7s;\r\n  animation: 3s menu-anim;\r\n  @keyframes menu-anim {\r\n    0% {\r\n      transform: translateY(-120%);\r\n    }\r\n  }\r\n\r\n  @include xs {\r\n    height: auto;\r\n    width: 100%;\r\n    display: none;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 8rem;\r\n    margin: 0 0;\r\n    animation: none;\r\n    animation: menu-responsive 1s;\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n  @include sm {\r\n    height: 8rem;\r\n    width: 100%;\r\n    display: none;\r\n    justify-content: space-around;\r\n    position: absolute;\r\n    top: 8rem;\r\n    margin: 0 0;\r\n    animation: none;\r\n    animation: menu-responsive 1s;\r\n    background: var(--beige);\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n}\r\n.element-nav-bar {\r\n  margin: 0 2rem;\r\n  color: #eee;\r\n  font-size: 2.8rem;\r\n  letter-spacing: 0.1rem;\r\n  font-family: var(--ff-title);\r\n  text-decoration: none;\r\n  transition: 1s;\r\n  &:hover {\r\n    font-size: 3rem;\r\n    letter-spacing: 0.2rem;\r\n    // color: var(--violet);\r\n  }\r\n\r\n  @include xs {\r\n    margin: 1rem;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n.btn {\r\n  height: 5rem;\r\n  width: 15rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 3rem;\r\n  // backdrop-filter: blur(1rem);\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: 1.8rem;\r\n  transition: 1s;\r\n  z-index: 1;\r\n  @include xs {\r\n    text-decoration: underline;\r\n  }\r\n  @include sm {\r\n    text-decoration: underline;\r\n  }\r\n  &:hover {\r\n    width: 18rem;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n    text-decoration: none !important;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  height: auto;\r\n  width: 100%;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--beige);\r\n  animation: anim-start 6s;\r\n  text-align: center;\r\n}\r\n.footer-content {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  @include xs {\r\n    flex-direction: column;\r\n  }\r\n  @include sm {\r\n    flex-direction: column;\r\n  }\r\n}\r\n.ft {\r\n  height: auto;\r\n  width: 24rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\na {\r\n  font-style: italic;\r\n  color: var(--bordeaux);\r\n}\r\n\r\n.link-page {\r\n  transition: all 1s;\r\n\r\n  &:hover {\r\n    width: 22rem;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.1rem;\r\n    cursor: pointer;\r\n  }\r\n}\r\nh5 {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--bordeaux);\r\n  font-size: 1.8rem;\r\n  font-weight: 200;\r\n}\r\n.link-h5 {\r\n  font-family: var(--ff-title);\r\n  font-style: none;\r\n  text-decoration: none;\r\n  font-weight: 200;\r\n  font-size: 2.5rem;\r\n  letter-spacing: 0.1rem;\r\n  margin-left: 0.5rem;\r\n  color: var(--bordeaux);\r\n}\r\n.title-footer {\r\n  color: var(--bordeaux);\r\n}\r\n.img-footer {\r\n  height: 8rem;\r\n  margin: 0 2rem;\r\n  @include xs {\r\n    margin: 0 1rem;\r\n  }\r\n}\r\n.ft-logo {\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n}\r\n.ft-logo-xs {\r\n  display: none;\r\n  @include xs {\r\n    display: flex;\r\n    margin-bottom: 2rem;\r\n  }\r\n  @include sm {\r\n    display: flex;\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n","// @keyframes anim-start {\r\n//   0% {\r\n//     height: 50%;\r\n//   }\r\n//   50% {\r\n//     height: 50%;\r\n//   }\r\n// }\r\n// @keyframes text-anim-start-p1 {\r\n//   0% {\r\n//     opacity: 1;\r\n//   }\r\n//   80% {\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     opacity: 0;\r\n//   }\r\n// }\r\n// @keyframes text-anim-start-p2 {\r\n//   0% {\r\n//     opacity: 0;\r\n//   }\r\n//   55% {\r\n//     opacity: 0;\r\n//   }\r\n//   56% {\r\n//     opacity: 1;\r\n//   }\r\n//   80% {\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     opacity: 0;\r\n//   }\r\n// }\r\n// @keyframes text-anim-start {\r\n//   0% {\r\n//     opacity: 1;\r\n//   }\r\n//   100% {\r\n//     opacity: 1;\r\n//   }\r\n// }\r\n// @keyframes opacity {\r\n//   0% {\r\n//     opacity: 0;\r\n//   }\r\n//   80% {\r\n//     opacity: 0;\r\n//   }\r\n//   100% {\r\n//     opacity: 1;\r\n//   }\r\n// }\r\n// @keyframes container-start {\r\n//   0% {\r\n//     background: var(--beige);\r\n//   }\r\n//   100% {\r\n//     background: var(--beige);\r\n//   }\r\n// }\r\n@keyframes menu-responsive {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/medecine-rythmique/medecine-rythmique.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/medecine-rythmique/medecine-rythmique.scss ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/lac-4.jpeg */ "./src/assets/images/lac-4.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/lac-4-v2.png */ "./src/assets/images/lac-4-v2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
.header-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  z-index: 100;
}

.header-background {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
}

.link-rdv {
  margin-top: 20rem;
  animation: link-rdv-anim 4s;
}
@keyframes link-rdv-anim {
  0% {
    opacity: 0;
  }
}
.link-rdv a {
  background: rgba(0, 0, 0, 0.4);
  font-size: 4rem;
  letter-spacing: 0.1rem;
  padding: 2rem;
  border-radius: 5rem;
  color: white;
  text-decoration: none;
  font-family: var(--ff-title);
  transition: 1s;
}
.link-rdv a:hover {
  color: var(--bordeaux);
  background: rgba(238, 238, 238, 0.8);
}

.main-content {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  text-align: center;
}
@media (max-width: 480px) {
  .main-content {
    padding: 1rem;
  }
}

.modalite-container {
  height: 5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  transition: 2s all;
  border-radius: 3rem;
}
@media (max-width: 480px) {
  .modalite-container {
    height: 25rem;
    background: white;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .modalite-container {
    height: 21rem;
    background: white;
  }
}
.modalite-container:hover {
  height: 20rem;
  background: white;
}
.modalite-container:hover > .span-modalite {
  display: flex;
}

h3 {
  font-family: var(--ff-title);
  font-weight: 200;
  font-size: 4rem;
  color: var(--bordeaux);
  cursor: pointer;
  margin-top: 1rem;
}

.span-modalite {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2s all;
  color: transparent;
}
@media (max-width: 480px) {
  .span-modalite {
    display: flex;
    color: var(--bordeaux);
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .span-modalite {
    display: flex;
    color: var(--bordeaux);
  }
}

.style-text-osteo {
  margin: 1rem;
  font-size: 2rem;
}

.style-text-osteo-active {
  color: var(--bordeaux);
}

.osteo-text-container {
  margin: 2rem;
  width: 80%;
}

.osteo-text {
  font-size: 2rem;
}

.questions-contact {
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 3rem 0;
  background: white;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 1.8rem;
  transition: 1s;
}
.questions-contact:hover {
  letter-spacing: 0.1rem;
  text-decoration: underline;
}
@media (max-width: 480px) {
  .questions-contact {
    text-decoration: underline;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .questions-contact {
    text-decoration: underline;
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_media-queries.scss","webpack://./src/index/medecine-rythmique/medecine-rythmique.scss"],"names":[],"mappings":"AAAA,8BAAA;AAMA,uCAAA;AAMA,6CAAA;AAMA,kBAAA;AChBA;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,YAAA;AAGF;;AADA;EACE,mDAAA;EACA,sBAAA;AAIF;;AAFA;EACE,iBAAA;EACA,2BAAA;AAKF;AAJE;EACE;IACE,UAAA;EAMJ;AACF;AAJE;EACE,8BAAA;EACA,eAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,qBAAA;EACA,4BAAA;EACA,cAAA;AAMJ;AALI;EACE,sBAAA;EACA,oCAAA;AAON;;AAHA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;AAMF;ADtDE;ECwCF;IAUI,aAAA;EAQF;AACF;;AALA;EACE,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;AAQF;ADrEE;ECsDF;IASI,aAAA;IACA,iBAAA;EAUF;AACF;ADrEE;ECgDF;IAaI,aAAA;IACA,iBAAA;EAYF;AACF;AAXE;EACE,aAAA;EACA,iBAAA;AAaJ;AAXE;EACE,aAAA;AAaJ;;AAVA;EACE,4BAAA;EACA,gBAAA;EACA,eAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAaF;;AAXA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AAcF;AD1GE;ECsFF;IAQI,aAAA;IACA,sBAAA;EAgBF;AACF;AD1GE;ECgFF;IAYI,aAAA;IACA,sBAAA;EAkBF;AACF;;AAhBA;EACE,YAAA;EACA,eAAA;AAmBF;;AAjBA;EACE,sBAAA;AAoBF;;AAlBA;EACE,YAAA;EACA,UAAA;AAqBF;;AAnBA;EACE,eAAA;AAsBF;;AApBA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,cAAA;AAuBF;AAtBE;EACE,sBAAA;EACA,0BAAA;AAwBJ;AD3JE;ECoHF;IAkBI,0BAAA;EAyBF;AACF;AD1JE;EC8GF;IAqBI,0BAAA;EA2BF;AACF","sourcesContent":["/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 1099px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 1100px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../../assets/styles/media-queries\" as *;\n\n.header-container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"../../assets/images/lac-4.jpeg\");\n  background-size: cover;\n  background-position: center;\n  z-index: 100;\n}\n.header-background {\n  background: url(../../assets/images/lac-4-v2.png);\n  background-size: cover;\n}\n.link-rdv {\n  margin-top: 20rem;\n  animation: link-rdv-anim 4s;\n  @keyframes link-rdv-anim {\n    0% {\n      opacity: 0;\n    }\n  }\n  a {\n    background: rgba(0, 0, 0, 0.4);\n    font-size: 4rem;\n    letter-spacing: 0.1rem;\n    padding: 2rem;\n    border-radius: 5rem;\n    color: white;\n    text-decoration: none;\n    font-family: var(--ff-title);\n    transition: 1s;\n    &:hover {\n      color: var(--bordeaux);\n      background: rgba(#eee, 0.8);\n    }\n  }\n}\n.main-content {\n  height: auto;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5rem;\n  text-align: center;\n  @include xs {\n    padding: 1rem;\n  }\n}\n\n.modalite-container {\n  height: 5rem;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 2rem;\n  transition: 2s all;\n  border-radius: 3rem;\n  @include xs {\n    height: 25rem;\n    background: white;\n  }\n  @include sm {\n    height: 21rem;\n    background: white;\n  }\n  &:hover {\n    height: 20rem;\n    background: white;\n  }\n  &:hover > .span-modalite {\n    display: flex;\n  }\n}\nh3 {\n  font-family: var(--ff-title);\n  font-weight: 200;\n  font-size: 4rem;\n  color: var(--bordeaux);\n  cursor: pointer;\n  margin-top: 1rem;\n}\n.span-modalite {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: 2s all;\n  color: transparent;\n  @include xs {\n    display: flex;\n    color: var(--bordeaux);\n  }\n  @include sm {\n    display: flex;\n    color: var(--bordeaux);\n  }\n}\n.style-text-osteo {\n  margin: 1rem;\n  font-size: 2rem;\n}\n.style-text-osteo-active {\n  color: var(--bordeaux);\n}\n.osteo-text-container {\n  margin: 2rem;\n  width: 80%;\n}\n.osteo-text {\n  font-size: 2rem;\n}\n.questions-contact {\n  height: auto;\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  margin: 3rem 0;\n  background: white;\n  border-radius: 2rem;\n  text-decoration: none;\n  font-size: 1.8rem;\n  transition: 1s;\n  &:hover {\n    letter-spacing: 0.1rem;\n    text-decoration: underline;\n  }\n  @include xs {\n    text-decoration: underline;\n  }\n  @include sm {\n    text-decoration: underline;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index/medecine-rythmique/medecine-rythmique.scss":
/*!**************************************************************!*\
  !*** ./src/index/medecine-rythmique/medecine-rythmique.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_medecine_rythmique_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./medecine-rythmique.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/medecine-rythmique/medecine-rythmique.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_medecine_rythmique_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_medecine_rythmique_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_medecine_rythmique_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_medecine_rythmique_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/lac-4-v2.png":
/*!****************************************!*\
  !*** ./src/assets/images/lac-4-v2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed8a2421ce908a9b815d.png";

/***/ }),

/***/ "./src/assets/images/lac-4.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/lac-4.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22fd2cc47b3ada067ec9.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main5": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************************************!*\
  !*** ./src/index/medecine-rythmique/medecine-rythmique.js ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _medecine_rythmique_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medecine-rythmique.scss */ "./src/index/medecine-rythmique/medecine-rythmique.scss");



// btn xs
var btn = document.querySelector(".btn-xs");
var bar1 = document.querySelector(".bar-1");
var bar2 = document.querySelector(".bar-2");
var bar3 = document.querySelector(".bar-3");
var nav = document.querySelector("nav");
var containerGeneral = document.querySelector(".container-general");
btn.addEventListener("click", function () {
  if (bar1.classList.contains("bar-1-active-1")) {
    bar1.classList.remove("bar-1-active-2");
    bar3.classList.remove("bar-3-active-2");
    nav.classList.remove("nav-active-1-xs");
    nav.classList.remove("nav-active-2-xs");
    setTimeout(function () {
      bar1.classList.remove("bar-1-active-1");
      bar2.classList.remove("bar-2-active");
      bar3.classList.remove("bar-3-active-1");
      nav.classList.add("nav-active-1-xs");
      header.classList.remove('header-active-1');
    }, 300);
    setTimeout(function () {
      nav.style.display = "none";
      nav.classList.add("nav-active-2-xs");
    }, 1100);
  } else {
    bar1.classList.add("bar-1-active-1");
    bar2.classList.add("bar-2-active");
    bar3.classList.add("bar-3-active-1");
    setTimeout(function () {
      bar1.classList.add("bar-1-active-2");
      bar3.classList.add("bar-3-active-2");
      nav.style.display = "flex";
      header.classList.add('header-active-1');
    }, 300);
  }
});
// header

var headerContainer = document.querySelector(".header-container");
var header = document.querySelector("header");
var remToPixels = function remToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
window.addEventListener("scroll", function () {
  var _document$documentEle = document.documentElement,
    scrollTop = _document$documentEle.scrollTop,
    clientHeight = _document$documentEle.clientHeight;
  var bottomElementToTopViewport = headerContainer.getBoundingClientRect().bottom;
  var stopScrollDistance = remToPixels(8);
  if (bottomElementToTopViewport <= stopScrollDistance) {
    header.classList.add("header-background");
    headerContainer.classList.add("header-container-background-none");
  } else {
    header.classList.remove("header-background");
    headerContainer.classList.remove("header-container-background-none");
  }
});
// header fleche 
document.querySelector('.fleche-header-container').addEventListener('click', function (e) {
  e.preventDefault();
  var mainElement = document.querySelector('main');
  if (mainElement) {
    var targetPosition = mainElement.getBoundingClientRect().top + window.pageYOffset;
    var offset = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth'
    });
  }
});

// hc text
var textHc = document.querySelector(".container-hc-text");

// Fonction pour convertir rem en pixels
var remToPixels2 = function remToPixels2(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

// Écouteur d'événement pour le défilement
window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop;
  var topElementToTopViewport = textHc.getBoundingClientRect().top + scrollTop; // Position de textHc par rapport au document

  // Vérifie si textHc a atteint 8 rem du haut de la page
  if (topElementToTopViewport <= scrollTop + remToPixels2(20)) {
    textHc.classList.add("container-hc-text-anim");
    textHc.classList.remove("container-hc-text-anim-2");
  } else {
    textHc.classList.add("container-hc-text-anim-2");
    textHc.classList.remove("container-hc-text-anim");
  }
});
// hc fleche
var flecheHC = document.querySelector(".fleche-header-container");

// Écouteur d'événement pour le défilement
window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop;
  var topElementToTopViewport = textHc.getBoundingClientRect().top + scrollTop; // Position de textHc par rapport au document

  // Vérifie si textHc a atteint 8 rem du haut de la page
  if (topElementToTopViewport <= scrollTop + remToPixels2(10)) {
    flecheHC.classList.add("fleche-header-container-anim");
    flecheHC.classList.remove("fleche-header-container-anim-2");
  } else {
    flecheHC.classList.add("fleche-header-container-anim-2");
    flecheHC.classList.remove("fleche-header-container-anim");
  }
});

// span modalite

var modaliteContainer = document.querySelector(".modalite-container");
var spanModalite = document.querySelector(".span-modalite");
var timeoutId;
modaliteContainer.addEventListener("mouseover", function () {
  timeoutId = setTimeout(function () {
    spanModalite.classList.add("style-text-osteo-active");
  }, 1000);
});
modaliteContainer.addEventListener("mouseleave", function () {
  clearTimeout(timeoutId);
  spanModalite.classList.remove("style-text-osteo-active");
});
/******/ })()
;
//# sourceMappingURL=main5-bundle.js.map
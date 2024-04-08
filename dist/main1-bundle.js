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
  --font-family-imperial-script: "Imperial Script";
  --font-family: "mulish";
}

.allura-regular {
  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
}

.separator-1 {
  height: 2px;
  width: 20rem;
  background: white;
  margin: 2.5rem;
}

.separator-2 {
  height: 2px;
  width: 80%;
  background: white;
}

/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
header {
  grid-area: header;
  position: relative;
  height: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #6420aa, #7f27ff);
  animation: header-anim 2s;
}
@media (max-width: 480px) {
  header {
    height: 10rem;
    animation: header-anim 1s;
  }
}
@keyframes header-anim {
  0% {
    opacity: 0;
    transform: translateY(-20rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin: 1rem;
  font-size: 4rem;
  font-family: var(--font-family-imperial-script);
  color: #eee;
  font-weight: 200;
}

.span-h1 {
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 2rem;
}

.btn-xs {
  display: none;
}

@media (max-width: 480px) {
  .btn-xs {
    position: absolute;
    right: 0;
    height: 2.5rem;
    width: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 2s;
    cursor: pointer;
    margin: 1rem;
  }
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

/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
.info-bar {
  grid-area: nav-bar;
  min-height: 100vh;
  height: auto;
  width: 25rem;
  background: #eee;
  transition: all 1s;
  animation: info-anim 2s;
}
@media (max-width: 480px) {
  .info-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s;
    animation: info-anim 1s;
  }
  @keyframes info-anim {
    0% {
      transform: translateX(-25rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }
}
@keyframes info-anim {
  0% {
    opacity: 0;
    transform: translateX(-25rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0rem);
  }
}

.info-bar-active {
  transform: translateX(-100%);
}

img {
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
}

.img-container {
  height: 20rem;
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
}
@media (max-width: 480px) {
  .img-container {
    margin: 2rem;
  }
}

.info-content {
  height: auto;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: start;
}
@media (max-width: 480px) {
  .info-content {
    text-align: center;
  }
}

.info-perso-container {
  height: auto;
  margin-bottom: 2rem;
}

.div-info {
  margin-left: 2rem;
}
@media (max-width: 480px) {
  .div-info {
    margin: 0;
  }
}

.p-info {
  font-style: italic;
  font-weight: 400;
  margin: 0.5rem;
}

.telephone {
  cursor: pointer;
}

.fa-phone {
  rotate: 135deg;
  transition: all 1s;
  color: #6420aa;
}

.fa-phone-active {
  rotate: 0deg;
  color: #333;
}

.telephone-num {
  opacity: 0;
  margin-left: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 1s;
}
@media (max-width: 480px) {
  .telephone-num {
    opacity: 1;
    color: #6420aa;
  }
}

.telephone-num-active {
  opacity: 1;
  color: #6420aa;
}

.bottom {
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 400;
  color: #6420aa;
  font-weight: 700;
}

.title-phone {
  font-size: 2rem;
  font-weight: 400;
}

.mail {
  display: flex;
  font-size: 2rem;
  margin-left: 2rem;
}
@media (max-width: 480px) {
  .mail {
    justify-content: center;
    margin: 0;
  }
}

.fa-envelope {
  cursor: pointer;
  color: #6420aa;
}

.fa-envelope-active {
  display: none;
}

.fa-envelope-open {
  display: none;
}

.fa-envelope-open-active {
  display: flex;
  cursor: pointer;
}

.title-mail {
  display: flex;
  justify-content: start;
  align-items: center;
}
@media (max-width: 480px) {
  .title-mail {
    justify-content: center;
  }
}

.mail-anim {
  opacity: 0;
  font-size: 1.6rem;
  margin-left: 1.3rem;
  transition: all 1s;
}
@media (max-width: 480px) {
  .mail-anim {
    opacity: 1;
    color: #6420aa;
    margin: 0.5rem;
  }
}

.mail-anim-active {
  opacity: 1;
  color: #6420aa;
}

.langue-container {
  margin-top: 2rem;
  margin-left: 2rem;
}
@media (max-width: 480px) {
  .langue-container {
    margin: 0;
    margin-top: 2rem;
  }
}

.text {
  color: #333;
  font-size: 1.8rem;
}

.star {
  font-size: 1.4rem;
  color: #6420aa;
  margin: 1rem 0.2rem;
}

.star-1 {
  font-size: 1.4rem;
  color: #bbb;
  margin: 1rem 0.2rem;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_fonts.scss","webpack://./src/assets/styles/_separator.scss","webpack://./src/assets/styles/_header.scss","webpack://./src/assets/styles/_info-bar.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n}\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n}\n","html {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n}\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --font-family-imperial-script: \"Imperial Script\";\n  --font-family: \"mulish\";\n}\n\n.allura-regular {\n  font-family: \"Allura\", cursive;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.separator-1 {\n  height: 2px;\n  width: 20rem;\n  background: white;\n  margin: 2.5rem;\n}\n\n.separator-2 {\n  height: 2px;\n  width: 80%;\n  background: white;\n}\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\nheader {\n  grid-area: header;\n  position: relative;\n  height: 20rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(-45deg, #6420aa, #7f27ff);\n  animation: header-anim 2s;\n}\n@media (max-width: 480px) {\n  header {\n    height: 10rem;\n    animation: header-anim 1s;\n  }\n}\n@keyframes header-anim {\n  0% {\n    opacity: 0;\n    transform: translateY(-20rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n\n.header-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\nh1 {\n  margin: 1rem;\n  font-size: 4rem;\n  font-family: var(--font-family-imperial-script);\n  color: #eee;\n  font-weight: 200;\n}\n\n.span-h1 {\n  font-family: \"Roboto Mono\", monospace;\n  font-weight: 400;\n  font-size: 2rem;\n}\n\n.btn-xs {\n  display: none;\n}\n\n@media (max-width: 480px) {\n  .btn-xs {\n    position: absolute;\n    right: 0;\n    height: 2.5rem;\n    width: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    transition: all 2s;\n    cursor: pointer;\n    margin: 1rem;\n  }\n}\n.bar {\n  height: 2px;\n  width: 2.5rem;\n  background: white;\n  position: absolute;\n  transition: all 0.3s;\n}\n\n.bar-1 {\n  top: 0;\n}\n\n.bar-1-active-1 {\n  top: calc(50% - 1px);\n}\n\n.bar-1-active-2 {\n  rotate: 45deg;\n}\n\n.bar-2-active {\n  opacity: 0;\n}\n\n.bar-3 {\n  bottom: 0;\n}\n\n.bar-3-active-1 {\n  bottom: calc(50% - 1px);\n}\n\n.bar-3-active-2 {\n  rotate: -45deg;\n}\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n.info-bar {\n  grid-area: nav-bar;\n  min-height: 100vh;\n  height: auto;\n  width: 25rem;\n  background: #eee;\n  transition: all 1s;\n  animation: info-anim 2s;\n}\n@media (max-width: 480px) {\n  .info-bar {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    transition: all 1s;\n    animation: info-anim 1s;\n  }\n  @keyframes info-anim {\n    0% {\n      transform: translateX(-25rem);\n    }\n    100% {\n      transform: translateX(0rem);\n    }\n  }\n}\n@keyframes info-anim {\n  0% {\n    opacity: 0;\n    transform: translateX(-25rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n}\n\n.info-bar-active {\n  transform: translateX(-100%);\n}\n\nimg {\n  height: 15rem;\n  width: 15rem;\n  border-radius: 50%;\n}\n\n.img-container {\n  height: 20rem;\n  width: 25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5rem;\n}\n@media (max-width: 480px) {\n  .img-container {\n    margin: 2rem;\n  }\n}\n\n.info-content {\n  height: auto;\n  width: 25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n@media (max-width: 480px) {\n  .info-content {\n    text-align: center;\n  }\n}\n\n.info-perso-container {\n  height: auto;\n  margin-bottom: 2rem;\n}\n\n.div-info {\n  margin-left: 2rem;\n}\n@media (max-width: 480px) {\n  .div-info {\n    margin: 0;\n  }\n}\n\n.p-info {\n  font-style: italic;\n  font-weight: 400;\n  margin: 0.5rem;\n}\n\n.telephone {\n  cursor: pointer;\n}\n\n.fa-phone {\n  rotate: 135deg;\n  transition: all 1s;\n  color: #6420aa;\n}\n\n.fa-phone-active {\n  rotate: 0deg;\n  color: #333;\n}\n\n.telephone-num {\n  opacity: 0;\n  margin-left: 1rem;\n  font-size: 1.6rem;\n  text-decoration: none;\n  transition: all 1s;\n}\n@media (max-width: 480px) {\n  .telephone-num {\n    opacity: 1;\n    color: #6420aa;\n  }\n}\n\n.telephone-num-active {\n  opacity: 1;\n  color: #6420aa;\n}\n\n.bottom {\n  margin-bottom: 2rem;\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: 400;\n  color: #6420aa;\n  font-weight: 700;\n}\n\n.title-phone {\n  font-size: 2rem;\n  font-weight: 400;\n}\n\n.mail {\n  display: flex;\n  font-size: 2rem;\n  margin-left: 2rem;\n}\n@media (max-width: 480px) {\n  .mail {\n    justify-content: center;\n    margin: 0;\n  }\n}\n\n.fa-envelope {\n  cursor: pointer;\n  color: #6420aa;\n}\n\n.fa-envelope-active {\n  display: none;\n}\n\n.fa-envelope-open {\n  display: none;\n}\n\n.fa-envelope-open-active {\n  display: flex;\n  cursor: pointer;\n}\n\n.title-mail {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .title-mail {\n    justify-content: center;\n  }\n}\n\n.mail-anim {\n  opacity: 0;\n  font-size: 1.6rem;\n  margin-left: 1.3rem;\n  transition: all 1s;\n}\n@media (max-width: 480px) {\n  .mail-anim {\n    opacity: 1;\n    color: #6420aa;\n    margin: 0.5rem;\n  }\n}\n\n.mail-anim-active {\n  opacity: 1;\n  color: #6420aa;\n}\n\n.langue-container {\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n@media (max-width: 480px) {\n  .langue-container {\n    margin: 0;\n    margin-top: 2rem;\n  }\n}\n\n.text {\n  color: #333;\n  font-size: 1.8rem;\n}\n\n.star {\n  font-size: 1.4rem;\n  color: #6420aa;\n  margin: 1rem 0.2rem;\n}\n\n.star-1 {\n  font-size: 1.4rem;\n  color: #bbb;\n  margin: 1rem 0.2rem;\n}","/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 909px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 910px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\r\n  // font family\r\n  --font-family-imperial-script: \"Imperial Script\";\r\n  --font-family: \"mulish\";\r\n}\r\n",".allura-regular {\r\n  font-family: \"Allura\", cursive;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n",".separator-1 {\r\n  height: 2px;\r\n  width: 20rem;\r\n  background: white;\r\n  margin: 2.5rem;\r\n}\r\n.separator-2 {\r\n  height: 2px;\r\n  width: 80%;\r\n  background: white;\r\n}\r\n","@import \"../styles/media-queries\";\r\n\r\nheader {\r\n  grid-area: header;\r\n  position: relative;\r\n  height: 20rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: linear-gradient(-45deg, #6420aa, #7f27ff);\r\n  animation: header-anim 2s;\r\n  @include xs {\r\n    height: 10rem;\r\n    animation: header-anim 1s;\r\n  }\r\n  @keyframes header-anim {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translateY(-20rem);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: translateY(0rem);\r\n    }\r\n  }\r\n}\r\n.header-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\nh1 {\r\n  margin: 1rem;\r\n  font-size: 4rem;\r\n  font-family: var(--font-family-imperial-script);\r\n  color: #eee;\r\n  font-weight: 200;\r\n}\r\n.span-h1 {\r\n  font-family: \"Roboto Mono\", monospace;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n}\r\n\r\n// btn\r\n\r\n.btn-xs {\r\n  display: none;\r\n}\r\n@include xs {\r\n  .btn-xs {\r\n    position: absolute;\r\n    right: 0;\r\n    height: 2.5rem;\r\n    width: 3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    transition: all 2s;\r\n    cursor: pointer;\r\n    margin: 1rem;\r\n  }\r\n}\r\n\r\n.bar {\r\n  height: 2px;\r\n  width: 2.5rem;\r\n  background: white;\r\n  position: absolute;\r\n  transition: all 0.3s;\r\n}\r\n.bar-1 {\r\n  top: 0;\r\n}\r\n.bar-1-active-1 {\r\n  top: calc(50% - 1px);\r\n}\r\n.bar-1-active-2 {\r\n  rotate: 45deg;\r\n}\r\n\r\n.bar-2-active {\r\n  opacity: 0;\r\n}\r\n.bar-3 {\r\n  bottom: 0;\r\n}\r\n.bar-3-active-1 {\r\n  bottom: calc(50% - 1px);\r\n}\r\n.bar-3-active-2 {\r\n  rotate: -45deg;\r\n}\r\n","@import \"../styles/media-queries\";\r\n.info-bar {\r\n  grid-area: nav-bar;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  width: 25rem;\r\n  background: #eee;\r\n  transition: all 1s;\r\n  animation: info-anim 2s;\r\n  @include xs {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition: all 1s;\r\n    animation: info-anim 1s;\r\n    @keyframes info-anim {\r\n      0% {\r\n        transform: translateX(-25rem);\r\n      }\r\n      100% {\r\n        transform: translateX(0rem);\r\n      }\r\n    }\r\n  }\r\n\r\n  @keyframes info-anim {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translateX(-25rem);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: translateX(0rem);\r\n    }\r\n  }\r\n}\r\n.info-bar-active {\r\n  transform: translateX(-100%);\r\n}\r\n// img\r\n\r\nimg {\r\n  height: 15rem;\r\n  width: 15rem;\r\n  border-radius: 50%;\r\n  // transition: all 2s;\r\n}\r\n\r\n.img-container {\r\n  height: 20rem;\r\n  width: 25rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 5rem;\r\n  @include xs {\r\n    margin: 2rem;\r\n  }\r\n}\r\n\r\n// info\r\n\r\n.info-content {\r\n  height: auto;\r\n  width: 25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  @include xs {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n// info perso\r\n\r\n.info-perso-container {\r\n  height: auto;\r\n  margin-bottom: 2rem;\r\n}\r\n.div-info {\r\n  margin-left: 2rem;\r\n  @include xs {\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n.p-info {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  margin: 0.5rem;\r\n}\r\n\r\n// telephone\r\n.telephone {\r\n  cursor: pointer;\r\n}\r\n.fa-phone {\r\n  rotate: 135deg;\r\n  transition: all 1s;\r\n  color: #6420aa;\r\n}\r\n.fa-phone-active {\r\n  rotate: 0deg;\r\n  color: #333;\r\n}\r\n.telephone-num {\r\n  opacity: 0;\r\n  @include xs {\r\n    opacity: 1;\r\n    color: #6420aa;\r\n  }\r\n  margin-left: 1rem;\r\n  font-size: 1.6rem;\r\n  text-decoration: none;\r\n  transition: all 1s;\r\n}\r\n.telephone-num-active {\r\n  opacity: 1;\r\n  color: #6420aa;\r\n}\r\n.bottom {\r\n  margin-bottom: 2rem;\r\n}\r\n.title {\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  color: #6420aa;\r\n  font-weight: 700;\r\n}\r\n.title-phone {\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n}\r\n\r\n// mail\r\n\r\n.mail {\r\n  display: flex;\r\n  font-size: 2rem;\r\n  margin-left: 2rem;\r\n  $transition: all 1s;\r\n  @include xs {\r\n    justify-content: center;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n.fa-envelope {\r\n  cursor: pointer;\r\n  color: #6420aa;\r\n}\r\n.fa-envelope-active {\r\n  display: none;\r\n}\r\n.fa-envelope-open {\r\n  display: none;\r\n}\r\n.fa-envelope-open-active {\r\n  display: flex;\r\n  cursor: pointer;\r\n}\r\n.title-mail {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  @include xs {\r\n    justify-content: center;\r\n  }\r\n}\r\n.mail-anim {\r\n  opacity: 0;\r\n  @include xs {\r\n    opacity: 1;\r\n    color: #6420aa;\r\n    margin: 0.5rem;\r\n  }\r\n  font-size: 1.6rem;\r\n  margin-left: 1.3rem;\r\n  transition: all 1s;\r\n}\r\n.mail-anim-active {\r\n  opacity: 1;\r\n  color: #6420aa;\r\n}\r\n\r\n// langue\r\n.langue-container {\r\n  margin-top: 2rem;\r\n  margin-left: 2rem;\r\n  @include xs {\r\n    margin: 0;\r\n    margin-top: 2rem;\r\n  }\r\n}\r\n.text {\r\n  color: #333;\r\n  font-size: 1.8rem;\r\n}\r\n.star {\r\n  font-size: 1.4rem;\r\n  color: #6420aa;\r\n  margin: 1rem 0.2rem;\r\n}\r\n.star-1 {\r\n  font-size: 1.4rem;\r\n  color: #bbb;\r\n  margin: 1rem 0.2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/index.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/index.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
.grid {
  display: grid;
  grid: "nav-bar header" 20rem "nav-bar general" auto/25rem auto;
}
@media (max-width: 480px) {
  .grid {
    display: flex;
    flex-direction: column;
  }
}

.container-general {
  grid-area: general;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 480px) {
  .container-general {
    display: none;
    position: absolute;
    top: 10rem;
    flex-direction: column;
    animation: container-general-anim-xs 1s;
    transition: all 1s;
  }
  @keyframes container-general-anim-xs {
    0% {
      transform: translateX(100%);
    }
  }
}

.container-general-active-xs {
  transform: translateX(100%);
}

.info-general {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #7f27ff;
  border-radius: 2rem;
}

.diplome-container {
  min-height: 90%;
  height: auto;
  width: 30%;
  animation: diplome-anim 2s;
  margin: 2rem;
}
@media (max-width: 480px) {
  .diplome-container {
    animation: none;
    width: 90%;
  }
}

@keyframes diplome-anim {
  0% {
    transform: translateX(-100%);
  }
}
.text-general {
  width: 80%;
  color: white;
  margin: 2rem;
}

.text-pro {
  margin: 1rem;
}

.top {
  margin-top: 2rem;
}

.pro-container {
  min-height: 90%;
  height: auto;
  width: 63%;
  animation: pro-anim 2s;
  margin: 2rem;
}
@media (max-width: 480px) {
  .pro-container {
    width: 90%;
    animation: none;
  }
}

@keyframes pro-anim {
  0% {
    transform: translateY(-100%);
  }
}
.name-pro {
  font-size: 2rem;
}

.mission {
  font-weight: 700;
  font-size: 1.8rem;
}

h2 {
  font-family: var(--font-family-imperial-script);
  font-weight: 200;
  font-size: 4rem;
  color: white;
  margin: 2rem;
  text-align: center;
}

a {
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_media-queries.scss","webpack://./src/index/index.scss"],"names":[],"mappings":"AAAA,8BAAA;AAMA,uCAAA;AAMA,6CAAA;AAMA,kBAAA;AChBA;EACE,aAAA;EACA,8DACE;AAEJ;ADLE;ECAF;IAOI,aAAA;IACA,sBAAA;EAEF;AACF;;AACA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAEF;ADlBE;ECYF;IAMI,aAAA;IACA,kBAAA;IACA,UAAA;IACA,sBAAA;IACA,uCAAA;IACA,kBAAA;EAIF;EAHE;IACE;MACE,2BAAA;IAKJ;EACF;AACF;;AAFA;EACE,2BAAA;AAKF;;AAFA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AAKF;;AAHA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,0BAAA;EACA,YAAA;AAMF;ADvDE;EC4CF;IAOI,eAAA;IACA,UAAA;EAQF;AACF;;AANA;EACE;IACE,4BAAA;EASF;AACF;AANA;EACE,UAAA;EACA,YAAA;EACA,YAAA;AAQF;;AALA;EACE,YAAA;AAQF;;AANA;EACE,gBAAA;AASF;;AANA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,YAAA;AASF;ADxFE;EC0EF;IAOI,UAAA;IACA,eAAA;EAWF;AACF;;AATA;EACE;IACE,4BAAA;EAYF;AACF;AATA;EACE,eAAA;AAWF;;AATA;EACE,gBAAA;EACA,iBAAA;AAYF;;AATA;EACE,+CAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;AAYF;;AAVA;EACE,YAAA;AAaF","sourcesContent":["/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 909px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 910px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","@import \"../assets/styles/media-queries\";\r\n\r\n.grid {\r\n  display: grid;\r\n  grid:\r\n    \"nav-bar header\" 20rem\r\n    \"nav-bar general\" auto\r\n    / 25rem auto;\r\n  @include xs {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.container-general {\r\n  grid-area: general;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  @include xs {\r\n    display: none;\r\n    position: absolute;\r\n    top: 10rem;\r\n    flex-direction: column;\r\n    animation: container-general-anim-xs 1s;\r\n    transition: all 1s;\r\n    @keyframes container-general-anim-xs {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  }\r\n}\r\n.container-general-active-xs {\r\n  transform: translateX(100%);\r\n}\r\n\r\n.info-general {\r\n  margin: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #7f27ff;\r\n  border-radius: 2rem;\r\n}\r\n.diplome-container {\r\n  min-height: 90%;\r\n  height: auto;\r\n  width: 30%;\r\n  animation: diplome-anim 2s;\r\n  margin: 2rem;\r\n  @include xs {\r\n    animation: none;\r\n    width: 90%;\r\n  }\r\n}\r\n@keyframes diplome-anim {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n\r\n.text-general {\r\n  width: 80%;\r\n  color: white;\r\n  margin: 2rem;\r\n}\r\n\r\n.text-pro {\r\n  margin: 1rem;\r\n}\r\n.top {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.pro-container {\r\n  min-height: 90%;\r\n  height: auto;\r\n  width: 63%;\r\n  animation: pro-anim 2s;\r\n  margin: 2rem;\r\n  @include xs {\r\n    width: 90%;\r\n    animation: none;\r\n  }\r\n}\r\n@keyframes pro-anim {\r\n  0% {\r\n    transform: translateY(-100%);\r\n  }\r\n}\r\n\r\n.name-pro {\r\n  font-size: 2rem;\r\n}\r\n.mission {\r\n  font-weight: 700;\r\n  font-size: 1.8rem;\r\n}\r\n\r\nh2 {\r\n  font-family: var(--font-family-imperial-script);\r\n  font-weight: 200;\r\n  font-size: 4rem;\r\n  color: white;\r\n  margin: 2rem;\r\n  text-align: center;\r\n}\r\na {\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/index/index.scss":
/*!******************************!*\
  !*** ./src/index/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _index_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index/index.scss */ "./src/index/index.scss");



// tel

var tel1 = document.querySelector(".telephone");
var tel2 = document.querySelector(".fa-phone");
var tel3 = document.querySelector(".telephone-num");
tel1.addEventListener("mouseover", function () {
  tel2.classList.add("fa-phone-active");
  tel3.classList.add("telephone-num-active");
});
tel1.addEventListener("mouseout", function () {
  tel2.classList.remove("fa-phone-active");
  tel3.classList.remove("telephone-num-active");
});

// mail
var mail = document.querySelector(".mail");
var mailAnim = document.querySelector(".mail-anim");
var env = document.querySelector(".fa-envelope");
var envOpen = document.querySelector(".fa-envelope-open");
mail.addEventListener("mouseover", function () {
  envOpen.classList.add("fa-envelope-open-active");
  env.classList.add("fa-envelope-active");
  mailAnim.classList.add("mail-anim-active");
});
mail.addEventListener("mouseout", function () {
  envOpen.classList.remove("fa-envelope-open-active");
  env.classList.remove("fa-envelope-active");
  mailAnim.classList.remove("mail-anim-active");
});

// btn

var btn = document.querySelector(".btn-xs");
var bar1 = document.querySelector(".bar-1");
var bar2 = document.querySelector(".bar-2");
var bar3 = document.querySelector(".bar-3");
var infoBar = document.querySelector(".info-bar");
var containerGeneral = document.querySelector(".container-general");
btn.addEventListener("click", function () {
  if (bar1.classList.contains("bar-1-active-1")) {
    bar1.classList.remove("bar-1-active-2");
    bar3.classList.remove("bar-3-active-2");
    infoBar.classList.remove("info-bar-active");
    setTimeout(function () {
      bar1.classList.remove("bar-1-active-1");
      bar2.classList.remove("bar-2-active");
      bar3.classList.remove("bar-3-active-1");
      containerGeneral.classList.add("container-general-active-xs");
      infoBar.style.display = "flex";
    }, 300);
    setTimeout(function () {
      containerGeneral.classList.remove("container-general-active-xs");
      containerGeneral.style.display = "none";
    }, 1000);
  } else {
    bar1.classList.add("bar-1-active-1");
    bar2.classList.add("bar-2-active");
    bar3.classList.add("bar-3-active-1");
    setTimeout(function () {
      bar1.classList.add("bar-1-active-2");
      bar3.classList.add("bar-3-active-2");
      infoBar.classList.add("info-bar-active");
      containerGeneral.style.display = "flex";
    }, 300);
    setTimeout(function () {
      infoBar.style.display = "none";
    }, 1000);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main1-bundle.js.map
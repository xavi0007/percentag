webpackHotUpdate("background",{

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! exports provided: messageInBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInBackground", function() { return messageInBackground; });
// If your extension doesn't need a background script, just leave this file empty

/*global chrome*/
messageInBackground(); // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');
}
console.log("inside bg script"); // let savedTags = ["Stripe", "Investment"];
// chrome.storage.local.set({ tags: savedTags }, function () {
//     console.log("retrieved: " + savedTags);
// })

/***/ })

})
//# sourceMappingURL=background.3d0bdf91aa17a7c54936.hot-update.js.map
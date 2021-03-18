webpackHotUpdate("app",{

/***/ "./src/Backend/apiCall.js":
/*!********************************!*\
  !*** ./src/Backend/apiCall.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiCall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/xavier/Programming/React/watchr2/src/Backend/apiCall.js";

/*global chrome*/



class ApiCall extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.callApi = async () => {
      const response = await fetch('http://localhost:5000/api/scrap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: this.state.currentURL
        })
      });
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };

    this.handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: this.state.post
        })
      });
      const body = await response.text();
      this.setState({
        responseToPost: body
      });
    };

    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      currentURL: 'https://www.dealstreetasia.com/stories/aiot-startup-aiforward-77m-232438/'
    };
    this.sendTags = this.sendTags.bind(this);
    this.getCurrentURL = this.getCurrentURL.bind(this);
  }

  componentDidMount() {
    this.getCurrentURL();
    this.getTagApi();
  }

  getCurrentURL() {
    chrome.tabs.query({
      currentWindow: true
    }, tabs => {
      let url = tabs[0].url; // use `url` here inside the callback because it's asynchronous!

      this.setState({
        currentURL: url
      });
    });
    chrome.tabs.onActivated.addListener(activeInfo => {
      chrome.tabs.getSelected(null, function (tab) {
        var tablink = tab.url;
        console.log(tablink);
      });
    });
    console.log(this.state.currentURL);
    console.log("state has correct url");
  }

  getTagApi() {
    this.callApi().then(res => this.sendTags(res.express)).catch(err => console.log(err));
  }

  sendTags(value) {
    this.props.getTags(value);
  }

  render() {
    let tagArray = this.props.tags;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        onSubmit: this.handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
            children: "Post to Server:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          value: this.state.post,
          onChange: e => this.setState({
            post: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: this.state.responseToPost
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this);
  }

}

/***/ })

})
//# sourceMappingURL=app.5d14ed764cdaf98b2ef8.hot-update.js.map
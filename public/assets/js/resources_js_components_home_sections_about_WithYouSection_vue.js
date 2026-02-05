"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_sections_about_WithYouSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app */ "./resources/js/app.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      withYouSecSettings: JSON.parse(localStorage.getItem('life_with_you_sec')),
      isMobile: false
    };
  },
  created: function created() {
    this.checkIfMobile();
  },
  computed: {
    lang: function lang() {
      return _app__WEBPACK_IMPORTED_MODULE_0__.i18n.global.locale;
    }
  },
  mounted: function mounted() {
    if (!this.isMobile) {
      this.initializeIntersectionObserver();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    convertLang: function convertLang(text) {
      var _text$split$;
      return (_text$split$ = text === null || text === void 0 ? void 0 : text.split("[:".concat(this.lang, "]"))[1]) !== null && _text$split$ !== void 0 ? _text$split$ : text;
    },
    checkIfMobile: function checkIfMobile() {
      this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    initializeIntersectionObserver: function initializeIntersectionObserver() {
      var video = this.$refs.videoElement;
      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      }, {
        threshold: 0.5
      });
      if (video) {
        this.observer.observe(video);
      }
    },
    handleVideoClick: function handleVideoClick() {
      if (this.isMobile) {
        var video = this.$refs.videoElement;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=template&id=ccc29bac":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=template&id=ccc29bac ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "VideoAboutpage"
};
var _hoisted_2 = {
  "class": "ff_ss3_bold"
};
var _hoisted_3 = {
  "class": "list-about"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.withYouSecSettings.main_title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("video", {
    ref: "videoElement",
    width: "100%",
    "class": "",
    controls: "",
    loop: "",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.handleVideoClick && $options.handleVideoClick.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("source", {
    src: $data.withYouSecSettings.video,
    type: "video/mp4"
  }, null, 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your browser does not support the video tag. ")], 512 /* NEED_PATCH */)])])]);
}

/***/ }),

/***/ "./resources/js/components/home/sections/about/WithYouSection.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/WithYouSection.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WithYouSection_vue_vue_type_template_id_ccc29bac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WithYouSection.vue?vue&type=template&id=ccc29bac */ "./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=template&id=ccc29bac");
/* harmony import */ var _WithYouSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WithYouSection.vue?vue&type=script&lang=js */ "./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WithYouSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WithYouSection_vue_vue_type_template_id_ccc29bac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/sections/about/WithYouSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithYouSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithYouSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WithYouSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=template&id=ccc29bac":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=template&id=ccc29bac ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithYouSection_vue_vue_type_template_id_ccc29bac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WithYouSection_vue_vue_type_template_id_ccc29bac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WithYouSection.vue?vue&type=template&id=ccc29bac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/WithYouSection.vue?vue&type=template&id=ccc29bac");


/***/ })

}]);
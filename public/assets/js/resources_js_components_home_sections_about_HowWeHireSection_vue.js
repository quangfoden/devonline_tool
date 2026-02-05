"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_sections_about_HowWeHireSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app */ "./resources/js/app.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      lifeHowWeHireSec: JSON.parse(localStorage.getItem('life_how_we_hire_sec')),
      generalAbout: JSON.parse(localStorage.getItem('general'))
    };
  },
  computed: {
    lang: function lang() {
      return _app__WEBPACK_IMPORTED_MODULE_0__.i18n.global.locale;
    }
  },
  created: function created() {},
  methods: {
    toggleFaq: function toggleFaq(index) {
      this.lifeHowWeHireSec.data.question.forEach(function (faq, i) {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
      });
    },
    convertLang: function convertLang(text) {
      var _text$split$;
      return (_text$split$ = text === null || text === void 0 ? void 0 : text.split("[:".concat(this.lang, "]"))[1]) !== null && _text$split$ !== void 0 ? _text$split$ : text;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=template&id=619a9d31":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=template&id=619a9d31 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "QuestionAbout"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "ff_ss3_bold"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-12 faqs"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  key: 0,
  "class": "faq-answer stext-101 c-xam pb-2 pt-2 px-3"
};
var _hoisted_8 = {
  style: {
    "background-color": "#333333",
    "color": "#ffffff"
  }
};
var _hoisted_9 = {
  "class": "container-fluid mt-5 p-4"
};
var _hoisted_10 = {
  "class": "row fw-bold"
};
var _hoisted_11 = {
  "class": "col-12 col-md-6"
};
var _hoisted_12 = {
  "class": "mtext-101 fw-bold"
};
var _hoisted_13 = {
  "class": "mtext-102 m-0"
};
var _hoisted_14 = {
  "class": "mtext-106 mb-1"
};
var _hoisted_15 = {
  "class": "lstylen p-0"
};
var _hoisted_16 = {
  "class": "mtext-105"
};
var _hoisted_17 = {
  "class": "mtext-103"
};
var _hoisted_18 = {
  "class": "mtext-105"
};
var _hoisted_19 = {
  "class": "mtext-103"
};
var _hoisted_20 = {
  "class": "mtext-105"
};
var _hoisted_21 = ["href"];
var _hoisted_22 = {
  "class": "mtext-105"
};
var _hoisted_23 = ["href"];
var _hoisted_24 = {
  "class": "col-12 col-md-6"
};
var _hoisted_25 = {
  "class": "mtext-101 text-center fw-bold"
};
var _hoisted_26 = {
  id: "ImageKH"
};
var _hoisted_27 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.main_title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.lifeHowWeHireSec.data.question, function (faq, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "faq-item my-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      onClick: function onClick($event) {
        return $options.toggleFaq(index);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["faq-question stext-104 p-3", {
        open: faq.open
      }])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(faq.title)), 11 /* TEXT, CLASS, PROPS */, _hoisted_6), faq.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(faq.answer)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.title_small)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.note_title_small)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.hotline_title)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.generalAbout.contact.hotline), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.zalo_title)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.generalAbout.contact.hotline), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.fb_title)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "mtext-104",
    href: $data.generalAbout.contact.link_fb,
    target: "_blank"
  }, "Lân sư rồng Nam Anh", 8 /* PROPS */, _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.fanpage_title)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "mtext-104",
    href: $data.generalAbout.contact.link_page_fb,
    target: "_blank"
  }, "Lân sư rồng Nam Anh", 8 /* PROPS */, _hoisted_23)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.lifeHowWeHireSec.data.info.customer_title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.lifeHowWeHireSec.data.images_kh, function (imgKh, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "imgkh hov-img0"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: imgKh,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_27)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])])]);
}

/***/ }),

/***/ "./resources/js/components/home/sections/about/HowWeHireSection.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/HowWeHireSection.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HowWeHireSection_vue_vue_type_template_id_619a9d31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HowWeHireSection.vue?vue&type=template&id=619a9d31 */ "./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=template&id=619a9d31");
/* harmony import */ var _HowWeHireSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HowWeHireSection.vue?vue&type=script&lang=js */ "./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HowWeHireSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HowWeHireSection_vue_vue_type_template_id_619a9d31__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/sections/about/HowWeHireSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HowWeHireSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HowWeHireSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HowWeHireSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=template&id=619a9d31":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=template&id=619a9d31 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HowWeHireSection_vue_vue_type_template_id_619a9d31__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HowWeHireSection_vue_vue_type_template_id_619a9d31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HowWeHireSection.vue?vue&type=template&id=619a9d31 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/HowWeHireSection.vue?vue&type=template&id=619a9d31");


/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_sections_about_OurValueSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app */ "./resources/js/app.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      ourValueSecSettings: JSON.parse(localStorage.getItem('life_our_value_sec'))
    };
  },
  created: function created() {},
  computed: {
    lang: function lang() {
      return _app__WEBPACK_IMPORTED_MODULE_0__.i18n.global.locale;
    }
  },
  methods: {
    toggleActive: function toggleActive(idx) {
      var itemOvlLife = $(".it_ovl_life_".concat(idx));
      var itemOvlBg = $(".it_ovl_bg_".concat(idx));
      if (itemOvlLife.hasClass('active')) {
        itemOvlLife.toggleClass('active');
        itemOvlBg.toggleClass('active');
        $('#activeFirst').addClass('active');
        setTimeout(function () {
          itemOvlBg.toggleClass('previous');
          $('#activeFirst').addClass('previous');
        }, 2000);
      } else {
        $('.it_ovl_life').removeClass('active');
        itemOvlLife.addClass('active');
        $('.it_ovl_bg').removeClass('active');
        itemOvlBg.addClass('active');
        setTimeout(function () {
          $('.it_ovl_bg').removeClass('previous');
          itemOvlBg.addClass('previous');
        }, 2000);
      }
    },
    convertLang: function convertLang(text) {
      var _text$split$;
      return (_text$split$ = text === null || text === void 0 ? void 0 : text.split("[:".concat(this.lang, "]"))[1]) !== null && _text$split$ !== void 0 ? _text$split$ : text;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=template&id=7039de92":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=template&id=7039de92 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "lifeOurValueSection"
};
var _hoisted_2 = {
  "class": "list_ovl_bg hidden-mobile"
};
var _hoisted_3 = {
  "class": "list_ovl_life d-flex position-relative"
};
var _hoisted_4 = ["onClick"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ovl_toggle position-absolute plus\"><span aria-hidden=\"true\" class=\"icon\"><svg viewBox=\"0 0 8 8\"><path d=\"M8 3H5V0H3v3H0v2h3v3h2V5h3z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"></path></svg></span></div><div class=\"ovl_toggle position-absolute minus\"><span aria-hidden=\"true\" class=\"icon\"><svg viewBox=\"0 0 12 2\" width=\"12\" height=\"2\"><path d=\"M0 0h12v2H0z\"></path></svg></span></div>", 2);
var _hoisted_7 = {
  "class": "info_front"
};
var _hoisted_8 = {
  "class": "title ff_ss3_bold"
};
var _hoisted_9 = {
  "class": "info_back"
};
var _hoisted_10 = {
  "class": "title ff_ss3_bold"
};
var _hoisted_11 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ourValueSecSettings.content, function (it, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: idx,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["it_ovl_bg", "it_ovl_bg_".concat(idx)]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-image: url('".concat(it.bg, "')"))
    }, null, 6 /* CLASS, STYLE */);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "activeFirst",
    "class": "it_ovl_bg previous active activeFirst",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-image: url(".concat($data.ourValueSecSettings.main_bg, ")"))
  }, null, 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.ourValueSecSettings.content, function (it, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: idx,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["it_ovl_life position-relative", "it_ovl_life_".concat(idx)]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-image: url('".concat(it.bg, "')")),
      onClick: function onClick($event) {
        return $options.toggleActive(idx);
      }
    }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(it.title)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(it.title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "desc",
      innerHTML: $options.convertLang(it.content)
    }, null, 8 /* PROPS */, _hoisted_11)])], 14 /* CLASS, STYLE, PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./resources/js/components/home/sections/about/OurValueSection.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/OurValueSection.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OurValueSection_vue_vue_type_template_id_7039de92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OurValueSection.vue?vue&type=template&id=7039de92 */ "./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=template&id=7039de92");
/* harmony import */ var _OurValueSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OurValueSection.vue?vue&type=script&lang=js */ "./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_OurValueSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_OurValueSection_vue_vue_type_template_id_7039de92__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/sections/about/OurValueSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OurValueSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OurValueSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OurValueSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=template&id=7039de92":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=template&id=7039de92 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OurValueSection_vue_vue_type_template_id_7039de92__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_OurValueSection_vue_vue_type_template_id_7039de92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./OurValueSection.vue?vue&type=template&id=7039de92 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/about/OurValueSection.vue?vue&type=template&id=7039de92");


/***/ })

}]);
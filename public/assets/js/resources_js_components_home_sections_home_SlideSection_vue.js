"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_sections_home_SlideSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/SlideSection.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/SlideSection.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/vue */ "./node_modules/swiper/swiper-vue.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Swiper: swiper_vue__WEBPACK_IMPORTED_MODULE_0__.Swiper,
    SwiperSlide: swiper_vue__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide
  },
  setup: function setup() {
    return {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay]
    };
  },
  data: function data() {
    return {
      slideSecSettings: {},
      screenWidth: window.innerWidth
    };
  },
  computed: {
    screen: function screen() {
      return this.screenWidth;
    }
  },
  created: function created() {
    this.slideSecSettings = JSON.parse(localStorage.getItem('slide_sec'));
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize: function handleResize() {
      this.screenWidth = window.innerWidth;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/SlideSection.vue?vue&type=template&id=1e5dcc50":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/SlideSection.vue?vue&type=template&id=1e5dcc50 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "slideSection"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_swiper_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("swiper-slide");
  var _component_swiper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("swiper");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [$options.screen > 767 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper, {
    key: 0,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
    modules: $setup.modules,
    "class": "slide h-100 mySwiper"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.slideSecSettings, function (slideSecSetting, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper_slide, {
          key: index,
          "class": "item-slide",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundImage: "url(".concat(slideSecSetting.img, ")")
          })
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nội dung của swiper-slide ")];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["style"]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modules"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper, {
    key: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
    modules: $setup.modules,
    "class": "slide h-100 mySwiper"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.slideSecSettings, function (slideSecSetting, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper_slide, {
          key: index,
          "class": "item-slide",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            backgroundImage: "url(".concat(slideSecSetting.img_small, ")")
          })
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nội dung của swiper-slide ")];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["style"]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modules"]))]);
}

/***/ }),

/***/ "./resources/js/components/home/sections/home/SlideSection.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/home/sections/home/SlideSection.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SlideSection_vue_vue_type_template_id_1e5dcc50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlideSection.vue?vue&type=template&id=1e5dcc50 */ "./resources/js/components/home/sections/home/SlideSection.vue?vue&type=template&id=1e5dcc50");
/* harmony import */ var _SlideSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlideSection.vue?vue&type=script&lang=js */ "./resources/js/components/home/sections/home/SlideSection.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SlideSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SlideSection_vue_vue_type_template_id_1e5dcc50__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/sections/home/SlideSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/sections/home/SlideSection.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/SlideSection.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SlideSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SlideSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SlideSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/SlideSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/sections/home/SlideSection.vue?vue&type=template&id=1e5dcc50":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/SlideSection.vue?vue&type=template&id=1e5dcc50 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SlideSection_vue_vue_type_template_id_1e5dcc50__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SlideSection_vue_vue_type_template_id_1e5dcc50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SlideSection.vue?vue&type=template&id=1e5dcc50 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/SlideSection.vue?vue&type=template&id=1e5dcc50");


/***/ })

}]);
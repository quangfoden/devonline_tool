"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_sections_home_NewsSectione_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app */ "./resources/js/app.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_js_router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @resources/js/router/index */ "./resources/js/router/index.js");
/* harmony import */ var swiper_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/vue */ "./node_modules/swiper/swiper-vue.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Swiper: swiper_vue__WEBPACK_IMPORTED_MODULE_3__.Swiper,
    SwiperSlide: swiper_vue__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide
  },
  setup: function setup() {
    return {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Autoplay]
    };
  },
  data: function data() {
    return {
      swiper: null,
      indexStart: 1,
      breakpointsOpts: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        415: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 70
        }
      },
      indexEnd: 0,
      data: [],
      newsSecSettings: {}
    };
  },
  created: function created() {
    this.newsSecSettings = JSON.parse(localStorage.getItem('news_sec'));
    this.fetchData();
  },
  computed: {
    lang: function lang() {
      return _app__WEBPACK_IMPORTED_MODULE_0__.i18n.global.locale;
    }
  },
  methods: _defineProperty({
    fetchData: function fetchData() {
      var _this = this;
      this.axios.get("/api/latest-posts").then(function (response) {
        if (response.data.message === "success" && response.data.status === 200) {
          _this.data = response.data.data;
        }
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this.logout();
        }
        if (error.response.status === 401) {
          _this.logout();
        }
      });
    },
    dayjs: (dayjs__WEBPACK_IMPORTED_MODULE_1___default()),
    toPostDetail: function toPostDetail(cateSlug, postSlug) {
      _resources_js_router_index__WEBPACK_IMPORTED_MODULE_2__["default"].push({
        name: "News Detail",
        params: {
          cat_slug: cateSlug,
          post_slug: postSlug
        }
      });
    },
    convertLang: function convertLang(text) {
      var _text$split$;
      return (_text$split$ = text === null || text === void 0 ? void 0 : text.split("[:".concat(this.lang, "]"))[1]) !== null && _text$split$ !== void 0 ? _text$split$ : text;
    }
  }, "convertLang", function convertLang(text) {
    var _text$split$2;
    return (_text$split$2 = text === null || text === void 0 ? void 0 : text.split("[:".concat(this.lang, "]"))[1]) !== null && _text$split$2 !== void 0 ? _text$split$2 : text;
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=template&id=09da7c77":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=template&id=09da7c77 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "newsSection"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  key: 0,
  "class": "all_tab_wrapper"
};
var _hoisted_4 = {
  "class": "static_data row"
};
var _hoisted_5 = {
  "class": "main_title ff_ss3_bold"
};
var _hoisted_6 = {
  "class": "list_box_item"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  "class": "image h-100"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "content"
};
var _hoisted_11 = {
  "class": "info"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "icon rounded-circle",
  src: "/assets/images/icons/icon-news.jpg",
  alt: ""
}, null, -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "cat_title ff_ss3_bold"
};
var _hoisted_14 = {
  "class": "open_date"
};
var _hoisted_15 = {
  "class": "title ff_ss3_bold"
};
var _hoisted_16 = {
  "class": "desc"
};
var _hoisted_17 = {
  "class": "more"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_swiper_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("swiper-slide");
  var _component_swiper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("swiper");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$data.data.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.newsSecSettings.main_title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_swiper, {
    ref: "swiperFeat",
    onSwiper: _ctx.onSwiper,
    onSlideChange: _ctx.slideChanged,
    navigation: true,
    modules: $setup.modules,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: $data.breakpointsOpts
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data, function (post, idx) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper_slide, {
          key: idx,
          "class": "item_sub box_item"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": "wrapper",
              onClick: function onClick($event) {
                return $options.toPostDetail(post.categories[0].slug, post.slug);
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              "class": "post_image w-100 h-100",
              src: post.image,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(post.categories[0].title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.dayjs(post.created_at).format('DD-MM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(post.title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(post.desc)), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_7)];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */);
      }), 128 /* KEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onSwiper", "onSlideChange", "modules", "breakpoints"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a class=\"btn btn_navigation btn_prev disabled opacity-00\" ref=\"btnPrev\" @click=\"prev()\"></a>\r\n                        <a class=\"btn btn_navigation btn_next\" ref=\"btnNext\" @click=\"next()\"></a> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "btn ff_ss3_bold",
    to: "/news"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.newsSecSettings.news_page_text)), 1 /* TEXT */)];
    }),

    _: 1 /* STABLE */
  })])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./resources/js/components/home/sections/home/NewsSectione.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/home/sections/home/NewsSectione.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewsSectione_vue_vue_type_template_id_09da7c77__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsSectione.vue?vue&type=template&id=09da7c77 */ "./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=template&id=09da7c77");
/* harmony import */ var _NewsSectione_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsSectione.vue?vue&type=script&lang=js */ "./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NewsSectione_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NewsSectione_vue_vue_type_template_id_09da7c77__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/sections/home/NewsSectione.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsSectione_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsSectione_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewsSectione.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=template&id=09da7c77":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=template&id=09da7c77 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsSectione_vue_vue_type_template_id_09da7c77__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsSectione_vue_vue_type_template_id_09da7c77__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewsSectione.vue?vue&type=template&id=09da7c77 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/NewsSectione.vue?vue&type=template&id=09da7c77");


/***/ })

}]);
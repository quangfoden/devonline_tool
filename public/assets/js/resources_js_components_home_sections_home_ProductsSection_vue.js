"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_sections_home_ProductsSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_deatailsProductModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/deatailsProductModal.vue */ "./resources/js/components/home/partials/deatailsProductModal.vue");
/* harmony import */ var swiper_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/vue */ "./node_modules/swiper/swiper-vue.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app */ "./resources/js/app.js");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Swiper: swiper_vue__WEBPACK_IMPORTED_MODULE_1__.Swiper,
    SwiperSlide: swiper_vue__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide,
    deatailsProductModal: _partials_deatailsProductModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    return {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Autoplay]
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
      listFeaturedProducts: [],
      productSecSettings: {},
      selectedProduct: null,
      isModalVisible: false
    };
  },
  created: function created() {
    this.productSecSettings = JSON.parse(localStorage.getItem('products_sec'));
    this.fetchData();
  },
  computed: {
    lang: function lang() {
      return _app__WEBPACK_IMPORTED_MODULE_3__.i18n.global.locale;
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;
      this.axios.get("/api/list-ishot").then(function (response) {
        if (response.data.message === "success" && response.data.status === 200) {
          _this.listFeaturedProducts = response.data.data;
          _this.indexEnd = Math.ceil(_this.listFeaturedProducts.length / 3);
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
    viewProductDetail: function viewProductDetail(product) {
      this.selectedProduct = product;
      this.isModalVisible = true;
    },
    closeModalDtProducts: function closeModalDtProducts() {
      this.isModalVisible = false;
    },
    convertLang: function convertLang(text) {
      var _text$split$;
      return (_text$split$ = text === null || text === void 0 ? void 0 : text.split("[:".concat(this.lang, "]"))[1]) !== null && _text$split$ !== void 0 ? _text$split$ : text;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=template&id=0225b22d":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=template&id=0225b22d ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "featuredProductsSection"
};
var _hoisted_2 = {
  "class": "container container_2"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-12"
};
var _hoisted_5 = {
  "class": "ff_ss3_bold"
};
var _hoisted_6 = {
  "class": "list-featured-products-home"
};
var _hoisted_7 = {
  "class": "ct_product"
};
var _hoisted_8 = ["src", "alt"];
var _hoisted_9 = {
  "class": "ct_product_info"
};
var _hoisted_10 = {
  "class": "ct_g_info_desc"
};
var _hoisted_11 = {
  "class": "ct_g_info_desc_name ff_ss3_bold"
};
var _hoisted_12 = {
  "class": "ct_g_info_desc_content"
};
var _hoisted_13 = ["onClick"];
var _hoisted_14 = {
  "class": "our_pride_n_joy"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_swiper_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("swiper-slide");
  var _component_swiper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("swiper");
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_deatailsProductModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("deatailsProductModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.productSecSettings.main_title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_swiper, {
    ref: "swiperFeat",
    onSwiper: _ctx.onSwiper,
    onSlideChange: _ctx.slideChanged,
    navigation: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    modules: $setup.modules,
    loop: true,
    breakpoints: $data.breakpointsOpts
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.listFeaturedProducts, function (item, idx) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper_slide, {
          key: idx
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              "class": "ct_product_img",
              src: item.bg_img,
              alt: $options.convertLang(item.name)
            }, null, 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(item.name)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang(item.des)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                return $options.viewProductDetail(item);
              }, ["prevent"]),
              "class": "ct_product_home_link ff_ss3_bold"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.productSecSettings.more_text)), 9 /* TEXT, PROPS */, _hoisted_13)])];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */);
      }), 128 /* KEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onSwiper", "onSlideChange", "modules", "breakpoints"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "btn ff_ss3_bold",
    to: "/products"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertLang($data.productSecSettings.products_page_text)), 1 /* TEXT */)];
    }),

    _: 1 /* STABLE */
  })])])])])]), $data.isModalVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_deatailsProductModal, {
    key: 0,
    onClose: $options.closeModalDtProducts,
    product: $data.selectedProduct,
    isVisible: $data.isModalVisible
  }, null, 8 /* PROPS */, ["onClose", "product", "isVisible"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/components/home/sections/home/ProductsSection.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/ProductsSection.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductsSection_vue_vue_type_template_id_0225b22d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsSection.vue?vue&type=template&id=0225b22d */ "./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=template&id=0225b22d");
/* harmony import */ var _ProductsSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsSection.vue?vue&type=script&lang=js */ "./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductsSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductsSection_vue_vue_type_template_id_0225b22d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/sections/home/ProductsSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=template&id=0225b22d":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=template&id=0225b22d ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsSection_vue_vue_type_template_id_0225b22d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsSection_vue_vue_type_template_id_0225b22d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsSection.vue?vue&type=template&id=0225b22d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/sections/home/ProductsSection.vue?vue&type=template&id=0225b22d");


/***/ })

}]);
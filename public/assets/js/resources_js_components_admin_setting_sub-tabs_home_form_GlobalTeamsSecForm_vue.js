"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_setting_sub-tabs_home_form_GlobalTeamsSecForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    formLang: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      formData: {},
      formDataRequest: {},
      formDataLang: {
        main_title: [],
        content: [{
          name: [],
          address: []
        }, {
          name: [],
          address: []
        }, {
          name: [],
          address: []
        }, {
          name: [],
          address: []
        }]
      }
    };
  },
  created: function created() {
    this.formData = this.data.data;
  },
  mounted: function mounted() {
    var _this = this;
    this.emitter.on("is-converting-response-data", function (isConvertingResponseData) {
      if (isConvertingResponseData) {
        _this.convertResponseDataLang();
      }
    });
    this.emitter.on("is-change-form-lang", function (isChangeFormLang) {
      if (isChangeFormLang) {
        _this.changeFormLangAction();
      }
    });
    this.emitter.on("is-saving-home-tab", function (isSavingHomeTab) {
      if (isSavingHomeTab) {
        _this.convertRequestDataLang();
      }
    });
  },
  computed: {},
  methods: {
    convertResponseDataLang: function convertResponseDataLang() {
      var _this2 = this;
      this.$config.languages.forEach(function (lang) {
        _this2.formDataLang.main_title[lang] = _this2.formData.main_title.split("[:".concat(lang, "]"))[1];
        _this2.formDataLang.content.forEach(function (item, idx) {
          _this2.formDataLang.content[idx].name[lang] = _this2.formData.content[idx].name.split("[:".concat(lang, "]"))[1];
          _this2.formDataLang.content[idx].address[lang] = _this2.formData.content[idx].address.split("[:".concat(lang, "]"))[1];
        });
      });
      this.changeFormLangAction();
    },
    changeFormLangAction: function changeFormLangAction() {
      var _this$formDataLang$ma,
        _this3 = this;
      this.formData.main_title = (_this$formDataLang$ma = this.formDataLang.main_title[this.formLang]) === null || _this$formDataLang$ma === void 0 ? void 0 : _this$formDataLang$ma.replaceAll("[:".concat(this.formLang, "]"), '');
      this.formData.content.forEach(function (item, idx) {
        var _this3$formDataLang$c, _this3$formDataLang$c2;
        _this3.formData.content[idx].name = (_this3$formDataLang$c = _this3.formDataLang.content[idx].name[_this3.formLang]) === null || _this3$formDataLang$c === void 0 ? void 0 : _this3$formDataLang$c.replaceAll("[:".concat(_this3.formLang, "]"), '');
        _this3.formData.content[idx].address = (_this3$formDataLang$c2 = _this3.formDataLang.content[idx].address[_this3.formLang]) === null || _this3$formDataLang$c2 === void 0 ? void 0 : _this3$formDataLang$c2.replaceAll("[:".concat(_this3.formLang, "]"), '');
      });
    },
    convertRequestDataLang: function convertRequestDataLang() {
      var _this4 = this;
      this.formDataRequest = Object.assign({}, this.formData);
      var langMainTitle = '',
        langContentName = [],
        langContentAddress = [];
      this.formDataLang.content.forEach(function (item, idx) {
        langContentName[idx] = '';
        langContentAddress[idx] = '';
      });
      this.$config.languages.forEach(function (lang) {
        langMainTitle += typeof _this4.formDataLang.main_title[lang] === 'undefined' ? "[:".concat(lang, "][:").concat(lang, "]") : !_this4.formDataLang.main_title[lang].includes("[:".concat(lang, "]")) ? "[:".concat(lang, "]").concat(_this4.formDataLang.main_title[lang], "[:").concat(lang, "]") : _this4.formDataLang.main_title[lang];
        _this4.formDataLang.content.forEach(function (item, idx) {
          langContentName[idx] += typeof _this4.formDataLang.content[idx].name[lang] === 'undefined' ? "[:".concat(lang, "][:").concat(lang, "]") : !_this4.formDataLang.content[idx].name[lang].includes("[:".concat(lang, "]")) ? "[:".concat(lang, "]").concat(_this4.formDataLang.content[idx].name[lang], "[:").concat(lang, "]") : _this4.formDataLang.content[idx].name[lang];
          langContentAddress[idx] += typeof _this4.formDataLang.content[idx].address[lang] === 'undefined' ? "[:".concat(lang, "][:").concat(lang, "]") : !_this4.formDataLang.content[idx].address[lang].includes("[:".concat(lang, "]")) ? "[:".concat(lang, "]").concat(_this4.formDataLang.content[idx].address[lang], "[:").concat(lang, "]") : _this4.formDataLang.content[idx].address[lang];
        });
      });
      this.formDataRequest.main_title = langMainTitle;
      this.formDataLang.content.forEach(function (item, idx) {
        _this4.formDataRequest.content[idx].name = langContentName[idx];
        _this4.formDataRequest.content[idx].address = langContentAddress[idx];
      });
    },
    setMainTitleForLang: function setMainTitleForLang(main_title) {
      this.formDataLang.main_title[this.formLang] = "[:".concat(this.formLang, "]").concat(main_title, "[:").concat(this.formLang, "]");
    },
    setNameItemContentForLang: function setNameItemContentForLang(idx, name) {
      this.formDataLang.content[idx].name[this.formLang] = "[:".concat(this.formLang, "]").concat(name, "[:").concat(this.formLang, "]");
    },
    setAddressItemContentForLang: function setAddressItemContentForLang(idx, address) {
      this.formDataLang.content[idx].address[this.formLang] = "[:".concat(this.formLang, "]").concat(address, "[:").concat(this.formLang, "]");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "settings_form_wrapper col-12"
};
var _hoisted_2 = {
  "class": "text-center mb-2 text-decoration-underline collapsed",
  "data-toggle": "collapse",
  "data-target": "#collapseGlobalTeamsSec",
  "aria-expanded": "false"
};
var _hoisted_3 = {
  id: "collapseGlobalTeamsSec",
  "class": "form_collapse collapse"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-4"
};
var _hoisted_6 = {
  "class": "form-group"
};
var _hoisted_7 = {
  "class": "row for_content"
};
var _hoisted_8 = {
  "class": "row"
};
var _hoisted_9 = {
  "class": "col-4"
};
var _hoisted_10 = {
  "class": "form-group"
};
var _hoisted_11 = ["onUpdate:modelValue", "onInput"];
var _hoisted_12 = {
  "class": "col-4"
};
var _hoisted_13 = {
  "class": "form-group"
};
var _hoisted_14 = ["onUpdate:modelValue", "onInput"];
var _hoisted_15 = {
  "class": "col-4"
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = ["onUpdate:modelValue"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.name) + " Settings ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Section Title: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.formLang) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.formData.main_title = $event;
    }),
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return $options.setMainTitleForLang($data.formData.main_title);
    }),
    type: "text",
    placeholder: "Nhập Section Title",
    "class": "form-control",
    required: ""
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.main_title]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.formData.content, function (item, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: idx,
      "class": "col-12"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Block " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(idx + 1) + " - Name: ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.formLang) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.formData.content[idx].name = $event;
      },
      onInput: function onInput($event) {
        return $options.setNameItemContentForLang(idx, $data.formData.content[idx].name);
      },
      type: "text",
      placeholder: "Nhập Name",
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.content[idx].name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Block " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(idx + 1) + " - Address: ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.formLang) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.formData.content[idx].address = $event;
      },
      onInput: function onInput($event) {
        return $options.setAddressItemContentForLang(idx, $data.formData.content[idx].address);
      },
      type: "text",
      placeholder: "Nhập Address",
      "class": "form-control"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.content[idx].address]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Block " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(idx + 1) + " - Phone:", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.formData.content[idx].phone = $event;
      },
      type: "text",
      placeholder: "Nhập Phone",
      "class": "form-control"
    }, null, 8 /* PROPS */, _hoisted_17), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.content[idx].phone]])])])])]);
  }), 128 /* KEYED_FRAGMENT */))])])]);
}

/***/ }),

/***/ "./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GlobalTeamsSecForm_vue_vue_type_template_id_2964b9e7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7 */ "./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7");
/* harmony import */ var _GlobalTeamsSecForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalTeamsSecForm.vue?vue&type=script&lang=js */ "./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=script&lang=js");
/* harmony import */ var C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_devonline_tool_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GlobalTeamsSecForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GlobalTeamsSecForm_vue_vue_type_template_id_2964b9e7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GlobalTeamsSecForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GlobalTeamsSecForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GlobalTeamsSecForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7 ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GlobalTeamsSecForm_vue_vue_type_template_id_2964b9e7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_28_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GlobalTeamsSecForm_vue_vue_type_template_id_2964b9e7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-28.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/setting/sub-tabs/home/form/GlobalTeamsSecForm.vue?vue&type=template&id=2964b9e7");


/***/ })

}]);
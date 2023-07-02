"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "newsdetail",
  setup(__props) {
    common_vendor.onLoad((option) => {
      console.log(option);
      console.log(option["id"]);
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/newsdetail/newsdetail.vue"]]);
wx.createPage(MiniProgramPage);

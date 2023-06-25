"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "integral",
  setup(__props) {
    common_vendor.onReady(() => {
    });
    common_vendor.onMounted(() => {
      getInfo();
    });
    function getInfo() {
      console.log(12312321);
      const query = common_vendor.index.createSelectorQuery().in(this).select(".box");
      console.log(1231231);
      console.log(query);
    }
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/integral/integral.vue"]]);
wx.createPage(MiniProgramPage);

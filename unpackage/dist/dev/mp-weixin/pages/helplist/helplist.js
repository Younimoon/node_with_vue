"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  lists();
}
const lists = () => "../../components/list/list.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "helplist",
  setup(__props) {
    function addlist() {
      common_vendor.index.navigateTo({
        url: "/pages/createlist/createlist"
      });
    }
    function myfavorite() {
      common_vendor.index.navigateTo({
        url: "/pages/myfavorite/myfavorite"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(addlist),
        b: common_vendor.o(myfavorite)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/helplist/helplist.vue"]]);
wx.createPage(MiniProgramPage);

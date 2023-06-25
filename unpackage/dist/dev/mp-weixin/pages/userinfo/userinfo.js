"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
require("../../utils/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "userinfo",
  setup(__props) {
    common_vendor.onLoad((options) => {
      console.log(options.username);
      utils_api.userInfo({ username: options.username }).then((res) => {
        console.log(res);
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/userinfo/userinfo.vue"]]);
wx.createPage(MiniProgramPage);

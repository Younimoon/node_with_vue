"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
const store_index = require("../../store/index.js");
const plugins_showToast = require("../../plugins/showToast.js");
require("../../utils/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const Info = store_index.useInfotStore();
    const userinfo = common_vendor.reactive({
      username: "admin",
      password: "000000"
    });
    async function Login() {
      utils_api.Loginuser(userinfo).then((res) => {
        if (res.code === 200) {
          common_vendor.index.showToast({
            title: res.message,
            duration: 1e3
          });
          Info.login(res.token);
          Info.savename(userinfo.username);
          plugins_showToast.showSuccess({ message: res.message });
          common_vendor.index.switchTab({
            url: "/pages/myself/myself"
          });
        } else {
          return plugins_showToast.showerror({ message: res });
        }
      }).catch((err) => {
        console.log(err);
      });
      return;
    }
    function regester() {
      common_vendor.index.navigateTo({
        url: "/pages/regester/regester"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: userinfo.username,
        b: common_vendor.o(($event) => userinfo.username = $event.detail.value),
        c: userinfo.password,
        d: common_vendor.o(($event) => userinfo.password = $event.detail.value),
        e: common_vendor.o(Login),
        f: common_vendor.o(regester)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/AA前端工作/AA毕业设计/前端/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);

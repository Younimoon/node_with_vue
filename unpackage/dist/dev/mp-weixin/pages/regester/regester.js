"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
const plugins_uuid = require("../../plugins/uuid.js");
const plugins_showToast = require("../../plugins/showToast.js");
require("../../utils/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "regester",
  setup(__props) {
    let Id = "";
    Id = plugins_uuid.uuid();
    const userinfo = common_vendor.reactive({
      username: "",
      password: "",
      phonenumber: null,
      userid: Id
    });
    function Regester() {
      if (!userinfo.username || !userinfo.password || !userinfo.phonenumber) {
        plugins_showToast.showerror(
          {
            message: "请输入所有信息"
          }
        );
      } else {
        utils_api.Regesteruser(userinfo).then((res) => {
          if (res.code !== 200) {
            return plugins_showToast.showerror(res);
          }
          const data = {
            ...res,
            image: ""
          };
          return plugins_showToast.showSuccess(data);
        }).catch((err) => {
          common_vendor.index.showToast({
            title: err
          });
        });
      }
    }
    function goback() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: userinfo.username,
        b: common_vendor.o(($event) => userinfo.username = $event.detail.value),
        c: userinfo.password,
        d: common_vendor.o(($event) => userinfo.password = $event.detail.value),
        e: userinfo.phonenumber,
        f: common_vendor.o(($event) => userinfo.phonenumber = $event.detail.value),
        g: common_vendor.o(Regester),
        h: common_vendor.o(goback)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-315daec4"], ["__file", "D:/AA前端工作/AA毕业设计/前端/pages/regester/regester.vue"]]);
wx.createPage(MiniProgramPage);

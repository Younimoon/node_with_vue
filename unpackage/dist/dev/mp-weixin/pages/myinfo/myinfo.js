"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
const plugins_showToast = require("../../plugins/showToast.js");
require("../../utils/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "myinfo",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    const username = common_vendor.ref("");
    username.value = common_vendor.index.getStorageSync("name");
    let User = common_vendor.reactive({
      username: username.value
    });
    const changeInput = common_vendor.ref("disabled");
    let userinfo = common_vendor.reactive({
      username: username.value ? username.value : null,
      phonenumber: "不存在请登录",
      userid: "不存在请登录"
    });
    fun();
    async function fun() {
      utils_api.userInfo(User).then((res) => {
        Object.keys(res[0]).forEach((item) => {
          if (userinfo[item]) {
            userinfo[item] = res[0][item];
          }
        });
        instance.proxy.$forceUpdate();
      });
    }
    function changeinfo() {
      changeInput.value = "";
    }
    async function confirminfo() {
      const res = await utils_api.updateUser(userinfo);
      if (res.code === 200) {
        changeInput.value = "disabled";
        return plugins_showToast.showSuccess({ message: res.message });
      }
      return plugins_showToast.showerror({ message: res.message });
    }
    function changename(e) {
      userinfo.username = e.detail.value;
    }
    function changenumber(e) {
      userinfo.phonenumber = e.detail.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userinfo).username,
        b: changeInput.value,
        c: common_vendor.o(changename),
        d: common_vendor.unref(userinfo).phonenumber,
        e: changeInput.value,
        f: common_vendor.o(changenumber),
        g: common_vendor.unref(userinfo).userid,
        h: common_vendor.o(changeinfo),
        i: common_vendor.o(confirminfo)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/myinfo/myinfo.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const utils_api = require("../../utils/api.js");
const plugins_showToast = require("../../plugins/showToast.js");
require("../../utils/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "myself",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    store_index.useInfotStore();
    const Istoken = common_vendor.ref(false);
    common_vendor.ref("");
    let userinfo = common_vendor.reactive({
      username: "",
      userpic: "",
      id: ""
    });
    const info = common_vendor.reactive([
      {
        name: "订单详情",
        img: "../../static/order.png"
      },
      {
        name: "用户积分",
        img: "../../static/integration.png"
      },
      {
        name: "个人中心",
        img: "../../static/myinfo.png"
      },
      {
        name: "反馈中心",
        img: "../../static/callback_center.png"
      }
    ]);
    common_vendor.onShow(() => {
      showinfo();
      getinfo();
    });
    function showinfo() {
      if (common_vendor.index.getStorageSync("user") !== "") {
        userinfo.username = common_vendor.index.getStorageSync("name");
        getinfo();
        Istoken.value = true;
      } else {
        Istoken.value = false;
      }
    }
    function Tologin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
    function getinfo() {
      utils_api.userInfo({ username: userinfo.username }).then((res) => {
        userinfo.userpic = res[0].userpic;
        instance.proxy.$forceUpdate();
        Object.keys(res[0]).forEach((item) => {
          userinfo[item] = res[0][item];
        });
      });
    }
    function Toinfo(index) {
      if (index === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/orders/orders"
        });
      }
      if (index === 1) {
        common_vendor.index.navigateTo({
          url: "/pages/integral/integral"
        });
      }
      if (index === 2) {
        common_vendor.index.navigateTo({
          url: "/pages/myinfo/myinfo"
        });
      }
      if (index === 3) {
        common_vendor.index.navigateTo({
          url: "/pages/feedback/feedback"
        });
      }
    }
    let avatar = common_vendor.ref("");
    const infoimg = common_vendor.ref("");
    function changeavatar() {
      common_vendor.index.chooseImage({
        // 选择图片
        count: 1,
        success: (res) => {
          avatar.value = res.tempFilePaths[0];
          infoimg.value = avatar.value;
          console.log(infoimg);
          utils_api.updateInfo({
            userpic: avatar.value,
            username: userinfo.username
          }).then((res2) => {
            getinfo();
            if (res2.code === 200) {
              return plugins_showToast.showSuccess({ message: res2.message });
            }
            return plugins_showToast.showerror({ message: res2.message });
          });
        }
      });
    }
    function gooutinfo() {
      common_vendor.index.showModal({
        title: "提示",
        content: "您确定要退出吗",
        confirmColor: "red",
        //点击确定成功回调
        success(res) {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("user");
            common_vendor.index.removeStorageSync("name");
            showinfo();
          } else {
            return;
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: Istoken.value
      }, Istoken.value ? {
        b: common_vendor.unref(userinfo).userpic,
        c: common_vendor.o(changeavatar),
        d: common_vendor.t(common_vendor.unref(userinfo).username),
        e: common_vendor.t(common_vendor.unref(userinfo).id)
      } : {}, {
        f: !Istoken.value
      }, !Istoken.value ? {
        g: common_vendor.o(Tologin)
      } : {}, {
        h: common_vendor.f(info, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => Toinfo(index), index),
            d: index
          };
        }),
        i: Istoken.value
      }, Istoken.value ? {
        j: common_vendor.o(
          //@ts-ignore
          (...args) => gooutinfo && gooutinfo(...args)
        )
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/myself/myself.vue"]]);
wx.createPage(MiniProgramPage);

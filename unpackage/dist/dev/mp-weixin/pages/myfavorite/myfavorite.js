"use strict";
const common_vendor = require("../../common/vendor.js");
const plugins_showToast = require("../../plugins/showToast.js");
const utils_api = require("../../utils/api.js");
require("../../utils/index.js");
if (!Array) {
  const _easycom_u_album2 = common_vendor.resolveComponent("u-album");
  const _easycom_u_alert2 = common_vendor.resolveComponent("u-alert");
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_album2 + _easycom_u_alert2 + _easycom_u__textarea2 + _easycom_u_button2 + _easycom_u_popup2)();
}
const _easycom_u_album = () => "../../uni_modules/uview-plus/components/u-album/u-album.js";
const _easycom_u_alert = () => "../../uni_modules/uview-plus/components/u-alert/u-alert.js";
const _easycom_u__textarea = () => "../../uni_modules/uview-plus/components/u--textarea/u--textarea.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_album + _easycom_u_alert + _easycom_u__textarea + _easycom_u_button + _easycom_u_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "myfavorite",
  setup(__props) {
    const show = common_vendor.ref(false);
    const isshow = common_vendor.ref(false);
    const msginfo = common_vendor.reactive({
      title: "恭喜",
      dec: "评论成功",
      type: "success"
    });
    let appraise = common_vendor.reactive({
      helpid: null,
      username: common_vendor.index.getStorageSync("name") || null,
      content: ""
    });
    const popupData = common_vendor.reactive({
      overlay: true,
      mode: "bottom",
      borderRadius: "",
      closeable: true,
      closeOnClickOverlay: true,
      round: 10
    });
    let appraiseindex = common_vendor.ref(null);
    const allappraise = common_vendor.ref([]);
    const myfavoritelist = common_vendor.ref([]);
    common_vendor.onShow(() => {
      getmyFavorite_appraise();
    });
    async function getmyFavorite_appraise() {
      const res = await utils_api.getallappraise();
      const data = await utils_api.getMyfavorite(common_vendor.index.getStorageSync("name"));
      myfavoritelist.value = data;
      myfavoritelist.value.forEach((item) => {
        if (item.imgs) {
          const image = item.imgs.split(",");
          item.imgs = image;
        }
      });
      allappraise.value = res;
      myfavoritelist.value.forEach((item) => {
        item.Appraise = [];
        allappraise.value.forEach((i) => {
          if (i.helpid === item.helpid && item.Appraise.length !== 2) {
            item.Appraise.push(i);
          }
        });
      });
    }
    function creAppraise(index) {
      appraiseindex.value = index;
      show.value = true;
    }
    function close() {
      show.value = false;
      appraiseindex.value = null;
    }
    function confirmappraise() {
      appraise.helpid = myfavoritelist.value[appraiseindex.value].helpid;
      if (appraise.content.trim() === "")
        return;
      utils_api.addAppraise(appraise).then((res) => {
      });
      getmyFavorite_appraise();
      plugins_showToast.showmsg(msginfo, isshow);
      appraise.helpid = null;
      appraise.content = "";
      appraiseindex.value = null;
      show.value = false;
      return;
    }
    function toappraise(index) {
      common_vendor.index.reLaunch({
        url: `/pages/appraise/appraise?helpid=${myfavoritelist.value[index].helpid}`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(myfavoritelist.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.userpic,
            b: common_vendor.t(item.username),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.content),
            e: item.imgs
          }, item.imgs ? {
            f: "7ddfdb63-0-" + i0,
            g: common_vendor.p({
              urls: item.imgs,
              keyName: "src2"
            })
          } : {}, {
            h: common_vendor.f(item.Appraise, (i, index2, i1) => {
              return {
                a: common_vendor.t(i.appraise_username),
                b: common_vendor.t(i.content),
                c: index2
              };
            }),
            i: item.Appraise.length >= 2
          }, item.Appraise.length >= 2 ? {
            j: common_vendor.o(($event) => toappraise(index), item.helpid)
          } : {}, {
            k: item.Appraise,
            l: common_vendor.o(($event) => creAppraise(index), item.helpid),
            m: "7ddfdb63-1-" + i0,
            n: item.helpid
          });
        }),
        b: common_vendor.p({
          title: msginfo.title,
          type: msginfo.type,
          description: msginfo.dec,
          ["show-icon"]: true
        }),
        c: isshow.value ? 1 : "",
        d: !isshow.value ? 1 : "",
        e: common_vendor.o(($event) => common_vendor.unref(appraise).content = $event),
        f: common_vendor.p({
          placeholder: "请输入内容",
          autoHeight: true,
          modelValue: common_vendor.unref(appraise).content
        }),
        g: common_vendor.o(confirmappraise),
        h: common_vendor.p({
          type: "primary",
          plain: true,
          text: "确定"
        }),
        i: common_vendor.o(close),
        j: common_vendor.p({
          safeAreaInsetTop: true,
          mode: popupData.mode,
          show: show.value,
          round: popupData.round,
          overlay: popupData.overlay,
          borderRadius: popupData.borderRadius,
          closeable: popupData.closeable,
          closeOnClickOverlay: popupData.closeOnClickOverlay
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/myfavorite/myfavorite.vue"]]);
wx.createPage(MiniProgramPage);

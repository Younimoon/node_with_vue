"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
const plugins_showToast = require("../../plugins/showToast.js");
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
  __name: "appraise",
  setup(__props) {
    const lists = common_vendor.ref([]);
    const onlylist = common_vendor.ref([]);
    const allparaise = common_vendor.ref([]);
    const show = common_vendor.ref(false);
    const msginfo = common_vendor.reactive({
      title: "恭喜",
      dec: "评论成功",
      type: "success"
    });
    const isshow = common_vendor.ref(false);
    let appraiseindex = common_vendor.ref(null);
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
    common_vendor.onLoad(async (options) => {
      lists.value = await utils_api.getHelp();
      lists.value.forEach((item) => {
        if (item.imgs) {
          const image = item.imgs.split(",");
          item.imgs = image;
        }
        if (item.helpid === options.helpid) {
          onlylist.value = item;
        }
      });
      getappraise();
    });
    async function getappraise() {
      onlylist.value.Appraise = [];
      allparaise.value = await utils_api.getallappraise();
      allparaise.value.forEach((item) => {
        if (item.helpid === onlylist.value.helpid) {
          onlylist.value.Appraise.push(item);
        }
      });
      console.log(onlylist.value);
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
      appraise.helpid = onlylist.value.helpid;
      if (appraise.content.trim() === "")
        return;
      utils_api.addAppraise(appraise).then((res) => {
        if (res.code !== 200) {
          return console.log(1);
        }
      });
      getappraise();
      plugins_showToast.showmsg(msginfo, isshow);
      appraise.helpid = null;
      appraise.content = "";
      appraiseindex.value = null;
      show.value = false;
      return;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: onlylist.value.userpic,
        b: common_vendor.t(onlylist.value.username),
        c: common_vendor.t(onlylist.value.title),
        d: common_vendor.t(onlylist.value.favorite),
        e: common_vendor.o(($event) => _ctx.like(_ctx.index)),
        f: onlylist.value.src,
        g: common_vendor.t(onlylist.value.content),
        h: onlylist.value.imgs
      }, onlylist.value.imgs ? {
        i: common_vendor.p({
          urls: onlylist.value.imgs,
          keyName: "src2"
        })
      } : {}, {
        j: common_vendor.f(onlylist.value.Appraise, (i, index, i0) => {
          return {
            a: common_vendor.t(i.appraise_username),
            b: common_vendor.t(i.content),
            c: index
          };
        }),
        k: onlylist.value.Appraise,
        l: common_vendor.o(($event) => creAppraise(_ctx.index)),
        m: common_vendor.p({
          title: msginfo.title,
          type: msginfo.type,
          description: msginfo.dec,
          ["show-icon"]: true
        }),
        n: isshow.value ? 1 : "",
        o: !isshow.value ? 1 : "",
        p: common_vendor.o(($event) => common_vendor.unref(appraise).content = $event),
        q: common_vendor.p({
          placeholder: "请输入内容",
          autoHeight: true,
          modelValue: common_vendor.unref(appraise).content
        }),
        r: common_vendor.o(confirmappraise),
        s: common_vendor.p({
          type: "primary",
          plain: true,
          text: "确定"
        }),
        t: common_vendor.o(close),
        v: common_vendor.p({
          safeAreaInsetTop: true,
          mode: popupData.mode,
          show: show.value,
          round: popupData.round,
          overlay: popupData.overlay,
          borderRadius: popupData.borderRadius,
          closeable: popupData.closeable,
          closeOnClickOverlay: popupData.closeOnClickOverlay
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/appraise/appraise.vue"]]);
wx.createPage(MiniProgramPage);

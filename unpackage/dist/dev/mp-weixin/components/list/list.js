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
  __name: "list",
  setup(__props) {
    let lists = common_vendor.ref([]);
    common_vendor.ref("../../static/good-noactive.png");
    const myfavoritelist = common_vendor.ref([]);
    const show = common_vendor.ref(false);
    const msginfo = common_vendor.reactive({
      title: "恭喜",
      dec: "评论成功",
      type: "success"
    });
    const isshow = common_vendor.ref(false);
    let appraiseindex = common_vendor.ref(null);
    let allappraise = common_vendor.ref({});
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
    common_vendor.onShow(() => {
      appraise.username = common_vendor.index.getStorageSync("name");
      getlists();
      getAllappraise();
    });
    async function getlists() {
      const res = await utils_api.getHelp();
      res.forEach((item) => {
        if (item.imgs) {
          const image2 = item.imgs.split(",");
          item.imgs = image2;
        }
      });
      lists.value = res;
      console.log(lists);
    }
    async function getAllappraise() {
      const res = await utils_api.getallappraise();
      const data = await utils_api.getMyfavorite(common_vendor.index.getStorageSync("name"));
      myfavoritelist.value = data;
      allappraise.value = res;
      lists.value.forEach((item) => {
        item.src = "../../static/good-noactive.png";
        item.Appraise = [];
        allappraise.value.forEach((i) => {
          if (i.helpid === item.helpid && item.Appraise.length !== 2) {
            item.Appraise.push(i);
          }
        });
        myfavoritelist.value.forEach((i) => {
          if (i.helpid === item.helpid) {
            item.src = "../../static/good-active.png";
          }
        });
      });
    }
    function toappraise(i) {
      common_vendor.index.reLaunch({
        url: `/pages/appraise/appraise?helpid=${lists.value[i].helpid}`
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
      appraise.helpid = lists.value[appraiseindex.value].helpid;
      if (appraise.content.trim() === "")
        return;
      utils_api.addAppraise(appraise).then((res) => {
        if (res.code !== 200) {
          return console.log(1);
        }
      });
      getAllappraise();
      plugins_showToast.showmsg(msginfo, isshow);
      appraise.helpid = null;
      appraise.content = "";
      appraiseindex.value = null;
      show.value = false;
      return;
    }
    function like(index) {
      if (lists.value[index].src === "../../static/good-active.png")
        return;
      lists.value[index].favorite = Number(lists.value[index].favorite) + 1;
      utils_api.updateSblike({ favorite: lists.value[index].favorite, helpid: lists.value[index].helpid }).then((res) => {
      });
      utils_api.insertFavorite({
        helpid: lists.value[index].helpid,
        username: common_vendor.index.getStorageSync("name")
      }).then((res) => {
        console.log(res);
      });
      lists.value[index].src = "../../static/good-active.png";
    }
    function myinfo(name) {
      common_vendor.index.navigateTo({
        url: `/pages/userinfo/userinfo?username=${name}`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(lists), (item, index, i0) => {
          return common_vendor.e({
            a: item.userpic,
            b: common_vendor.o(($event) => myinfo(item.username), item.helpid),
            c: common_vendor.t(item.username),
            d: common_vendor.t(item.title),
            e: common_vendor.t(item.favorite),
            f: common_vendor.o(($event) => like(index), item.helpid),
            g: item.src,
            h: common_vendor.t(item.content),
            i: item.imgs
          }, item.imgs ? {
            j: "60143272-0-" + i0,
            k: common_vendor.p({
              urls: item.imgs,
              keyName: "src2"
            })
          } : {}, {
            l: common_vendor.f(item.Appraise, (i, index2, i1) => {
              return {
                a: common_vendor.t(i.appraise_username),
                b: common_vendor.t(i.content),
                c: index2
              };
            }),
            m: item.Appraise.length === 2
          }, item.Appraise.length === 2 ? {
            n: common_vendor.o(($event) => toappraise(index), item.helpid)
          } : {}, {
            o: item.Appraise,
            p: common_vendor.o(($event) => creAppraise(index), item.helpid),
            q: "60143272-1-" + i0,
            r: item.helpid
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/components/list/list.vue"]]);
wx.createComponent(Component);

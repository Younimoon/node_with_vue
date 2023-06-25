"use strict";
const uni_modules_uviewPlus_components_uAlert_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/config/props.js");
require("../../libs/config/config.js");
require("../../libs/config/props/actionSheet.js");
require("../../libs/config/props/album.js");
require("../../libs/config/props/alert.js");
require("../../libs/config/props/avatar.js");
require("../../libs/config/props/avatarGroup.js");
require("../../libs/config/props/backtop.js");
require("../../libs/config/props/badge.js");
require("../../libs/config/props/button.js");
require("../../libs/config/props/calendar.js");
require("../../libs/config/props/carKeyboard.js");
require("../../libs/config/props/cell.js");
require("../../libs/config/props/cellGroup.js");
require("../../libs/config/props/checkbox.js");
require("../../libs/config/props/checkboxGroup.js");
require("../../libs/config/props/circleProgress.js");
require("../../libs/config/props/code.js");
require("../../libs/config/props/codeInput.js");
require("../../libs/config/props/col.js");
require("../../libs/config/props/collapse.js");
require("../../libs/config/props/collapseItem.js");
require("../../libs/config/props/columnNotice.js");
require("../../libs/config/props/countDown.js");
require("../../libs/config/props/countTo.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/divider.js");
require("../../libs/config/props/empty.js");
require("../../libs/config/props/form.js");
require("../../libs/config/props/formItem.js");
require("../../libs/config/props/gap.js");
require("../../libs/config/props/grid.js");
require("../../libs/config/props/gridItem.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/image.js");
require("../../libs/config/props/indexAnchor.js");
require("../../libs/config/props/indexList.js");
require("../../libs/config/props/input.js");
require("../../libs/config/props/keyboard.js");
require("../../libs/config/props/line.js");
require("../../libs/config/props/lineProgress.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/list.js");
require("../../libs/config/props/listItem.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/loadingPage.js");
require("../../libs/config/props/loadmore.js");
require("../../libs/config/props/modal.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
require("../../libs/config/props/noNetwork.js");
require("../../libs/config/props/noticeBar.js");
require("../../libs/config/props/notify.js");
require("../../libs/config/props/numberBox.js");
require("../../libs/config/props/numberKeyboard.js");
require("../../libs/config/props/overlay.js");
require("../../libs/config/props/parse.js");
require("../../libs/config/props/picker.js");
require("../../libs/config/props/popup.js");
require("../../libs/config/props/radio.js");
require("../../libs/config/props/radioGroup.js");
require("../../libs/config/props/rate.js");
require("../../libs/config/props/readMore.js");
require("../../libs/config/props/row.js");
require("../../libs/config/props/rowNotice.js");
require("../../libs/config/props/scrollList.js");
require("../../libs/config/props/search.js");
require("../../libs/config/props/section.js");
require("../../libs/config/props/skeleton.js");
require("../../libs/config/props/slider.js");
require("../../libs/config/props/statusBar.js");
require("../../libs/config/props/steps.js");
require("../../libs/config/props/stepsItem.js");
require("../../libs/config/props/sticky.js");
require("../../libs/config/props/subsection.js");
require("../../libs/config/props/swipeAction.js");
require("../../libs/config/props/swipeActionItem.js");
require("../../libs/config/props/swiper.js");
require("../../libs/config/props/swipterIndicator.js");
require("../../libs/config/props/switch.js");
require("../../libs/config/props/tabbar.js");
require("../../libs/config/props/tabbarItem.js");
require("../../libs/config/props/tabs.js");
require("../../libs/config/props/tag.js");
require("../../libs/config/props/text.js");
require("../../libs/config/props/textarea.js");
require("../../libs/config/props/toast.js");
require("../../libs/config/props/toolbar.js");
require("../../libs/config/props/tooltip.js");
require("../../libs/config/props/transition.js");
require("../../libs/config/props/upload.js");
require("../../libs/config/props/drawer.js");
const _sfc_main = {
  name: "u-alert",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uAlert_props.props],
  data() {
    return {
      show: true
    };
  },
  computed: {
    iconColor() {
      return this.effect === "light" ? this.type : "#fff";
    },
    // 不同主题对应不同的图标
    iconName() {
      switch (this.type) {
        case "success":
          return "checkmark-circle-fill";
        case "error":
          return "close-circle-fill";
        case "warning":
          return "error-circle-fill";
        case "info":
          return "info-circle-fill";
        case "primary":
          return "more-circle-fill";
        default:
          return "error-circle-fill";
      }
    }
  },
  methods: {
    // 点击内容
    clickHandler() {
      this.$emit("click");
    },
    // 点击关闭按钮
    closeHandler() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_icon2 + _easycom_u_transition2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.showIcon
  }, _ctx.showIcon ? {
    b: common_vendor.p({
      name: $options.iconName,
      size: "18",
      color: $options.iconColor
    })
  } : {}, {
    c: _ctx.title
  }, _ctx.title ? {
    d: common_vendor.t(_ctx.title),
    e: common_vendor.s({
      fontSize: _ctx.$u.addUnit(_ctx.fontSize),
      textAlign: _ctx.center ? "center" : "left"
    }),
    f: common_vendor.n(_ctx.effect === "dark" ? "u-alert__text--dark" : `u-alert__text--${_ctx.type}--light`)
  } : {}, {
    g: _ctx.description
  }, _ctx.description ? {
    h: common_vendor.t(_ctx.description),
    i: common_vendor.s({
      fontSize: _ctx.$u.addUnit(_ctx.fontSize),
      textAlign: _ctx.center ? "center" : "left"
    }),
    j: common_vendor.n(_ctx.effect === "dark" ? "u-alert__text--dark" : `u-alert__text--${_ctx.type}--light`)
  } : {}, {
    k: common_vendor.s({
      paddingRight: _ctx.closable ? "20px" : 0
    }),
    l: _ctx.closable
  }, _ctx.closable ? {
    m: common_vendor.p({
      name: "close",
      color: $options.iconColor,
      size: "15"
    }),
    n: common_vendor.o((...args) => $options.closeHandler && $options.closeHandler(...args))
  } : {}, {
    o: common_vendor.n(`u-alert--${_ctx.type}--${_ctx.effect}`),
    p: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    q: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle)),
    r: common_vendor.p({
      mode: "fade",
      show: $data.show
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-158e540a"], ["__file", "D:/AA前端工作/AA毕业设计/前端/uni_modules/uview-plus/components/u-alert/u-alert.vue"]]);
wx.createComponent(Component);

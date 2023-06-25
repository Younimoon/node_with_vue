"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uAlbum_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
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
  name: "u-album",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uAlbum_props.props],
  data() {
    return {
      // 单图的宽度
      singleWidth: 0,
      // 单图的高度
      singleHeight: 0,
      // 单图时，如果无法获取图片的尺寸信息，让图片宽度默认为容器的一定百分比
      singlePercent: 0.6
    };
  },
  watch: {
    urls: {
      immediate: true,
      handler(newVal) {
        if (newVal.length === 1) {
          this.getImageRect();
        }
      }
    }
  },
  computed: {
    imageStyle() {
      return (index1, index2) => {
        const { space, rowCount, multipleSize, urls } = this, { addUnit, addStyle } = common_vendor.index.$u, rowLen = this.showUrls.length;
        this.urls.length;
        const style = {
          marginRight: addUnit(space),
          marginBottom: addUnit(space)
        };
        if (index1 === rowLen)
          style.marginBottom = 0;
        if (index2 === rowCount || index1 === rowLen && index2 === this.showUrls[index1 - 1].length)
          style.marginRight = 0;
        return style;
      };
    },
    // 将数组划分为二维数组
    showUrls() {
      const arr = [];
      this.urls.map((item, index) => {
        if (index + 1 <= this.maxCount) {
          const itemIndex = Math.floor(index / this.rowCount);
          if (!arr[itemIndex]) {
            arr[itemIndex] = [];
          }
          arr[itemIndex].push(item);
        }
      });
      return arr;
    },
    imageWidth() {
      return common_vendor.index.$u.addUnit(
        this.urls.length === 1 ? this.singleWidth : this.multipleSize
      );
    },
    imageHeight() {
      return common_vendor.index.$u.addUnit(
        this.urls.length === 1 ? this.singleHeight : this.multipleSize
      );
    },
    // 此变量无实际用途，仅仅是为了利用computed特性，让其在urls长度等变化时，重新计算图片的宽度
    // 因为用户在某些特殊的情况下，需要让文字与相册的宽度相等，所以这里事件的形式对外发送
    albumWidth() {
      let width = 0;
      if (this.urls.length === 1) {
        width = this.singleWidth;
      } else {
        width = this.showUrls[0].length * this.multipleSize + this.space * (this.showUrls[0].length - 1);
      }
      this.$emit("albumWidth", width);
      return width;
    }
  },
  methods: {
    // 预览图片
    onPreviewTap(url) {
      const urls = this.urls.map((item) => {
        return this.getSrc(item);
      });
      common_vendor.index.previewImage({
        current: url,
        urls
      });
    },
    // 获取图片的路径
    getSrc(item) {
      return common_vendor.index.$u.test.object(item) ? this.keyName && item[this.keyName] || item.src : item;
    },
    // 单图时，获取图片的尺寸
    // 在小程序中，需要将网络图片的的域名添加到小程序的download域名才可能获取尺寸
    // 在没有添加的情况下，让单图宽度默认为盒子的一定宽度(singlePercent)
    getImageRect() {
      const src = this.getSrc(this.urls[0]);
      common_vendor.index.getImageInfo({
        src,
        success: (res) => {
          const isHorizotal = res.width >= res.height;
          this.singleWidth = isHorizotal ? this.singleSize : res.width / res.height * this.singleSize;
          this.singleHeight = !isHorizotal ? this.singleSize : res.height / res.width * this.singleWidth;
        },
        fail: () => {
          this.getComponentWidth();
        }
      });
    },
    // 获取组件的宽度
    async getComponentWidth() {
      await common_vendor.index.$u.sleep(30);
      this.$uGetRect(".u-album__row").then((size) => {
        this.singleWidth = size.width * this.singlePercent;
      });
    }
  }
};
if (!Array) {
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  _easycom_u__text2();
}
const _easycom_u__text = () => "../u--text/u--text.js";
if (!Math) {
  _easycom_u__text();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.showUrls, (arr, index, i0) => {
      return {
        a: common_vendor.f(arr, (item, index1, i1) => {
          return common_vendor.e({
            a: $options.getSrc(item),
            b: _ctx.showMore && _ctx.urls.length > _ctx.rowCount * $options.showUrls.length && index === $options.showUrls.length - 1 && index1 === $options.showUrls[$options.showUrls.length - 1].length - 1
          }, _ctx.showMore && _ctx.urls.length > _ctx.rowCount * $options.showUrls.length && index === $options.showUrls.length - 1 && index1 === $options.showUrls[$options.showUrls.length - 1].length - 1 ? {
            c: "96d28356-0-" + i0 + "-" + i1,
            d: common_vendor.p({
              text: `+${_ctx.urls.length - _ctx.maxCount}`,
              color: "#fff",
              size: _ctx.multipleSize * 0.3,
              align: "center",
              customStyle: "justify-content: center"
            })
          } : {}, {
            e: index1,
            f: common_vendor.s($options.imageStyle(index + 1, index1 + 1)),
            g: common_vendor.o(($event) => _ctx.previewFullImage ? $options.onPreviewTap($options.getSrc(item)) : "", index1)
          });
        }),
        b: index
      };
    }),
    b: _ctx.urls.length === 1 ? $options.imageHeight > 0 ? _ctx.singleMode : "widthFix" : _ctx.multipleMode,
    c: common_vendor.s({
      width: $options.imageWidth,
      height: $options.imageHeight
    }),
    d: $options.albumWidth
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-96d28356"], ["__file", "D:/AA前端工作/AA毕业设计/前端/uni_modules/uview-plus/components/u-album/u-album.vue"]]);
wx.createComponent(Component);

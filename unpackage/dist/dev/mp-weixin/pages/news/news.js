"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "news",
  setup(__props) {
    const newslist = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ];
    function toDetail(index) {
      console.log(123);
      common_vendor.index.navigateTo({
        // url:'/pages//newsdetail/newsdetail'
        url: `/pages/newsdetail/newsdetail?id= ${index}`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(newslist, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.o(($event) => toDetail(index))
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/news/news.vue"]]);
wx.createPage(MiniProgramPage);

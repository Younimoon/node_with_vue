"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
require("../../utils/index.js");
if (!Array) {
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  const _easycom_u_alert2 = common_vendor.resolveComponent("u-alert");
  (_easycom_u__input2 + _easycom_u_form_item2 + _easycom_u__textarea2 + _easycom_u__form2 + _easycom_u_upload2 + _easycom_u_button2 + _easycom_u_action_sheet2 + _easycom_u_alert2)();
}
const _easycom_u__input = () => "../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u__textarea = () => "../../uni_modules/uview-plus/components/u--textarea/u--textarea.js";
const _easycom_u__form = () => "../../uni_modules/uview-plus/components/u--form/u--form.js";
const _easycom_u_upload = () => "../../uni_modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_action_sheet = () => "../../uni_modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
const _easycom_u_alert = () => "../../uni_modules/uview-plus/components/u-alert/u-alert.js";
if (!Math) {
  (_easycom_u__input + _easycom_u_form_item + _easycom_u__textarea + _easycom_u__form + _easycom_u_upload + _easycom_u_button + _easycom_u_action_sheet + _easycom_u_alert)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "createlist",
  setup(__props) {
    const showtype = common_vendor.ref(false);
    const msginfo = common_vendor.reactive({
      title: "",
      dec: "",
      type: ""
    });
    const helpform = common_vendor.reactive({
      type: "",
      money: null,
      content: "",
      fileList: [],
      fileList1: [],
      username: null
    });
    const isshow = common_vendor.ref(false);
    const actions = common_vendor.reactive([
      {
        name: "求助"
      },
      {
        name: "吐槽"
      },
      {
        name: "交友"
      },
      {
        name: "求搭子"
      }
    ]);
    function typeSelect(e) {
      helpform.type = e.name;
      console.log(e.name);
    }
    function deletePic(event) {
      helpform.fileList.splice(event.index, 1);
    }
    async function afterRead(event) {
      let lists = [].concat(event.file);
      let fileListLen = helpform.fileList.length;
      lists.map((item) => {
        helpform.fileList.unshift({
          ...item,
          status: "success",
          message: ""
        });
      });
      for (let i = 0; i < lists.length; i++) {
        let item = helpform.fileList[fileListLen];
        helpform.fileList.splice(fileListLen, 1, Object.assign(item, {
          status: "success",
          message: ""
        }));
        fileListLen++;
      }
    }
    async function submit() {
      if (common_vendor.index.getStorageSync("name")) {
        helpform.username = common_vendor.index.getStorageSync("name");
        if (helpform.type === "" || helpform.content.trim() === "") {
          msginfo.dec = "请填写最基本的类别和内容";
          msginfo.title = "提示";
          msginfo.type = "warning";
          isshow.value = true;
          return setTimeout(() => {
            isshow.value = false;
          }, 2990);
        }
        if (helpform.money) {
          if (!/^(0){1}(.){1}[0-9]+$/.test(helpform.money) && !/^[1-9].?[0-9]*$/.test(helpform.money)) {
            msginfo.dec = "请输入正确价格";
            msginfo.title = "提示";
            msginfo.type = "warning";
            isshow.value = true;
            return setTimeout(() => {
              isshow.value = false;
            }, 2990);
          }
        }
        helpform.fileList.forEach((item) => {
          helpform.fileList1.push(item.url);
        });
        const res = await utils_api.addHelp(helpform);
        if (res.code === 200) {
          msginfo.dec = res.message;
          msginfo.title = "提示";
          msginfo.type = "success";
          isshow.value = true;
          helpform.type = helpform.content = "", helpform.money = helpform.username = null, helpform.fileList = helpform.fileList1 = [];
          return setTimeout(() => {
            isshow.value = false;
          }, 2990);
        } else {
          msginfo.dec = res.message;
          msginfo.title = "提示";
          msginfo.type = "error";
          isshow.value = true;
          return setTimeout(() => {
            isshow.value = false;
          }, 2990);
        }
      } else {
        msginfo.dec = "请先进行登录";
        msginfo.title = "提示";
        msginfo.type = "warning";
        isshow.value = true;
        return setTimeout(() => {
          isshow.value = false;
        }, 2990);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => helpform.type = $event),
        b: common_vendor.p({
          disabled: true,
          disabledColor: "#ffffff",
          placeholder: "请选择类别",
          border: "none",
          modelValue: helpform.type
        }),
        c: common_vendor.sr("item1", "dc7117ba-1,dc7117ba-0"),
        d: common_vendor.o(($event) => showtype.value = true),
        e: common_vendor.p({
          label: "请求类别:",
          prop: "userInfo.sex",
          borderBottom: true
        }),
        f: common_vendor.o(($event) => helpform.money = $event),
        g: common_vendor.p({
          disabledColor: "#ffffff",
          placeholder: "请合理支付",
          border: "none",
          modelValue: helpform.money
        }),
        h: common_vendor.sr("item1", "dc7117ba-3,dc7117ba-0"),
        i: common_vendor.p({
          label: "金额:",
          prop: "userInfo.sex",
          borderBottom: true
        }),
        j: common_vendor.sr("item1", "dc7117ba-5,dc7117ba-0"),
        k: common_vendor.p({
          label: "帮助内容:",
          prop: "userInfo.sex"
        }),
        l: common_vendor.o(($event) => helpform.content = $event),
        m: common_vendor.p({
          placeholder: "请输入内容",
          autoHeight: true,
          modelValue: helpform.content
        }),
        n: common_vendor.sr("form1", "dc7117ba-0"),
        o: common_vendor.p({
          labelPosition: "left"
        }),
        p: common_vendor.o(afterRead),
        q: common_vendor.o(deletePic),
        r: common_vendor.p({
          fileList: helpform.fileList,
          previewFullImage: true,
          name: "1",
          multiple: true,
          maxCount: 10
        }),
        s: common_vendor.o(submit),
        t: common_vendor.p({
          type: "primary",
          text: "提交",
          disabled: isshow.value
        }),
        v: common_vendor.o(($event) => showtype.value = false),
        w: common_vendor.o(typeSelect),
        x: common_vendor.p({
          show: showtype.value,
          actions,
          title: "请选择分类"
        }),
        y: common_vendor.p({
          title: msginfo.title,
          type: msginfo.type,
          description: msginfo.dec,
          ["show-icon"]: true
        }),
        z: isshow.value ? 1 : "",
        A: !isshow.value ? 1 : ""
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AA前端工作/AA毕业设计/前端/pages/createlist/createlist.vue"]]);
wx.createPage(MiniProgramPage);

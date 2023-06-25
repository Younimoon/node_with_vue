"use strict";
const common_vendor = require("../common/vendor.js");
function showerror({ message, image = "/static/error.png" }) {
  common_vendor.index.showToast({
    title: message,
    icon: "none",
    image
  });
}
function showSuccess({ message, image = "/static/success.png" }) {
  common_vendor.index.showToast({
    title: message,
    icon: "none",
    image
  });
}
function showmsg(msginfo, isshow) {
  msginfo.dec, msginfo.title, msginfo.type, isshow.value = true;
  setTimeout(() => {
    isshow.value = false;
  }, 1990);
}
exports.showSuccess = showSuccess;
exports.showerror = showerror;
exports.showmsg = showmsg;

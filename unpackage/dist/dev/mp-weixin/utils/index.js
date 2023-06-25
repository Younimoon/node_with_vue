"use strict";
const common_vendor = require("../common/vendor.js");
const http = new common_vendor.Request({
  //超时时长5分钟
  timeout: 3e5,
  baseURL: "http://127.0.0.1:3007",
  header: {
    // 'Content-Type': 'application/json',
    "Content-Type": "application/json;charset=UTF-8",
    // "Content-Type":"application/x-www-form-urlencoded",
    "Authorization": common_vendor.index.getStorageSync("user")
  }
});
exports.http = http;

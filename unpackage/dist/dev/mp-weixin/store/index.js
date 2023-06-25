"use strict";
const common_vendor = require("../common/vendor.js");
const useInfotStore = common_vendor.defineStore("userinfo", {
  state: () => {
    return {
      //用户信息持久化存储
      token: common_vendor.index.getStorageSync("token") || "",
      username: common_vendor.index.getStorageSync("name") || "",
      avatar: common_vendor.index.getStorageSync("avatar") || null,
      list: []
    };
  },
  actions: {
    login(data) {
      common_vendor.index.setStorageSync("user", data);
    },
    savename(data) {
      common_vendor.index.setStorageSync("name", data);
    },
    saveavatar(data) {
      common_vendor.index.setStorageSync("avatar", data);
    },
    touserinfo() {
      console.log(this.userinfo);
    }
  }
});
exports.useInfotStore = useInfotStore;

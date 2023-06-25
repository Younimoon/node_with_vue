"use strict";
const utils_index = require("./index.js");
utils_index.http.interceptors.request.use((config) => {
  if (config.method === "POST" && config.data)
    ;
  console.log(config);
  return config;
});
utils_index.http.interceptors.response.use((result) => {
  return result.data;
});
const Loginuser = (data) => {
  return utils_index.http.post("/user/login", {
    ...data
  });
};
const Regesteruser = (data) => {
  return utils_index.http.post("/user/regester", {
    ...data
  });
};
const userInfo = (data) => {
  return utils_index.http.get(`info/getInfo?username=${data.username}`);
};
const updateInfo = (data) => {
  return utils_index.http.post("info/updateAvatar", {
    ...data
  });
};
const updateUser = (data) => {
  return utils_index.http.post("info/updateInfo", {
    ...data
  });
};
const addHelp = (data) => {
  return utils_index.http.post("/help/addlist", {
    ...data
  });
};
const getHelp = (data) => {
  return utils_index.http.get(`/help/getlist`);
};
const addAppraise = (data) => {
  return utils_index.http.post("/help/addappraise", {
    ...data
  });
};
const getallappraise = () => {
  return utils_index.http.get("/help/getallappraise");
};
const updateSblike = (data) => {
  console.log(data);
  return utils_index.http.post("/help/updatesblike", {
    ...data
  });
};
const insertFavorite = (data) => {
  return utils_index.http.post("/help/insertfavorite", {
    ...data
  });
};
const getMyfavorite = (username) => {
  return utils_index.http.get("/help/getmyfavorite", {
    params: {
      username
    }
  });
};
exports.Loginuser = Loginuser;
exports.Regesteruser = Regesteruser;
exports.addAppraise = addAppraise;
exports.addHelp = addHelp;
exports.getHelp = getHelp;
exports.getMyfavorite = getMyfavorite;
exports.getallappraise = getallappraise;
exports.insertFavorite = insertFavorite;
exports.updateInfo = updateInfo;
exports.updateSblike = updateSblike;
exports.updateUser = updateUser;
exports.userInfo = userInfo;

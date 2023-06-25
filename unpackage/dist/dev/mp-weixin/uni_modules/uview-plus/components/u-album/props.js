"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 图片地址，Array<String>|Array<Object>形式
    urls: {
      type: Array,
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.urls
    },
    // 指定从数组的对象元素中读取哪个属性作为图片地址
    keyName: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.keyName
    },
    // 单图时，图片长边的长度
    singleSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.singleSize
    },
    // 多图时，图片边长
    multipleSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.multipleSize
    },
    // 多图时，图片水平和垂直之间的间隔
    space: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.space
    },
    // 单图时，图片缩放裁剪的模式
    singleMode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.singleMode
    },
    // 多图时，图片缩放裁剪的模式
    multipleMode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.multipleMode
    },
    // 最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
    maxCount: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.maxCount
    },
    // 是否可以预览图片
    previewFullImage: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.previewFullImage
    },
    // 每行展示图片数量，如设置，singleSize和multipleSize将会无效
    rowCount: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.rowCount
    },
    // 超出maxCount时是否显示查看更多的提示
    showMore: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.album.showMore
    }
  }
};
exports.props = props;

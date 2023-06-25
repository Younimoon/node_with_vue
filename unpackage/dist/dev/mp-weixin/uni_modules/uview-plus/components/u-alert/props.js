"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 显示文字
    title: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.title
    },
    // 主题，success/warning/info/error
    type: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.type
    },
    // 辅助性文字
    description: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.description
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.closable
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.showIcon
    },
    // 浅或深色调，light-浅色，dark-深色
    effect: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.effect
    },
    // 文字是否居中
    center: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.center
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.alert.fontSize
    }
  }
};
exports.props = props;

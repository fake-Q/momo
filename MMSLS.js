
const MMSLS =  [
  "https://www.maimemo.com/share/page?uid=27169508&pid=e6d00c8066f7f4d9350727431865e0c7&tid=3fde0b981a83db319f3b298304728dbc",
  ]/**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }

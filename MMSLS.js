
const MMSLS =  [
  "https://www.maimemo.com/share/page?uid=27169508&pid=86153affa98c4e48c05f25cac4bd8d36&tid=50a72f66c3cff389fe693eb862382541",
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

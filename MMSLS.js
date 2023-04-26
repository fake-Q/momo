
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=513b3c64359f1eb9f2a155803aff8820&tid=0d380296e2078f83c8f8b53c707fea69",
  
]
  /**
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

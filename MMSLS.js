
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=28b498f0444b55e6a98f17b314c5f77d&tid=475cfa507d37700970ab8c5ae2b815f8",
  
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

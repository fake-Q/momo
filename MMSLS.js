
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=6e547cbe8e5dfa5fd4f33aaede2e68a2&tid=de5126fcd08d12f1823a146398f60379",
  
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


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=e100c746c59460cdf3cdc4201f6d7a63&tid=8c1c827a1b32fe636a12c4491f2a0d0d",
  
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=3f0d7b869c48f46c08423e180d455f46&tid=1b84167617f89c03e5615bb2cf802f81",
    "",
    "",
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

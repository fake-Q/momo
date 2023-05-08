
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=5fa6472e44936a1bf4d6cab60d6dd22d&tid=8b04d9f68fd3e83f515439ba1e76f0c0",
  
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

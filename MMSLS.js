
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=9415750a9e9887a76119fa73bab0e6a6&tid=73c3c8e4eb1f917cee532c07cc1cc534",
  
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

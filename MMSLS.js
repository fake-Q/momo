
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=e58f0dadf6a063b6b0be0353ad380417&tid=99ecc29ff578ffb48dc37a7353e8e53c",
  
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

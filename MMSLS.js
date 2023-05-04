
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=7bca70c0b045486f0984ecc2d4cc7e17&tid=acaf77da162e99fe5dc359438c41ef48",
  
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


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=973055e9f2c5ef4790fbe279d97e4a77&tid=462846f986f10f63d054a45157da53e5",
  
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

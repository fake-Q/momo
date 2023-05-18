
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=dc499dc74d0a3028edde1cba23882b78&tid=205a576a7d35169a1d670b9f9ead107b",
  
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

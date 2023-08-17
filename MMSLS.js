
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=d31781bb791dc6af50f9890f83e28150&tid=ac500de8dc4cf7a122d5896f2b0b8b1f",
    
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

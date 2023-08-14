
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=a3c1365681c503158ca8342a3f28b5c8&tid=58b5d00ab562a59d316972b0b766305f",
    
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
